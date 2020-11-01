import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input"
import { MatTreeModule } from '@angular/material/tree';
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from '@angular/material/dialog';


import { CdkStepperModule } from '@angular/cdk/stepper';

import { DragDropModule } from "@angular/cdk/drag-drop";
import { HeaderComponent } from './components/header/header.component';



@NgModule({
    imports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatTreeModule,
        CdkStepperModule,
        MatSelectModule,
        MatTabsModule,
        MatExpansionModule,
        DragDropModule,
        MatCheckboxModule,
        MatDialogModule
    ],
    exports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatTreeModule,
        CdkStepperModule,
        MatSelectModule,
        MatTabsModule,
        MatExpansionModule,
        DragDropModule,
        MatCheckboxModule,
        MatDialogModule,
        HeaderComponent
    ],
    declarations: [HeaderComponent],
})
export class CustomMaterialModule { }