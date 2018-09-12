import { Component, OnInit } from '@angular/core';


@Component({
    selector:    'BlankPage' ,
    templateUrl: '../../views/main/blank.html',
    providers:  []
})

export class BlankComponent implements OnInit{
    public titulo: string;
    public identity = true;
    public token;

    constructor() {
        this.titulo = 'BlankPage';
    }

    ngOnInit(){
        console.log('Blank cargando');
    }

}