import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uid-input',
  templateUrl: './uid-input.component.html',
  styleUrls: ['./uid-input.component.css']
})
export class UidInputComponent implements OnInit {

  inputForm: FormGroup;
  formSubmitted: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    this.inputForm= this.formBuilder.group({
        uid: ['', [Validators.required]],
        name: ['', Validators.required]
    });
  }
  

  handleNextStep() {
    this.formSubmitted = true;
    console.log(this.inputForm.value);
    if (this.inputForm.valid) {
        // console.log(this.inputForm.value);
        localStorage.setItem('uid-details', JSON.stringify(this.inputForm.value));
        // console.log('retrievedObject: ', JSON.parse(localStorage.getItem('uid-details')));
        this.router.navigate(['/quiz'])
    }
  }
}
