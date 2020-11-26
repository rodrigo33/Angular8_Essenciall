import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from './component/error-404/error-404.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

@NgModule({
    declarations:[
        NavBarComponent,
        Error404Component
    ], imports: [
        RouterModule.forChild([
                //Outra rota padrão do angular ** quando não encontra a rota digitada o angular
                //irá redirecionar para o componente informado ai
            {        
                path: '**', component: Error404Component
            }
        ])
    ],exports: [
        NavBarComponent
    ]
})
export class CoreModule{

}