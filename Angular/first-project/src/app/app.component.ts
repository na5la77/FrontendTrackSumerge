import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'first-project';
  showSecret = false;
  log : number[]= [];
  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length +1);
  }
}
