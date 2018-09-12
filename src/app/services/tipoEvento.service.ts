import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import {map} from 'rxjs/operators';
import { GLOBAL } from './global';

@Injectable()
export class TipoEventoService{
    public url: string;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
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

    getAllTipoEvento(tipoEvento) {
        let params = JSON.stringify(tipoEvento) ;
        let headers = new Headers({'Content-Type': 'application/json'});
        //login dummy
        return this._http.post(this.url + 'getAllTipoEvento ', params, {headers: headers})
                                .pipe(map(res => res.json()));
    }

    updateTipoEvento(tipoEvento_to_update) {
        let params = JSON.stringify(tipoEvento_to_update) ;
        let headers = new Headers({'Content-Type': 'application/json'});
        //login dummy
        return this._http.post(this.url + 'updateTipoEvento ', params, {headers: headers})
                            .pipe(map(res => res.json()));
    }

}