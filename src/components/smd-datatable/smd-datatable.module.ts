/**
 * Created by jasonculberson on 4/11/17.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MdInputModule, MdDialogModule, MdTooltipModule, MdButtonModule} from '@angular/material';
import {SmdPaginatorModule} from '../smd-paginator/smd-paginator.module';

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

const IMPORTS = [
  CommonModule,
  FormsModule,
  MdInputModule,
  MdDialogModule,
  MdTooltipModule,
  MdButtonModule,
  SmdPaginatorModule
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: IMPORTS
})
export class SmdDataTableModule {
}
