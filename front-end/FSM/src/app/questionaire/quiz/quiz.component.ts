import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { HelperService } from '../services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../models/index';
import { ConfirmBoxService } from 'src/app/common/confirm-box/conform-box.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  quizes: any[];
  eligible = false;
  quiz: Quiz = new Quiz(null);
  mode: string = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 0,  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': true,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': true,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none',
    'questionLimit': 3
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  constructor(private quizService: QuizService, 
    private confirmBoxService: ConfirmBoxService,
    private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('uid-details')) {
        this.router.navigate(['/uid-input'])
    }
    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);
  }

  getRandomElements(sourceArray, requiredLength) {
    var result = [];
    while(result.length<requiredLength){
        let random = Math.floor(Math.random()*sourceArray.length);
        if(result.indexOf(sourceArray[random])==-1){
            result.push(sourceArray[random]);
        }
    }
    return result;
 }

  loadQuiz(quizName: string) {
    this.quizService.get(quizName).subscribe(res => {
      const questionsLimited = this.getRandomElements(res.questions, this.config.questionLimit);
      res.questions = questionsLimited;
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
    });
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(index) {
    return this.quiz.questions[index].options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {
    this.confirmBoxService.confirm('Please confirm..', 'Do you really want to submit quiz? Once submitted submission cannot be reverted back.')
    .then((confirmed) => {
        let answers = [];
        let countAns = 0;
        this.quiz.questions.forEach(x => answers.push({ 'QuizId': this.quiz.id, 'QuestionId': x.id}));
        
        this.quiz.questions.forEach((x) => {
            x.options.filter((data) => {
                if (data.isAnswer && data.selected) {
                    countAns++;
                }
            });
        });

        if (countAns === this.config.questionLimit) {
            this.eligible = true;
            const storedData = JSON.parse(localStorage.getItem('uid-details'));
            this.quizService.post(storedData);
        }
        // Post your data to the server here. answers contains the questionId and the users' answer.
        console.log(this.quiz.questions);
        this.mode = 'result';
        localStorage.clear();
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
