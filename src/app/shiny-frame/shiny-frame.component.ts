import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-shiny-frame',
  templateUrl: './shiny-frame.component.html',
  styleUrls: ['./shiny-frame.component.sass'],
  animations: [
    trigger('highlighting', [
      state('false', style({
        'background-position-x': '{{ left }}',
        'background-position-y': '{{ top }}'
      }), { params: { left: '0px', top: '0px' }}),
      state('true', style({
        'background-position-x': '{{ right }}',
        'background-position-y': '{{ bottom }}'
      }), { params: { right: '0px', bottom: '0px' }}),
      transition('false => true', [
        animate('{{ duration }} {{ delay }}')
      ], { params: { duration: '1s', delay: '0s', easing: 'ease-in-out'}})
    ])
  ]
})
export class ShinyFrameComponent implements OnInit {

  constructor(private _host: ElementRef<HTMLElement>, private sanitizer: DomSanitizer) { }

  highlighting = false;

  ngOnInit() {
  }

  public get clientHeight(): number {
    return this._host.nativeElement.clientHeight;
  }

  public get clientWidth(): number {
    return this._host.nativeElement.clientWidth;
  }

  public get backgroundSize(): string {
    return `${this.clientHeight * 3}px ${this.clientHeight}px`;
  }

  public highlight() {
    this.highlighting = true;
  }

  public endHighlighting() {
    this.highlighting = false;
  }

  // duration in seconds
  public get duration(): number {
    return 0.8;
  }

  public get thickness(): number {
    return 1;
  }

  public get length(): number {
    return 200;
  }

  // pixels/sec
  public get speed(): number {
    return (this.clientWidth + this.clientHeight + this.length) / this.duration;
  }

  public get verticalDuration(): number {
    return (this.clientHeight + this.length) / this.speed;
  }

  public get horizontalDuration(): number {
    return (this.clientWidth + this.length) / this.speed;
  }

  public get bottomDelay(): number {
    return this.clientHeight / this.speed;
  }

  public get rightDelay(): number {
    return this.clientWidth / this.speed;
  }

  public get blur(): number {
    return 5;
  }

  public get blurOpacity(): number {
    return 0.8;
  }

  public getGradient2(name: string, direction: string): string {
    let gradient: string;
    switch (name) {
      case 'yellow2':
        gradient = `linear-gradient(${direction}, rgba(255,202,104,0) 0%,rgba(255,237,209,1) 99%,rgba(255,202,104,0) 100%)`;
        break;
    }
    return gradient;
  }

  public get top(): any {

    return {
      width: '100%',
      height: `${this.thickness}px`,
      top: 0,
      left: 0,
      'background-size': `${this.length}px ${this.thickness}px`,
      'background-image': this.getGradient2('yellow2', 'to right')
    };
  }

  public get topBlur(): any {
    return {
      width: '100%',
      height: `${this.thickness + this.blur * 2}px`,
      top: `-${this.blur}px`,
      left: 0,
      'background-size': `${this.length}px ${this.thickness + this.blur * 2}px`,
      filter: `blur(${this.blur}px)`,
      opacity: this.blurOpacity,
      'background-image': this.getGradient2('yellow2', 'to right')
    };
  }

  public get bottom(): any {

    return {
      width: '100%',
      height: `${this.thickness}px`,
      bottom: 0,
      left: 0,
      'background-size': `${this.length}px ${this.thickness}px`,
      'background-image': this.getGradient2('yellow2', 'to right')
    };
  }

  public get bottomBlur(): any {
    return {
      width: '100%',
      height: `${this.thickness + this.blur * 2}px`,
      bottom: `-${this.blur}px`,
      left: 0,
      'background-size': `${this.length}px ${this.thickness + this.blur * 2}px`,
      filter: `blur(${this.blur}px)`,
      opacity: this.blurOpacity,
      'background-image': this.getGradient2('yellow2', 'to right')
    };
  }

  public get left(): any {
    return {
      height: '100%',
      width: `${this.thickness}px`,
      top: 0,
      left: 0,
      'background-size': `${this.thickness}px ${this.length}px`,
      'background-image': this.getGradient2('yellow2', 'to bottom')
    };
  }

  public get leftBlur(): any {
    return {
      height: '100%',
      width: `${this.thickness + this.blur * 2}px`,
      top: 0,
      left: `-${this.blur}px`,
      'background-size': `${this.thickness + this.blur * 2}px ${this.length}px`,
      filter: `blur(${this.blur}px)`,
      overflow: 'visible',
      opacity: this.blurOpacity,
      'background-image': this.getGradient2('yellow2', 'to bottom')
    };
  }

  public get right(): any {
    return {
      height: '100%',
      width: `${this.thickness}px`,
      top: 0,
      right: 0,
      'background-size': `${this.thickness}px ${this.length}px`,
      'background-image': this.getGradient2('yellow2', 'to bottom')
    };
  }

  public get rightBlur(): any {
    return {
      height: '100%',
      width: `${this.thickness + this.blur * 2}px`,
      top: 0,
      right: `-${this.blur}px`,
      'background-size': `${this.thickness + this.blur * 2}px ${this.length}px`,
      filter: `blur(${this.blur}px)`,
      overflow: 'visible',
      opacity: this.blurOpacity,
      'background-image': this.getGradient2('yellow2', 'to bottom')
    };
  }
}
