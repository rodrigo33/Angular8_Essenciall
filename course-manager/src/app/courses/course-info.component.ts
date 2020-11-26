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

    //assinando o contrato feito no courseservice .subscribe 
    ngOnInit(): void{
        //tirando uma foto de minha rota neste momento
        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => {
                this.course = course;
                error: err => console.log('Error', err)
            }
        })
    }

    //criando aqui método criado no service e fazendo assinatura do contrato
    //com .subscribe efetivando a requisição
    save():void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with sucess', course),
            error: err => console.log('Error', err)
        })
    }
}