import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AppService {

    constructor(private http: Http) {}

    private accessKey = '275418-TellMe-RYYV1TBH';

    getBooksData(movieTitle: string): Observable<any> {
        return this.http.get('https://tastedive.com/api/similar?q='+movieTitle+'&k=275418-TellMe-RYYV1TBH&limit=20&info=1&type=books')
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json().error || 'Server Error');
                        });
    }

    setBooksData(booksData: any): Observable<any> {
        return this.http.post('http://127.0.0.1:3003/api/moviessimilar/books',booksData)
                .map((res) => res.json())
                .catch((err) => {
                    console.log(err);
                    return Observable.throw(err.json().error || 'Server Error');
                });
    }

    getShowsData(movieTitle: string): Observable<any> {
        return this.http.get('https://tastedive.com/api/similar?q='+movieTitle+'&k=275418-TellMe-RYYV1TBH&limit=20&info=1&type=shows')
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json().error || 'Server Error');
                        });
    }

    getMusicData(movieTitle: string): Observable<any> {
        return this.http.get('https://tastedive.com/api/similar?q='+movieTitle+'&k=275418-TellMe-RYYV1TBH&limit=20&info=1&type=music')
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json().error || 'Server Error');
                        });
    }

    getAuthorsData(movieTitle: string): Observable<any> {
        return this.http.get('https://tastedive.com/api/similar?q='+movieTitle+'&k=275418-TellMe-RYYV1TBH&limit=20&info=1&type=authors')
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json().error || 'Server Error');
                        });
    }

    getGamesData(movieTitle: string): Observable<any> {
        return this.http.get('https://tastedive.com/api/similar?q='+movieTitle+'&k=275418-TellMe-RYYV1TBH&limit=20&info=1&type=games')
                        .map((res) => res.json())
                        .catch((err) => {
                            console.log(err);
                            return Observable.throw(err.json().error || 'Server Error');
                        });
    }

    setShowsData(showsData: any): Observable<any> {
        return this.http.post('http://127.0.0.1:3003/api/moviessimilar/shows',showsData)
                .map((res) => res.json())
                .catch((err) => {
                    console.log(err);
                    return Observable.throw(err.json().error || 'Server Error');
                });
    }

    setMusicData(musicData: any): Observable<any> {
        return this.http.post('http://127.0.0.1:3003/api/moviessimilar/music',musicData)
                .map((res) => res.json())
                .catch((err) => {
                    console.log(err);
                    return Observable.throw(err.json().error || 'Server Error');
                });
    }

    setAuthorsData(authorsData: any): Observable<any> {
        return this.http.post('http://127.0.0.1:3003/api/moviessimilar/authors',authorsData)
                .map((res) => res.json())
                .catch((err) => {
                    console.log(err);
                    return Observable.throw(err.json().error || 'Server Error');
                });
    }

    setGamesData(gamesData: any): Observable<any> {
        return this.http.post('http://127.0.0.1:3003/api/moviessimilar/games',gamesData)
                .map((res) => res.json())
                .catch((err) => {
                    console.log(err);
                    return Observable.throw(err.json().error || 'Server Error');
                });
    }
}