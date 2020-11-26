//deixando claro no nome do arquivo qual a função dele

import { Pipe, PipeTransform } from '@angular/core';
//decorator para deixar a classe elegivel para se tornar um Pipe, para ser tuilizada
//como um Pipe
@Pipe({
    name: 'replace'
})
//utilizando aqui a interface PipeTransform para utilizar o método de transformação
export class ReplacePipe implements PipeTransform{
    transform(value: string, char: string, valueToReplace: string){
       return value.replace(char, valueToReplace);
    }
}