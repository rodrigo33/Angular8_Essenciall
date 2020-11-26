
import { core } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//usando este decorator, estou dizendo para o angular que estou tornando minha
//classe elegivel para receber injeção de dependência
@Injectable({
//estou dizendo aqui que meu providedIn será carregado na inicialização, quando o
//módulo raiz, app module ou root for carregado, este meu serviço também será
    providedIn: 'root'
})
export class CourseService{

    private courseUrl: string = 'http://localhost:3100/api/courses'
    //venho aqui no meu construtor local onde faço a injeção de dependência, 
    //com isso vou usar os métodos http para fazer a requisição
    constructor(private httpClient: HttpClient) { }
    //um observable envelopando uma lista de cursos
    retrieveAll(): Observable<Course[]>{
        //retorno aqui será uma array de cursos
        //o padrão de retorno de um httpclient é um observable-> ele é um envelope
        //o observable  envelopa a resposta.
        //A requisição de um observable ela só ela é realizada quando dou um 
        //.subscribe no observable
        return this.httpClient.get<Course[]>(this.courseUrl);
    }
    //o padrão de retorno de um httpclient é um observable-> ele é um envelope
    //o observable  envelopa a resposta.
    retrieveById(id:number): Observable<Course>{
        return this.httpClient.get<Course>(`${this.courseUrl}/${id}`)
    }

    save(course: Course): Observable<Course>{
        if(course.id){
            //publisher fazendo requisição, escrevendo contrato
            return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`, course)
            //caso não haja id, insiro um novo curso e id
        }else{
            return this.httpClient.post<Course>(`${this.courseUrl}`, course)

        }
        
    }
}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];