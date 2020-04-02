import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-barra-derecha',
  templateUrl: './barra-derecha.component.html',
  styleUrls: ['./barra-derecha.component.scss']
})
export class BarraDerechaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#contenten').click(function () {
          $('#SecCont').toggleClass('BackBr');
      });
  });
  }

}
