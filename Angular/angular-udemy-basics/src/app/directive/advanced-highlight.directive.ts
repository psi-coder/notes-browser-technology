import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvancedHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseenter') mouseover(even: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(even: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
  }
}
