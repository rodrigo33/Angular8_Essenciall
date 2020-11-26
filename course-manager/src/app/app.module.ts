import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.modules';

@NgModule({
  declarations: [
    AppComponent,           
       
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    CourseModule,
    CoreModule,
    //importando aqui as rotas serão carregadas na root
    RouterModule.forRoot([
      
      {
        //rota padrão do angular na raiz
        //na raiz irá acessar essa rota
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
