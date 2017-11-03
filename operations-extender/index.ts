import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { OPERATIONS_PROVIDER } from "./operations-provider";
import { PrintPreviewComponent } from "./print-preview.component";

@NgModule({
    declarations: [
        PrintPreviewComponent
    ],
    entryComponents: [
        PrintPreviewComponent
    ],
    providers: [
        OPERATIONS_PROVIDER
    ],
    imports: [
        RouterModule.forChild([{ path: "print-preview", component: PrintPreviewComponent }]),
        CommonModule
    ]
})
export class OperationsExtenderModule {
    /* empty */
}
