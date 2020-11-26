//deixando claro no nome do arquivo qual a função dele

import { Component } from '@angular/core';

//como aqui é um component, crio um decorator de component, para tornar a classe
//elegivel como um component
@Component({
    //não vou usar selector e sim rota
    templateUrl: './error-404.component.html'
})
export class Error404Component{
    
}