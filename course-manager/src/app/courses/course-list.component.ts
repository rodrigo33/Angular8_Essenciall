import {Component, OnInit} from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
courses: Course[] = [];

ngOnInit(): void{
    this.courses = [
        {
            id: 1,
            name: 'Angular: Forms',
            imageUrl: '',
            price: 99.99,
            code: 'xps-8796',
            duration: 120,
            rating: 4.5,
            releaseDate: 'November, 2, 2019'
        },
        {
            id: 2,
            name: 'Angular: Http',
            imageUrl: '',
            price: 95.99,
            code: 'lkl-8796',
            duration: 80,
            rating: 4,
            releaseDate: 'November, 4, 2019'
        }
    ]
}
}