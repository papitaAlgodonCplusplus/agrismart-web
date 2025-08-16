import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppComponent,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatBadgeModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [],
})
export class AppModule { }