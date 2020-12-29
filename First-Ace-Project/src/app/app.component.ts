import { Component } from '@angular/core';
import 'brace';
import 'brace/mode/text';
import 'brace/theme/github';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  log(event: any, txt: any) {
    console.log('ace event', event);
    
    document.querySelector('#log').value += `${txt}\n`;
  }
}