import { Component, OnInit } from '@angular/core';
import { MensagemPipe } from './MensagemPipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  campo: string;

  constructor() { }

  ngOnInit() {
  }

}
