import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AppService {

    constructor(private http: Http) {}

    private accessKey = '275418-TellMe-RYYV1TBH';

    getData(): Observable<any> {
        return this.http.get('https://tastedive.com/api/similar?q=harry potter&k=275418-TellMe-RYYV1TBH&limit=20&info=1&type=books')
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
}