/**
 * Created by jasonculberson on 4/11/17.
 */
import {NgModule} from "@angular/core";
import {
    SmdDatatableDialogChangeValue,
    SmdDataTableCellComponent,
    SmdDataTableRowComponent,
    SmdDataTableColumnComponent,
    SmdDatatableActionButton,
    SmdContextualDatatableButton,
    SmdDatatableHeader,
    SmdDataTable
} from "./smd-datatable.component";

export * from './smd-datatable.component';

const COMPONENTS = [
    SmdDatatableDialogChangeValue,
    SmdDataTableCellComponent,
    SmdDataTableRowComponent,
    SmdDataTableColumnComponent,
    SmdDatatableActionButton,
    SmdContextualDatatableButton,
    SmdDatatableHeader,
    SmdDataTable
];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SmdDataTableModule {
}