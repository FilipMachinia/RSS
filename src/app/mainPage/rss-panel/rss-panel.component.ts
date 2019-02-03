import {Component, OnInit} from '@angular/core';
import {GetRssService} from '../../getRss/get-rss.service';
import {Feed} from '../../models/feed';

@Component({
  selector: 'app-rss-panel',
  templateUrl: './rss-panel.component.html',
  styleUrls: ['./rss-panel.component.css']
})
export class RssPanelComponent implements OnInit {
  displayedRss: Feed[] =[];
  onready = false;

  constructor(private getRssService: GetRssService) {
  }

  //https://www.nasa.gov/rss/dyn/breaking_news.rss
  //http://www.architecturaldigest.com/rss
  ngOnInit() {
    this.getRssService.rssObs.subscribe(rss =>this.displayedRss = rss);

    this.getRssService.getFeedContent('http://feeds.bbci.co.uk/news/world/rss.xml').subscribe((res: Feed) => {
      this.getRssService.addFeed(res);
      // console.log(this.getRssService.getFeeds());
      this.onready = true;
    });


  }
}
