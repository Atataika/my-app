import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective implements OnInit {
  @Input()
  public markerColor: string;

  @HostBinding('style.backgroundColor')
  public backgroundColor: string;

  @HostBinding('style.textDecoration')
  public underline: string;

  private defaultColor = 'yellow';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.markerColor ? this.markerColor : this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this.backgroundColor = color;
  }

  ngOnInit() {
    setInterval(() => {
      this.underline = this.underline === 'none' ? 'underline' : 'none';
    }, 450);
  }
}
