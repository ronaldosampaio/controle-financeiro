import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovaTransacaoComponent } from './nova-transacao/nova-transacao.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';

const controleFinanceiroRoutes: Routes = [
  {path:'',      component:DashboardComponent},
  {path:'dashboard',      component:DashboardComponent},
  {path:'resumo',         component:NovaTransacaoComponent},
  {path:'configuracao',   component:ConfiguracaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(controleFinanceiroRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    


}
