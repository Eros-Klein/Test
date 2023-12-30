import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ILoginResponse } from './login.component.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public registerMenu: boolean = false;

  public async login(username: string, password: string): Promise<void> {
    const response = await fetch(`http://breneisminecraft.duckdns.org:5082/api/validUser/${username}/${password}`);
    const data : ILoginResponse = await response.json();
    if(data.success){
      localStorage.setItem('LoggedIn', 'true');
      localStorage.setItem('Username', username);
      localStorage.setItem('Token', data.token);  
    }
  }

  public async getToken(username: string, password: string): Promise<string> {
    const response = await fetch(`http://breneisminecraft.duckdns.org:5082/api/getToken/${username}/${password}`);
    const data = await response.json();
    return data;
  }

  public async register(username: string, password: string, email: string): Promise<boolean> {
    const response = await fetch(`http://breneisminecraft.duckdns.org:5082/api/insertUser/${username}/${password}/${email}`);
    const data : ILoginResponse = await response.json();
    if(data.success){
      localStorage.setItem('LoggedIn', 'true');
      localStorage.setItem('Username', username);
      localStorage.setItem('Token', data.token);  
    }
    return data.success;
  }

  public async isAccountValid(username: string, password: string): Promise<boolean> {
    const response = await fetch(`http://breneisminecraft.duckdns.org:5082/api/validUser/${username}/${password}`);
    const data : ILoginResponse  = await response.json();
    return data.success;
  }

  public static logout(): void {
    localStorage.setItem('LoggedIn', 'false');
    localStorage.setItem('Username', '');
    localStorage.setItem('Token', '');
  }
}
