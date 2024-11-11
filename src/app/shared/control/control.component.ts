import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewEncapsulation,
  afterNextRender,
  afterRender,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
})
export class ControlComponent implements AfterContentInit{
  label = input.required<string>();
  private el = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  constructor() {
    afterRender(() => {
      console.log("After render");
    })

    afterNextRender(() => {
      console.log("AFter next render");
    })
  }

  ngAfterContentInit(): void {
    
  }

  onClick() {
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control);
  }
}
