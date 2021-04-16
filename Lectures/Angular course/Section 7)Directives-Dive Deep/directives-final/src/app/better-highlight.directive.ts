import { Directive, Renderer2, ElementRef, OnInit,HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  @Input() defaultColor: string ='transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  constructor(private elementRef: ElementRef,private renderer: Renderer2) 
  { 
     
  }
  ngOnInit()
  {
    this.backgroundColor = this.defaultColor;
  }
  
  @HostListener('mouseenter') mouseOver()
  {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave()
  {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
      this.backgroundColor = this.defaultColor;
  }
  

}
