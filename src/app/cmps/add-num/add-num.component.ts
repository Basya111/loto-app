import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-num',
  templateUrl: './add-num.component.html',
  styleUrls: ['./add-num.component.scss']
})
export class AddNumComponent implements OnInit {

  newNum: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  onAddNum(){
    console.log('num', this.newNum);
    
  }

}
