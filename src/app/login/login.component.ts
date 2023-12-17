import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public registerMenu : boolean = false;
  
  public login(username : string, password : string) : boolean{
    if(this.isAccountValid(username, password)){
      localStorage.setItem('LoggedIn', 'true');
      localStorage.setItem('Username', username);
      localStorage.setItem('Password', password);
    }
    return true;
  }
  public register(username : string, password : string, email : string) : boolean{
    fetch(`http://breneisminecraft.duckdns.org:5082/api/insertUser/${username}/${password}/${email}`, {
  }).then(response => {
    this.login(username, password);
    return response.json();
  }).catch(err => {
    console.log(err);
    return false;
  });
  return true;
  }
  public isAccountValid(username : string, password : string) : boolean{
    fetch(`http://breneisminecraft.duckdns.org:5082/api/validUser/${username}/${password}`, {
  }).then(response => {
    return response.json();
  }).catch(err => {
    console.log(err);
    return false;
  });
  return true;
  }
}
