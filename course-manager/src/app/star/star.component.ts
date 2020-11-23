import { Component, Input, OnChanges } from '@angular/core';

// Decorator
@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

    //Notação para que a minha variável esteja ilegivel para receber uma informação
    //de um componente externo
    @Input()
    rating: number = 0;

    starwidth: number;

    ngOnChanges(): void{
        this.starwidth = this.rating * 74 / 5;
    }

}