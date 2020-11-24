//deixando claro no nome do arquivo qual a função dele
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';


//usando decorator, informando para o angular que essa classe é um componente
@Component({
    //não vou usar selector e sim rota
    templateUrl: './course-info.component.html'
})
//OnInit para carregar na inicialização
export class CourseInfoComponent implements OnInit{

    course: Course;

    //aqui faço a injeção de dependência no componente
    //pegando a rota ativa neste momento e suas informações
    //usando a injeção para inserir CourseService e consumir o método que acabei de criar la
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}

    ngOnInit(): void{
        //tirando uma foto de minha rota neste momento
        this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }


    save():void{
        this.courseService.save(this.course)
    }
}