import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:string = 'relace';

  isLoggedIn() : boolean{
    console.log("LoggedIn=" + localStorage.getItem('LoggedIn'));
    return localStorage.getItem('LoggedIn') === 'true';
  }
}
