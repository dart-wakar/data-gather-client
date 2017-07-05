import { Component,OnInit } from '@angular/core';
import {AppService} from './app.service';
import {movieTitles} from './movieTitles';

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
    this.appService.getBooksData()
        .subscribe(results => {
          console.log(results);
          this.setBooksData(results);
        })
  }

  setBooksData(res: any) {
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
          this.getShowsData();
        });
  }

  getShowsData() {
    this.appService.getShowsData()
      .subscribe(results => {
        console.log(results);
        this.setShowsData(results);
      });
  }

  setShowsData(res: any) {
    var data:any = {};
    data.movie_id = 250;
    data.movie_name = res.Similar.Info[0].Name;
    data.movie_wikipedia_description = res.Similar.Info[0].wTeaser;
    data.movie_wikipedia_url = res.Similar.Info[0].wUrl;
    data.movie_youtube_url = res.Similar.Info[0].yUrl;
    data.movie_youtube_id = res.Similar.Info[0].yID;
    data.shows = res.Similar.Results;
    this.appService.setShowsData(data)
        .subscribe(movie => {
          console.log(movie.books);
          console.log(movie.shows);
          this.getMusicData();
        });
  }

  getMusicData() {
    this.appService.getMusicData()
      .subscribe(results => {
        console.log(results);
        this.setMusicData(results);
      });
  }

  setMusicData(res: any) {
    var data:any = {};
    data.movie_id = 250;
    data.movie_name = res.Similar.Info[0].Name;
    data.movie_wikipedia_description = res.Similar.Info[0].wTeaser;
    data.movie_wikipedia_url = res.Similar.Info[0].wUrl;
    data.movie_youtube_url = res.Similar.Info[0].yUrl;
    data.movie_youtube_id = res.Similar.Info[0].yID;
    data.music = res.Similar.Results;
    this.appService.setMusicData(data)
        .subscribe(movie => {
          console.log(movie.books);
          console.log(movie.shows);
          console.log(movie.music);
          this.getAuthorsData();
        });
  }

  getAuthorsData() {
    this.appService.getAuthorsData()
      .subscribe(results => {
        console.log(results);
        this.setAuthorsData(results);
      });
  }

  setAuthorsData(res: any) {
    var data:any = {};
    data.movie_id = 250;
    data.movie_name = res.Similar.Info[0].Name;
    data.movie_wikipedia_description = res.Similar.Info[0].wTeaser;
    data.movie_wikipedia_url = res.Similar.Info[0].wUrl;
    data.movie_youtube_url = res.Similar.Info[0].yUrl;
    data.movie_youtube_id = res.Similar.Info[0].yID;
    data.authors = res.Similar.Results;
    this.appService.setAuthorsData(data)
        .subscribe(movie => {
          console.log(movie.books);
          console.log(movie.shows);
          console.log(movie.music);
          console.log(movie.authors);
          this.getGamesData();
        });
  }

  getGamesData() {
    this.appService.getGamesData()
      .subscribe(results => {
        console.log(results);
        this.setGamesData(results);
      });
  }

  setGamesData(res: any) {
    var data:any = {};
    data.movie_id = 250;
    data.movie_name = res.Similar.Info[0].Name;
    data.movie_wikipedia_description = res.Similar.Info[0].wTeaser;
    data.movie_wikipedia_url = res.Similar.Info[0].wUrl;
    data.movie_youtube_url = res.Similar.Info[0].yUrl;
    data.movie_youtube_id = res.Similar.Info[0].yID;
    data.games = res.Similar.Results;
    this.appService.setGamesData(data)
        .subscribe(movie => {
          console.log(movie.books);
          console.log(movie.shows);
          console.log(movie.music);
          console.log(movie.authors);
          console.log(movie.games);
        });
  }

}
