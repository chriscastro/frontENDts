import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
//Import MAIN
import { BlankComponent} from './components/default/blank.component';
import { MainComponent} from './components/default/main.component';

//Import TipoEvento
import { GetAllTipoEventoComponent} from './components/TipoEvento/getAllTipoEvento.component';
import { UpdateTipoEventoComponent} from './components/TipoEvento/updateTipoEvento.component';
 
const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'Tipo-Evento/:page', component: GetAllTipoEventoComponent},
    {path: 'Tipo-Evento-Update', component: UpdateTipoEventoComponent},
    {path: '**', component: BlankComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);