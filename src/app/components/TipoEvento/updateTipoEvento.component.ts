import { Component, OnInit } from '@angular/core';
import { TipoEventoService } from '../../services/tipoEvento.service';
import { TipoEvento } from '../../models/tipoEvento';

@Component({
    selector:    'TipoEvento-Edit' ,
    templateUrl: '../../views/TipoEvento/TipoEvento-Edit.html',
    providers:  [TipoEventoService]
})

export class UpdateTipoEventoComponent implements OnInit{
    public titulo: string;
    public TipoEvento: TipoEvento;
    public identity = true;
    public token;

    constructor(private _tipoEventoService: TipoEventoService){
        this.titulo = 'Actualizar - Tipo de Evento';
    }

    ngOnInit(){
        console.log('TipoEvento-Edit cargando');
    }

}