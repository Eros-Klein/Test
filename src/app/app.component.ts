import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title:string = 'relace';

  isLoggedIn() : boolean{
    return localStorage.getItem('LoggedIn') === 'true';
  }

  async login() : Promise<void>{
    const response = await fetch(`http://breneisminecraft.duckdns.org:5082/api/validUser/${localStorage.getItem('Username')}/${localStorage.getItem('Token')}`);
    const data = await response.json();
    if(data === true){
      localStorage.setItem('LoggedIn', 'true');
    }
    else localStorage.setItem('LoggedIn', 'false');
  }

  ngOnInit(): void {
    localStorage.setItem('LoggedIn', 'false');
    this.login();
  }
}
