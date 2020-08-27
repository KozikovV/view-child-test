import {Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent, {static: true}) childComponent: ChildComponent;

  constructor() { }

  ngOnInit() {
  }

  updateChild(): void {
    this.childComponent.someAction();
  }
}
