//deixando claro no nome do arquivo qual a função dele
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


//usando decorator, informando para o angular que essa classe é um componente
@Component({
    //não vou usar selector e sim rota
    templateUrl: './course-info.component.html'
})
//OnInit para carregar na inicialização
export class CourseInfoComponent implements OnInit{

    courseId: number;

    //aqui faço a injeção de dependência no componente
    //pegando a rota ativa neste momento e suas informações
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void{
        //tirando uma foto de minha rota neste momento
        this.courseId = +this.activatedRoute.snapshot.paramMap.get('id')
    }
}