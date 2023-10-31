import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string = 'relace';
  username : string = '';
  password : string = '';
  email : string = '';
  users : string[] = [];

  constructor() {
  }
  public refresh(){
    fetch(`http://localhost:8080/api/getUsers`, {
  }).then(response => {
    response.json().then((data) => {
      this.users = data;
    });
  }).catch(err => {

  });
  }
  public login(){
    console.log("login");
    fetch(`http://localhost:8080/api/validUser/${this.username}/${this.password}`, {
  }).then(response => {
    console.log(response.json());
  }).catch(err => {

  });
  }
  public register(){
    fetch(`http://localhost:8080/api/insertUser/${this.username}/${this.password}/${this.email}`, {
  }).then(response => {
    console.log(response);
  }).catch(err => {

  });
    console.log("register");
  }

  public remove(){
    console.log("login");
    fetch(`http://localhost:8080/api/removeAccount/${this.username}/${this.password}`, {
  }).then(response => {
    console.log(response.json());
  }).catch(err => {

  });
  }
  public onChange(htmlElement: any){
    if(htmlElement.id == 'username'){
      this.username = htmlElement.value;
    }
    if(htmlElement.id == 'password'){
      this.password = htmlElement.value;
    }
    if(htmlElement.id == 'email'){
      this.email = htmlElement.value;
    }
  }
}
