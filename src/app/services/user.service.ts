import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import {map} from 'rxjs/operators';
import { GLOBAL } from './global';

@Injectable()
export class UserService{
    public url: string;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    signup(user_to_login, gethash = null) {
        if (gethash != null){

        }
        let json = JSON.stringify(user_to_login);
        console.log(json);
        let params = json;

        let headers = new Headers({'Content-Type': 'application/json'});
        //login dummy
        return this._http.post(this.url + 'getAllTipoEvento ', params, {headers: headers})
                         .pipe(map(res => res.json()));
    }

    getIdentity(){
        let strIdentity = localStorage.getItem('identity');
        let resp  = false;
        
        if (strIdentity == "true" ) {
            resp = true;
        }
        console.log(resp);
        return resp;
    }

    getToken(){
        return 'testToken';
    }
}