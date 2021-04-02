import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PacienteComponent } from './paciente/paciente.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { TelefoneComponent } from './telefone/telefone.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PacienteComponent,
    EnderecoComponent,
    TelefoneComponent
    
   
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule
    
   

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
