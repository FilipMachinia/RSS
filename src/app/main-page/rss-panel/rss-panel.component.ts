import {Component, OnInit} from '@angular/core';
import {GetRssService} from '../getRss/get-rss.service';
import {Feed} from '../../models/feed';

@Component({
  selector: 'app-rss-panel',
  templateUrl: './rss-panel.component.html',
  styleUrls: ['./rss-panel.component.css']
})
export class RssPanelComponent implements OnInit {
  rss: Feed[] =[];
  onready = false;
  constructor(private getRssService: GetRssService) {
  }

   //  https://www.nasa.gov/rss/dyn/breaking_news.rss
  //http://www.architecturaldigest.com/rss
  ngOnInit() {
    this.rss = this.getRssService.getFeeds();
    this.getRssService.getFeedContent('http://feeds.bbci.co.uk/news/world/rss.xml').subscribe((res: Feed) => {
      this.getRssService.getFeeds().push(res);
      console.log(this.getRssService.getFeeds());
      this.onready = true;
    });


  }
}
