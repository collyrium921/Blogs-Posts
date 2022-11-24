import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // @Input('appHighlight') color:string = 'yellow'

  //if the variable name in the component and html attribute is same then we need not to define it like   @Input('color')
  @Input() color:string = 'yellow'
  @Input() summaryColor:string = 'black'
  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') addHighlight(){
    this.element.nativeElement.style.backgroundColor = this.color
    this.element.nativeElement.style.color = this.summaryColor
  }

  @HostListener('mouseleave') removeHighlight(){
    this.element.nativeElement.style.backgroundColor = null
    this.element.nativeElement.style.color = null
  }
}
