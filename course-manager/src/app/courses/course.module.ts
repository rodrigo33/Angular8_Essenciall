//deixando claro no nome do arquivo qual a função dele

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../pipe/replace.pipe';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';

//usando decorator, avisando ao angular que essa classe é elegivel para ser
//um module angular
@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        ReplacePipe,
        StarComponent
        //declarando as rotas que o módulo de curso tem
    ], imports: [
        //declarando forChild pois este módulo não é o meu módulo pai
        FormsModule,
        //importando CommonModule traz os pipe e outros nativos do angular
        CommonModule,
        RouterModule.forChild([
            
            //rota de listagem dos cursos
            {        
                path: 'courses', component: CourseListComponent
            },
            {
            //estou passando alem da url o id
                path: '/courses/info/:id', component: CourseInfoComponent
            }

        ])
    ]
})
export class CourseModule{

}