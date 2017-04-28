import {NgModule} from "@angular/core";
import {SmdPaginatorComponent} from "./smd-paginator.component";
import {FormsModule} from '@angular/forms';
import {MdOptionModule, MdSelectModule} from '@angular/material';
import {CommonModule} from "@angular/common";

export * from './smd-paginator.component';

const COMPONENTS = [
    SmdPaginatorComponent
];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS,
    imports: [FormsModule,MdOptionModule,CommonModule,MdSelectModule]
})
export class SmdPaginatorModule {}
