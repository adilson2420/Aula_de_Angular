import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { ContaService } from '../_services/conta.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public contaService: ContaService) {}

  ngOnInit(): void {
    console.log('Current User ->', this.contaService.currentUser$);
  }
  // tslint:disable-next-line: typedef
  login() {
    this.contaService.login(this.model).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log('Current User login->', this.contaService.currentUser$);
  }
  // tslint:disable-next-line: typedef
  logout() {
    this.contaService.logout();
    console.log('Current User logout->', this.contaService.currentUser$);
  }
}
