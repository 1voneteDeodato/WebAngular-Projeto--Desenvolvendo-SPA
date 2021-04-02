import { Component, OnInit } from '@angular/core';
import { paciente} from '../model/paciente'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  

  constructor() {
    
    
    }

  valor: number = 0;
  exibirTabela: boolean = false;

  listaPacientes: paciente[] = [
    
      {paciente: 'João', endereco: 'carioca, 43 - Malvinas', email: 'CasaGrande@Bol.com.br'},
      {paciente: 'RAfaela', endereco:'Castanhola, 18 - Liberdade', email: 'c.ruaanaCasaGrande@Bol.com.br'},
      {paciente: 'Maria', endereco:'Castelo Forte, 03 - Cruzeiro', email: 'Xlinix@Bol.com.br'},
      {paciente: 'Josefa',  endereco: 'Serverino Cabral, 60 - Atalaia', email: 'otavioFreitas@Bol.com.br'},

  ];

  displayedColumns: string [] = ['paciente', 'endereço', 'email'];



  ngOnInit(): void {

    this.valor = 5;
  }

mudarValor() {

  this.valor++;

}

reiniciarValor() {

  this.valor = 0;

}

exibeTabela(): void {
  
  this.exibirTabela = true;

}

  


}