import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  someValue = 'child component value';

  constructor() { }

  ngOnInit() {
  }

  get testGetter(): string {
    return this.someValue;
  }

  someAction() {
    this.someValue = 'changed value';
  }

}
