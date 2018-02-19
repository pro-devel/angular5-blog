import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule,MatIconModule } from '@angular/material'

@NgModule({
	imports: [MatButtonModule,MatToolbarModule,MatIconModule],
	exports: [MatButtonModule,MatToolbarModule,MatIconModule]
})
export class MaterialModule { }
