import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnderecoComponent } from './endereco/endereco.component';
import { HomeComponent } from './home/home.component';
import { PacienteComponent } from './paciente/paciente.component';
import { TelefoneComponent } from './telefone/telefone.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'Paciente',
    component: PacienteComponent 
  },

  {
    path: 'Endereco',
    component: EnderecoComponent
  },

  {
    path: 'Telefone',
    component: TelefoneComponent 
  },


  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
