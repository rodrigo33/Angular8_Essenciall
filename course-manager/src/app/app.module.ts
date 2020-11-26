import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,        
    NavBarComponent,
    Error404Component    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    //importando aqui as rotas serão carregadas na root
    RouterModule.forRoot([
      
      {
        //rota padrão do angular na raiz
        //na raiz irá acessar essa rota
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },      
      //Outra rota padrão do angular ** quando não encontra a rota digitada o angular
      //irá redirecionar para o componente informado ai
      {
        
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
