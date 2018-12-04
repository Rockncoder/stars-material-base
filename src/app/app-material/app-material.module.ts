import {NgModule} from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
  ],
})
export class AppMaterialModule {
}

