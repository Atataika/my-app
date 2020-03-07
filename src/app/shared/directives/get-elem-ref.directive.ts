import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGetElemRef]'
})
export class GetElemRefDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  constructor(private el: ElementRef) {}

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
