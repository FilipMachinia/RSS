import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {Feed} from '../../models/feed';
import {catchError, map} from 'rxjs/operators';
import {MyFeed} from '../../models/myFeed';

@Injectable({
  providedIn: 'root'
})
export class GetRssService {
  private myFeeds: MyFeed[] = [{name: 'BBC', link: 'http://feeds.bbci.co.uk/news/world/rss.xml'},
    {name: 'Architechture', link: 'http://www.architecturaldigest.com/rss'}];
  private rss: Feed[] =[];
  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

  constructor(private http: Http) {}

  getFeedContent(url: string): Observable<Feed> {
    return this.http.get(this.rssToJsonServiceBaseUrl + url)
      .pipe(map((res) => res.json()),
        catchError((error: any) => Observable.throw(error.json().error || 'Server error')));
  }

  getMyFeeds() {
    return this.myFeeds;
  }

  getFeeds() {
    return this.rss;
  }
  //TODO: Fix delete feed
  hideFeed(entry: any) {
    // console.log(entry)
    // console.table(this.rss);
    // this.rss = this.rss.filter(el => el.feed.url != entry);
    // console.table(this.rss);

  }
}
