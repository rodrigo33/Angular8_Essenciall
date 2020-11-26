import {Component, OnInit} from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({    
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
//coloco _ na minha variável aqui para que outros desenvolvedores percebam que 
//quero essas variáveis apenas aqui
filteredCourses: Course[] = [];
_courses: Course[] = [];
_filterBy: string;

constructor(private courseService: CourseService){}

ngOnInit(): void{
    this.retrieveAll();
    }
retrieveAll():void{
    //subscrevendo o contrato chamando a requisição
    this.courseService.retrieveAll().subscribe({
        next: courses => {
            //o segundo course é o retorno do courseService
            this._courses = courses
            this.filteredCourses = this._courses;
        },
        error: err => console.log('Error', err)
    })        
    
}

//efetivando a requisição .subscribe
deleteById(courseId: number): void{
    this.courseService.deleteById(courseId).subscribe({
        next: () => {
            console.log('Deleted with sucess');
            this.retrieveAll();
        },
        error: err => console.log('Error', err)
    })
}

    //criando evento de input para o meu html
    set filter(value: string){
        this._filterBy = value

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    }

    //evento para atualizar o input, leitura
    get filter(){
        return this._filterBy;
    }
}