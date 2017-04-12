import {NgModule} from "@angular/core";
import {SmdPaginatorComponent} from "./smd-paginator.component";

export * from './smd-paginator.component';

const COMPONENTS = [
    SmdPaginatorComponent
];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SmdPaginatorModule {}