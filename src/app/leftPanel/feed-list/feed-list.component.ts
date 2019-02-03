import {Component, OnInit} from '@angular/core';
import {Feed} from '../../models/feed';
import {MyFeed} from '../../models/myFeed';
import {GetRssService} from '../../getRss/get-rss.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {
  myFeeds: MyFeed[] = [];
  filteredfeeds: MyFeed[] = [];
  name;
  link;

  constructor(private getRssService: GetRssService) {
  }

  ngOnInit() {
    this.myFeeds = this.getRssService.getMyFeeds();
    this.filteredfeeds = this.myFeeds;
  }

  addFeeds(first, second) {
    this.myFeeds.push({name: first, link: second});
    this.filteredfeeds = this.myFeeds;
  }

  deleteFeed(entry: any) {
    this.myFeeds = this.myFeeds.filter(el => el.name !== entry.name);
    this.filteredfeeds = this.myFeeds;
    this.getRssService.hideFeed(entry.link);
  }

  //https://stackoverflow.com/questions/40678206/angular-2-filter-search-list
  filterFeeds(input: string) {
    if (!input) {
      this.filteredfeeds = Object.assign([], this.myFeeds);
    }
    this.filteredfeeds = Object.assign([], this.myFeeds).filter(
      item => item.name.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
  }

  showFeed(entryLink: string, id) {
    let isBtnChecked = (<HTMLInputElement>document.getElementById(id)).checked;
    if (!isBtnChecked) {
      this.getRssService.hideFeed(entryLink);
    } else {
      this.getRssService.getFeedContent(entryLink).subscribe((res: Feed) => {
        this.getRssService.addFeed(res);

      });
    }
  }
}
