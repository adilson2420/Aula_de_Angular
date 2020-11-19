import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'visualcliente';
  users: any;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getUser();
  }

  getUser() { 
    this.http.get('https://localhost:5001/api/user').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
