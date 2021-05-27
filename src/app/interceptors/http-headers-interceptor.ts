import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            // setHeaders: {
            //     'x-rapidapi-key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
            //     'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            // },
            setParams: {
                key: 'a1d7903b774e4c4c988f7382a506d464',
            }
        });
        return next.handle(req);
    }
}