import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'spa-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {



  constructor() { }
  ngOnInit(): void {
  }

  @Input() Rua: string = "Rua:";
 

}
