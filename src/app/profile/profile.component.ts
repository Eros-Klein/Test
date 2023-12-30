import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public name : String | null = localStorage.getItem('Username');
    public logout() : void{
      LoginComponent.logout();
    }
}
