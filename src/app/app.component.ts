import { Component } from '@angular/core';
import { Char } from './char.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'angular-project';
  public letterToSend = 'A';

  public char: Char = {
    letter: 'B',
    id: 1
  };

  public onLetterClicked(letter: string): void {
    console.log('Kliknięto: ', letter);
  }

  public onMouseOver(letter: string): void {
    console.log('Najechano na: ', letter);
  }

  public changeLetter(): void {
    this.char = {
      letter: 'A',
      id: 2
    }
  }
}
