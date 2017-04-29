import {NgModule} from "@angular/core";
import {SmdBottomNavComponent, SmdBottomNavGroupComponent, SmdBottomNavLabelDirective} from "./smd-bottom-nav.component";
import {CommonModule} from "@angular/common";
import {MdRippleModule} from "@angular/material";

export * from './smd-bottom-nav.component';

const COMPONENTS = [
  SmdBottomNavComponent,
  SmdBottomNavGroupComponent,
  SmdBottomNavLabelDirective
];

@NgModule({
  imports: [CommonModule, MdRippleModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SmdBottomNavModule {
}
