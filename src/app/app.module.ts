import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { UpdateTipoEventoComponent } from './components/TipoEvento/updateTipoEvento.component';
import { MainComponent} from './components/default/main.component';
import { BlankComponent} from './components/default/blank.component';
//TipoEvento
import { GetAllTipoEventoComponent } from './components/TipoEvento/getAllTipoEvento.component';
@NgModule({
  declarations: [
    AppComponent,
    //TipoEvento
    GetAllTipoEventoComponent,
    UpdateTipoEventoComponent,
    MainComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
