import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatDividerModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatGridTile,
  MatCheckboxModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
  ]
})
export class MaterialModule {}
