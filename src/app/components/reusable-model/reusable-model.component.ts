import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable-model',
  templateUrl: './reusable-model.component.html',
  styleUrls: ['./reusable-model.component.css']
})
export class ReusableModelComponent implements OnInit {

  @Input() title: string;
  @Output() send = new EventEmitter<string>();
  textValue: string = ''
  constructor() { }

  ngOnInit() {
  }

  sendMsg(val) {
    this.send.emit(val);
  }

}
