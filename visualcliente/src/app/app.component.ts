import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { User } from './_models/user';
import { ContaService } from './_services/conta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Kitade Estudo';
  users: any;

  constructor(private http: HttpClient, private contaServicee: ContaService) { }
  ngOnInit(): void {
    this.getUser();
    this.setCurrenteUser();
  }
  setCurrenteUser() {
    const user: User = JSON.parse(localStorage.getItem("user")??'{}');
    this.contaServicee.setCurrentUser(user);
  }

  getUser() {
    localStorage.getItem('user')
    this.http.get('https://localhost:5001/api/user').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    }) 
  }
}
