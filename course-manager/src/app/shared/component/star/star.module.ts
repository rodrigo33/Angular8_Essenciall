//deixando claro no nome do arquivo qual a função dele

import { NgModule } from '@angular/core';
import { StarComponent } from './star.component';

//usando decorator, avisando ao angular que essa classe é elegivel para ser
//um module angular
@NgModule({
    declarations: [
        StarComponent
        //propriedade para exportar o component, para que eu possa importar o componente
        //que desejo no meu course.module.ts
    ], exports: [
        StarComponent
        
    ]
})
export class StarModule{

}