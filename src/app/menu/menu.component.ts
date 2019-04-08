import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }
      
  ngOnInit() {
  
   $(document).ready(function(){
     $('.sidenav').sidenav();
      
    });
   
    
     
    
  }

}
