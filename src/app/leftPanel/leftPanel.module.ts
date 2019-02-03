import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedListComponent} from './feed-list/feed-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FeedListComponent
  ],
  exports: [
    FeedListComponent
  ]
})
export class LeftPanelModule { }
