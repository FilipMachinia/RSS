import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {SidenavComponent} from '../sidenav/sidenav.component';
import {FeedListComponent} from '../feed-list/feed-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    // SidenavComponent,
    FeedListComponent
  ],
  exports: [
    // SidenavComponent,
    FeedListComponent
  ]
})
export class PanelsModule { }
