//deixando claro no nome do arquivo qual a função dele

import { NgModule } from '@angular/core';
import { ReplacePipe } from './replace.pipe';

//usando decorator, avisando ao angular que essa classe é elegivel para ser
//um module angular
@NgModule({
    declarations: [
        ReplacePipe
    ], exports: [
        ReplacePipe
    ]
})
export class AppPipeModule{

}