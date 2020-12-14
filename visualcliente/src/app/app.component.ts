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

  constructor(private contaServicee: ContaService) { }
  ngOnInit(): void {
    this.setCurrenteUser();
  }
  setCurrenteUser() {
    const user: User = JSON.parse(localStorage.getItem("user")??'{}');
    this.contaServicee.setCurrentUser(user);
  }
}
