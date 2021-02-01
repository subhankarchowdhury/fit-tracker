import { NgModule } from "@angular/core";

import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatListModule} from '@angular/material/list'
import {MatTabsModule} from '@angular/material/tabs'
import {MatCardModule} from '@angular/material/card'
import {MatSelectModule} from '@angular/material/select'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatDialogModule} from '@angular/material/dialog'


@NgModule({
    imports: [
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule],

    exports: [
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule]
})
export class MaterialModule {}