import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class FitbitService {

    constructor(
        private _httpClient: HttpClient
    ) {}

    /**
     * 心拍数を取得します
     * document: https://dev.fitbit.com/build/reference/web-api/heart-rate/
     * @param days 取得する日数
     */
    requestGetHeartRagebyDays$(days: number): Observable<any> {
        const url = `https://api.fitbit.com/1/user/-/activities/heart/date/today/${days}d.json`;
        
        return this.requestGet$(url);
    }

    requestGet$(url: string): Observable<any> {
        const bearerToken: string = `Bearer ${environment.fitbit.accessToken}`;
        const headers = new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: bearerToken,
        });

        return this._httpClient.get(url, {
            headers: headers,
        });
    }

}
