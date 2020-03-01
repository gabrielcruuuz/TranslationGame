import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true;
  public tipoEncerramento: string;
  public mensagem: string;
  public corTexto: string;

  public EncerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;

    if(this.tipoEncerramento === 'derrota')
    {
      this.mensagem = 'Fim de jogo, você perdeu!! :(';
      this.corTexto = 'red';
    }
    else{
      this.mensagem = 'Fim de jogo, você ganhou bro!! :D';
      this.corTexto = 'green';
    }

  }

  public ReiniciarJogo(): void{
    this.jogoEmAndamento = true;
    this.tipoEncerramento = undefined;
    this.mensagem = undefined;
  }
  
}
