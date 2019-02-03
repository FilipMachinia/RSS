import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Feed} from '../models/feed';
import {catchError, map} from 'rxjs/operators';
import {MyFeed} from '../models/myFeed';

@Injectable({
  providedIn: 'root'
})
export class GetRssService {
  private myFeeds: MyFeed[] = [{name: 'BBC', link: 'http://feeds.bbci.co.uk/news/world/rss.xml'},
    {name: 'Architechture', link: 'http://www.architecturaldigest.com/rss'}];
  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

  private rss = new BehaviorSubject<Feed[]>([]);
  rssObs = this.rss.asObservable();

  constructor(private http: Http) {}

  getFeedContent(url: string): Observable<Feed> {
    return this.http.get(this.rssToJsonServiceBaseUrl + url)
      .pipe(map((res) => res.json()),
        catchError((error: any) => Observable.throw(error.json().error || 'Server error')));
  }

  getMyFeeds() {
    return this.myFeeds;
  }

  hideFeed(entry: any) {
    this.rss.next( this.rss.getValue().filter(el => el.feed.url != entry));
  }

  addFeed(feed){
    this.rss.next(this.rss.getValue().concat(feed));
  }
}
