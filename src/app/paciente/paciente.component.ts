import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})

export class PacienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() ValorInicial: number = 50;

}
