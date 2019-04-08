import { Component, OnInit } from '@angular/core';
import { ControleFinanceiroService } from '../controle-financeiro.service';

declare var $: any;
declare var M: any;

@Component({
  selector: 'app-nova-transacao',
  templateUrl: './nova-transacao.component.html',
  styleUrls: ['./nova-transacao.component.scss']
})
export class NovaTransacaoComponent implements OnInit {
      transacaoList: any[]=[];

      retornoObj: any[]=[];
      total: number=null; 
      
      constructor(private controleFinanceiroService: ControleFinanceiroService) {}
      
      ngOnInit() {
        $(document).ready(function(){
          $('select').formSelect();
          M.updateTextFields();
        });
        
        this.getLocalStorageTransacao();
        this.inserirTotal();
      }

      setLocalStorageTransacao(f){

         let novaTransacao = f.value;
         if((((novaTransacao.nome === "")   ||  (novaTransacao.nome == null) || 
            ((novaTransacao.valor==="")     ||  (novaTransacao.valor==null))))){
            return alert("Preencher todos os dados são obrigatórios!");
         }else{
             this.controleFinanceiroService.salvarTransacao(novaTransacao);
         
             f.reset();

             this.getLocalStorageTransacao();
         
             this.inserirTotal();
         }
      }

      getLocalStorageTransacao(){

        this.retornoObj = this.controleFinanceiroService.lerTransacao();

        return this.retornoObj;
      }

      inserirTotal(){
        this.total=this.controleFinanceiroService.inserirTotal();
        console.log("Total preenchido: ", this.total);
        return this.total;
      }

}

