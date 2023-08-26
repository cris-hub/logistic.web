import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,

        // Material
        MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatSelectModule, MatFormFieldModule, MatCheckboxModule, MatGridListModule, MatListModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        
        // Material
        MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatSelectModule, MatFormFieldModule, MatCheckboxModule, MatGridListModule, MatListModule

    ],
    providers: [

    ]
})
export class SharedModule { }
