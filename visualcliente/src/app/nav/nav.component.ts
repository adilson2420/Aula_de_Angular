import { Component, OnInit } from '@angular/core';
import { ContaService } from '../_services/conta.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn: boolean=false;
  constructor(private ContaService: ContaService) { }

  ngOnInit(): void {
  }
  login() {
    this.ContaService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log('Deu merda, ', error);
    });
  }
  logout(){
    this.loggedIn=false;
  }
}
