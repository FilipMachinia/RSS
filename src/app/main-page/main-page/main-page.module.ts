import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RssPanelComponent} from '../rss-panel/rss-panel.component';
import {GetRssService} from '../getRss/get-rss.service';

@NgModule({
  imports: [
    CommonModule,
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
