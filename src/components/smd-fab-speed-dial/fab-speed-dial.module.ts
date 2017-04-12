import {NgModule} from "@angular/core";
import {SmdFabSpeedDialTrigger, SmdFabSpeedDialActions, SmdFabSpeedDialComponent} from "./fab-speed-dial";

export * from './fab-speed-dial';

const COMPONENTS = [
    SmdFabSpeedDialTrigger,
    SmdFabSpeedDialActions,
    SmdFabSpeedDialComponent
];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SmdFabSpeedDialModule {}