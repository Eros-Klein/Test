import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})

 

export class AssignmentComponent {
  
  async fetchAssignment(token:Promise<String>) : Promise<Assignment[]> {
    let tokenstr : String = await token;
    let response = await fetch(`https://relacexyz.duckdns.org:5420/api/getAssignments/${tokenstr}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const assignments : Assignment[] = [];
    const json = await response.json();
    json.forEach((assignment: any) => {
      assignments.push({
        title: assignment.title,
        description: assignment.description,
        dueDate: assignment.dueDate,
        completed: assignment.completed,
        course: assignment.course
      });
    });
    return assignments;
  }
  
  async fetchToken(user:String, pass:String):Promise<String> {
    let response = await fetch("https://edufs.edu.htl-leonding.ac.at/moodle/login/token.php?username=" + user + "&password=" + pass + "&service=moodle_mobile_app")

    const json = await response.json();
    console.log(json);
    console.log(json.token);
    return json.token;
  }
  async getAllAssignments() {
    let assignmentList = document.getElementById("assignmentList");
    let username = document.getElementById("username") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;
    let token = this.fetchToken(username.value, password.value);
    let assignments = await this.fetchAssignment(token);
    console.log(assignments);
    assignmentList!.innerHTML = assignments.map((assignment: Assignment) => `
    <div class="assignment">
      <div class="assignment-title">${assignment.title.length <= 20 ? assignment.title : assignment.title.slice(0,18).concat("...")}</div>
      <div class="assignment-description">${assignment.description.length < 25 ? assignment.description : assignment.description.slice(0,22) .concat("...") }</div>
      <div class="assignment-duedate">${new Date(Number(assignment.dueDate)*1000).getDate()}/${new Date(Number(assignment.dueDate)*1000).getMonth()+1}/${new Date(Number(assignment.dueDate)*1000).getFullYear()-1984} n.Z.</div>
      <div class="line"></div>
      <div class="assignment-course">${assignment.course.length <= 15 ? assignment.course : assignment.course.slice(0,12).concat("...")}</div>
      <div class="line"></div>
      <div class="assignment-done">${assignment.completed?'✅':'❌'}</div>
    </div>`).join("");
    //div!.innerHTML = assignments.map((assignment: any) => `<tr><th>${assignment.title}</th><th>${assignment.description}</th><th><input type="checkbox" id="checkbox" ${assignment.completed ? "checked":""} ></th></tr>`).join(""); //<th><button id="deletebutton" onclick="deleteTodo(${todo.id})">DELETE</button></th>
  }

  async testmethod() {
    let resp2 = await fetch(`http://relacexyz:5420/api/getAssignments/a6eb55e1228fbc8e53b71cb714088e86`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const assignments : Assignment[] = [];
    const jso2 = await resp2.json();
    console.log(jso2);
    jso2.forEach((assignment: any) => {
      assignments.push({
        title: assignment.title,
        description: assignment.description,
        dueDate: assignment.dueDate,
        completed: assignment.completed,
        course: assignment.course
      });
    });
  }
}
interface Assignment {
  title: String;
  description: String;
  dueDate: Date;
  completed: boolean;
  course: String;
}
