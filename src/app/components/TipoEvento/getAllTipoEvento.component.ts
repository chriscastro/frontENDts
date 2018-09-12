import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TipoEventoService } from '../../services/tipoEvento.service';
import { TipoEvento } from '../../models/tipoEvento';
import { GLOBAL } from '../../services/global';

@Component({
    selector:    'get-all-tipoevento' ,
    templateUrl: '../../views/TipoEvento/getAllTipoEvento.html',
    providers:  [TipoEventoService]
})

export class GetAllTipoEventoComponent implements OnInit{
    public titulo: string;
    public TipoEvento: TipoEvento;
    public identity: boolean;
    public token;
    public url: string;

    constructor(private _tipoEventoService: TipoEventoService,
                private _route: ActivatedRoute,
                private _router: Router) {
        this.titulo = 'Tipo de Evento';
        this.identity = this._tipoEventoService.getIdentity();
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log('TipoEvento-List cargando');
    }

}