import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public registerMenu: boolean = false;

  public async login(username: string, password: string): Promise<boolean> {
    if (await this.isAccountValid(username, password) === true) {
      console.log('Logged in');
      localStorage.setItem('LoggedIn', 'true');
      localStorage.setItem('Username', username);
      localStorage.setItem('Password', password);
      console.log("LoggedIn=" + localStorage.getItem('LoggedIn'));
      return true;
    }
    else return false;
  }
  public register(username: string, password: string, email: string): boolean {
    let valid: boolean = false;
    fetch(`http://breneisminecraft.duckdns.org:5082/api/insertUser/${username}/${password}/${email}`, {
    }).then(response => {
      console.log(response);
      this.login(username, password);
      response.json().then(data => {
        console.log(data);
        valid = data;
      });
    }).catch(err => {
      console.log(err);
      valid = false;
    });
    return valid;
  }
  public async isAccountValid(username: string, password: string): Promise<boolean> {
    let valid: boolean = false;
    const response = await fetch(`http://breneisminecraft.duckdns.org:5082/api/validUser/${username}/${password}`);
    console.log("valid = " + valid);
    return valid;
  }
  public static logout(): void {
    localStorage.setItem('LoggedIn', 'false');
    localStorage.setItem('Username', '');
    localStorage.setItem('Password', '');
  }
}
