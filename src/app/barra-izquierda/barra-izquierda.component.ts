import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-barra-izquierda',
  templateUrl: './barra-izquierda.component.html',
  styleUrls: ['./barra-izquierda.component.scss']
})
export class BarraIzquierdaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').click(function () {
          $('#sidebar').toggleClass('active');
          $('#Flecha').toggleClass('Rotar');
      });
      $('#Flechita').click(function () {
        $('#Rotarflecha').toggleClass('Rotate2');
    });
  });
  }

}
