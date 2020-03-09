import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('scroll')
  public reactOnScroll(): void {
    const rootElem = this.elementRef.nativeElement;
    const scrolled = rootElem.scrollTop;
    const customMultiplier = 10;
    const pseudoColor = this.VBColorToHEX(scrolled * customMultiplier);

    rootElem.firstChild.style.backgroundColor = pseudoColor;
    console.log('Проскролили:', scrolled, 'result color:', pseudoColor);
  }

  private VBColorToHEX(i: number): string {
    const bbggrr = ('000000' + i.toString(16)).slice(-6);
    const rrggbb = bbggrr.substr(4, 2) + bbggrr.substr(2, 2) + bbggrr.substr(0, 2);
    return '#' + rrggbb;
  }
}
