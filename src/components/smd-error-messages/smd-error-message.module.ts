import {NgModule} from "@angular/core";
import {SmdErrorMessagesComponent, SmdErrorMessageComponent} from "./smd-error-message.component";

export * from './smd-error-message.component';

const COMPONENTS = [
    SmdErrorMessagesComponent
];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SmdErrorMessageModule {}