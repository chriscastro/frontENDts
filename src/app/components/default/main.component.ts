import { Component, OnInit } from '@angular/core';


@Component({
    selector:    'MainPage' ,
    templateUrl: '../../views/main/main.html',
    providers:  []
})

export class MainComponent implements OnInit{
    public titulo: string;
    public identity: boolean;
    public token;

    constructor() {
        this.titulo = 'MainPage';
        this.identity = this.getIdentity();
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

    ngOnInit(){
        console.log('MainPage cargando');
    }

}