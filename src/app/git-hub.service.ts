import {throwError as observableThrowError, Observable} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';

// https://developer.github.com/v3/search/
const GitHub_Header = 'application/vnd.github.mercy-preview+json';

@Injectable()
export class GsRequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Accept': GitHub_Header
      }
    });
    return next.handle(request);
  }
}

@Injectable()
export class GitHubService {
  readonly API_URL = 'https://api.github.com';

  constructor(private http: HttpClient) {
  }

  get(theUrl?: string, language?: any, topic: string = ''): Observable<any> {
    const lng = (language && language.language) ? `+language:${language.language}` : '';
    const tp = (topic) ? `+topic:${topic}` : '';
    const url = theUrl ? theUrl : `https://api.github.com/search/repositories?q=stars:>1${lng}${tp}&sort=stars&order=desc`;

    if (language && theUrl) {
      console.log(`language = ${language.language}`);
    }

    return this.http.get<HttpResponse<Object>>(url, {observe: 'response'})
      .pipe(map(
        res => {
          const linkHeader = res.headers.get('link');
          const links = linkHeader ? linkHeader.split(',') : [];
          const body = res.body;
          return {body, links};
        }),
        catchError(err => {
          const errMsg: string = err.message ? err.message : err.toString();
          console.error(errMsg);
          return observableThrowError(errMsg);
        })
      );
  }
}
