import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, ElementRef, Input, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ControlComponent implements AfterContentInit{

  constructor() { 

    afterRender(() => {
      console.log("afterRender");
      console.log(this.control?.nativeElement);
    });

    afterNextRender(() => {
      console.log("afterNextRender");
      console.log(this.control?.nativeElement);
    });
  }


  @Input({required:true})
  label !:string;

  @ContentChild('input') private control ?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  OnClick(){
    console.log("clicked");
    console.log(this.control?.nativeElement.value);
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    console.log(this.control?.nativeElement);
  }

}
