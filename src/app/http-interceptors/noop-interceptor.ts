import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Body {
  data: object;
}
interface Response extends Body {
  status: number;
  body: Body;
}
/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      url: 'http://localhost' + req.url,
    });
    return next.handle(cloneReq).pipe(
      tap((res: HttpResponse<Response>) => {
        if (res.status === 200) {
          return res.body.data;
        }
      })
    );
  }
}
