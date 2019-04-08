import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NovaTransacaoComponent } from './nova-transacao/nova-transacao.component';
import { ControleFinanceiroService } from './controle-financeiro.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NovaTransacaoComponent,
    DashboardComponent,
    ConfiguracaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ControleFinanceiroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
