import {NgModule} from "@angular/core";
import {SmdBottomNavComponent, SmdBottomNavGroupComponent, SmdBottomNavLabelDirective} from "./smd-bottom-nav.component";

export * from './smd-bottom-nav.component';

const COMPONENTS = [
    SmdBottomNavComponent,
    SmdBottomNavGroupComponent
];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SmdBottomNavModule {}