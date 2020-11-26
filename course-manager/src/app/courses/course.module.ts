//deixando claro no nome do arquivo qual a função dele

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

//usando decorator, avisando ao angular que essa classe é elegivel para ser
//um module angular
@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,               
        //declarando as rotas que o módulo de curso tem
    ], imports: [        
        //declarando forChild pois este módulo não é o meu módulo pai
        FormsModule,
        AppPipeModule,        
        //importando CommonModule traz os pipe e outros nativos do angular
        CommonModule,
        StarModule,
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