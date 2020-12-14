import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ContaService } from '../_services/conta.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  @Output() cancelarRegistro = new EventEmitter();

  model: any = {};
  constructor(private contaServico: ContaService) {}

  ngOnInit(): void {}

  registrar() {
    this.contaServico.registro(this.model).subscribe(
      (response) => {
        console.log(response);
        this.cancelar();
      },
      (error) => {
        console.log('Erro ao registrar',error);
      }
    );
  }

  cancelar() {
    this.cancelarRegistro.emit(false);
  }
}
