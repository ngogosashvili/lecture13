import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffect } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('books', bookReducer),
    EffectsModule.forFeature([BookEffect])
  ]
})
export class RootStoreModule { }
