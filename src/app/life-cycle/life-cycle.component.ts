import { 
  Component,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  SimpleChanges
} from '@angular/core';


@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})

export class LifeCycleComponent implements OnInit,
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy

{
  

    // name: string= "tamil"

    displayChild: boolean = false;

    constructor() {
      console.log("lifecycle: Constructor");
    }

    toggle() {
      this.displayChild = !this.displayChild;
    }

    ngOnChanges() {
      console.log("lifecycle: OnChanges");
    }

    ngOnInit() {
      console.log("lifecycle: OnInit");
    }

    ngDoCheck() {
      console.log("lifecycle: DoCheck");
    }

    ngAfterContentInit() {
      console.log("lifecycle: AfterContentInit");
    }

    ngAfterContentChecked() {
    console.log("lifecycle:AfterContentChecked");
    }
 
    ngAfterViewInit() {
    console.log("lifecycle:AfterViewInit");
    }
 
    ngAfterViewChecked() {
      console.log("lifecycle:AfterViewChecked");
    }
 
    ngOnDestroy() {
      console.log("lifecycle:OnDestroy");
    }

}
