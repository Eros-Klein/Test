import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:string = 'relace';

  isLoggedIn() : boolean{
    return localStorage.getItem('LoggedIn') === 'true';
  }
}
