import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import {MockComponents, ngMocks} from 'ng-mocks';
import {ChildComponent} from '../child/child.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComponent, MockComponents(ChildComponent) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const child = ngMocks.find(fixture.debugElement, ChildComponent);
    child.componentInstance.someValue = 'some value';
    console.log(component.childComponent.someValue);
    expect(component).toBeTruthy();
  });
});
