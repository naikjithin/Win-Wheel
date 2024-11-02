import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-winners-view',
  templateUrl: './winners-view.component.html',
  styleUrls: ['./winners-view.component.css']
})
export class WinnersViewComponent implements OnInit {

  data = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.data = data;
    })  
  }
}
