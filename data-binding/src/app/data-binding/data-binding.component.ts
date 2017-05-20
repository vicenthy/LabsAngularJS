import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://meusite.com.br"
  cursoAngular:boolean = true
  urlmagem:string = 'http://lorempixel.com/400/200/'
  valorAtual:string = '';
  isMouseOver:boolean = false;
  valorSalvo:string = '';
getValor(){
  return 1;
}


salvarValor(valor){
this.valorSalvo = valor;
}

botaoClicado(){
  alert("Clicado!");
}



onMouseOver(){

}

onMouseOut(){
  this.isMouseOver = !this.isMouseOver;
}


onKeyUp(evento: KeyboardEvent){
 this.valorAtual = (<HTMLInputElement>evento.target).value;

}

getCurtirCurso(){
  return true;
}
  constructor() { }

  ngOnInit() {

  }



}
