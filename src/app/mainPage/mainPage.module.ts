import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RssPanelComponent} from './rss-panel/rss-panel.component';
import {GetRssService} from '../getRss/get-rss.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RssPanelComponent],
  exports:[
    RssPanelComponent
  ],
  providers:[
    GetRssService
  ]
})
export class MainPageModule { }
