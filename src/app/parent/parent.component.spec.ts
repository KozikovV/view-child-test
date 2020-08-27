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
    expect(component).toBeTruthy();
  });

  it('test property field', () => {
    const child = ngMocks.find(fixture.debugElement, ChildComponent);
    child.componentInstance.someValue = 'property test';
    expect(component.childComponent.someValue).toBe('property test');
  });

  it('getter test', () => {
    spyOnProperty(component.childComponent, 'testGetter').and.callFake(() => 'getter test');
    expect(component.childComponent.testGetter).toBe('getter test');
  });

  it('method test', () => {
    const child = ngMocks.find(fixture.debugElement, ChildComponent);
    const spy = spyOn(component.childComponent, 'someAction').and.callFake(() => (child.componentInstance.someValue = 'property update'));
    component.updateChild();
    expect(spy).toHaveBeenCalled();
    expect(component.childComponent.someValue).toBe('property update');
  });

});
