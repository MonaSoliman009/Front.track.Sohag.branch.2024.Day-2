import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[BorderImage]',
  standalone: true
})
export class BorderImageDirective {

  @Input() defaultColor:string='yellow'

  @Input('BorderImage') myColor:string='yellow'

  constructor(public eleRef:ElementRef) { 
   
    this.eleRef.nativeElement.style.borderRadius='50%'
    this.eleRef.nativeElement.style.border=`3px solid ${this.defaultColor}`
  }

 @HostListener('mouseover') fun1(){
    this.eleRef.nativeElement.style.borderRadius='20%'
    this.eleRef.nativeElement.style.border=`3px solid ${this.myColor}`
  }


  @HostListener('mouseout') fun2(){
    this.eleRef.nativeElement.style.borderRadius='50%'
    this.eleRef.nativeElement.style.border=`3px solid ${this.defaultColor}`
  }
}
