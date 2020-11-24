import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //importando aqui as rotas serão carregadas na root
    RouterModule.forRoot([
      //rota de listagem dos cursos
      {        
        path: 'courses', component: CourseListComponent
      },
      {
        //estou passando alem da url o id
        path: '/courses/info/:id', component: CourseInfoComponent
      },
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
