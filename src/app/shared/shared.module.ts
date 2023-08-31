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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core'
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,

        // Material
        MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatSelectModule, MatCheckboxModule, MatGridListModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatTableModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        // Material
        MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatSelectModule, MatCheckboxModule, MatGridListModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatTableModule

    ],
    providers: [

    ]
})
export class SharedModule { }
