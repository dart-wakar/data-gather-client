import { Component,OnInit } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Data gather';

  constructor(private appService: AppService) {}

  ngOnInit() {

  }

  gatherData() {
    this.appService.getData()
        .subscribe(results => {
          console.log(results);
          this.setMovieData(results);
        })
  }

  setMovieData(res: any) {
    var data:any = {};
    data.movie_id = 250;
    data.movie_name = res.Similar.Info[0].Name;
    data.movie_wikipedia_description = res.Similar.Info[0].wTeaser;
    data.movie_wikipedia_url = res.Similar.Info[0].wUrl;
    data.movie_youtube_url = res.Similar.Info[0].yUrl;
    data.movie_youtube_id = res.Similar.Info[0].yID;
    data.books = res.Similar.Results;
    this.appService.setBooksData(data)
        .subscribe(movie => {
          console.log(movie.books);
        });
  }

}
