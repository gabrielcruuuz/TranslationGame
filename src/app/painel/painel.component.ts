import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from "../shared/frase.model";
import { FRASES } from "./frases-mock";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES;
  public instrucao: string = 'Traduza a frase';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.AtualizaRodada();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  AtualizaResposta(respostaEvent: Event): void {
    this.resposta = (<HTMLInputElement>respostaEvent.target).value;
  }

  VerificaResposta(): void{
    if(this.resposta.toUpperCase() === this.rodadaFrase.fraseBR.toUpperCase())
    {
      this.ProxRodada();
    }
    else{
      this.tentativas --;
      this.AtualizaRodada();
    }
  }

  ProxRodada(): void{
    this.rodada ++;
    this.progresso = this.progresso + (100 / this.frases.length);

    if(this.rodada === 4)
    {
      this.encerrarJogo.emit('vitoria');
    }
    else{
      this.AtualizaRodada();
    }
  }

  AtualizaRodada(): void{

    if(this.tentativas === -1)
    {
      this.encerrarJogo.emit('derrota');
    }

    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
