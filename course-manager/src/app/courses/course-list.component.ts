import {Component, OnInit} from '@angular/core';
import { Course } from './course';
import { CourseService } from './courses.service';

@Component({
    selector: 'app-course-list',
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
    this._courses = this.courseService.retrieveAll();        
    this.filteredCourses = this._courses;
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