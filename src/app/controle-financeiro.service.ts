import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControleFinanceiroService {
  
  transacaoList: any[]=[];

  retornoObj: any[]=[];

  //total: number;


   constructor() {
  
    }

    lerTransacao(){
       let lerTransacaoJson = window.localStorage.getItem("novaTransacao");
       if(lerTransacaoJson == null){
           lerTransacaoJson=null;
           console.log("Local Storage vazio!");
       }else{
        this.retornoObj = JSON.parse(lerTransacaoJson);

       console.log("Ler",this.retornoObj)

        return this.retornoObj;
       }
       
    }

    salvarTransacao(form){

       this.transacaoList.push(form);

       let formJson = JSON.stringify(this.transacaoList); //transforma objeto em string
       
       //location.reload();

       let resultado = window.localStorage.setItem("novaTransacao", formJson);
       
    }
    inserirTotal(){
      let total = this.retornoObj.reduce(function(soma, atual){
         return ((soma) + (+atual.valor));
      }, null);
      return total;
    }

}
