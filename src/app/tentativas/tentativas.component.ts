import { Component, OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnChanges {
  
  public coracaoCheio: string = '/assets/imagens/coracao_cheio.png';
  public coracaoVazio: string = '/assets/imagens/coracao_vazio.png';

  @Input() public tentativas: number; 

  public listaCoracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { }

  ngOnChanges() {
    this.RemoverTentativas();
  }

  RemoverTentativas(): void {
    if(this.tentativas !== this.listaCoracoes.length)
    {
      let indice = this.listaCoracoes.length - this.tentativas;
      this.listaCoracoes[indice - 1].cheio = false;
    }

  }

}
