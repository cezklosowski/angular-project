import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Char } from '../char.interface';

@Component({
  selector: 'app-app-char-item',
  templateUrl: './app-char-item.component.html',
  styleUrls: ['./app-char-item.component.css']
})
export class AppCharItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() letter: Char;
  @Output() letterClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() mouseOver: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log('Initialized.');
  }

  ngOnChanges(): void{
    console.log('Input changed.');
  }

  ngOnDestroy(): void {
    console.log('Destroyed.');
  }

}
