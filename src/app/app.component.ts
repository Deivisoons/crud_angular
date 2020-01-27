import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Vetor
  usuarios = [];

  // Índice do usuário selecionado
  indiceSelecionado = 0;
  //Botões
  btnCadastrar = true;
  btnAlterar = false;
  btnExcluir = false;
  btnCancelar = false;

  //Formulário
  formulario = new FormGroup({
    nome : new FormControl(''),
    email : new FormControl(''),
    idade : new FormControl('')
  });

  //Método de cadastro
  cadastrar(){
    this.usuarios.push(this.formulario.value);
    this.formulario.reset();
  }

  //Método de selecionar
  selecionar(indice){
    this.formulario.setValue(this.usuarios[indice]);
    this.btnCadastrar = false;
    this.btnAlterar = true;
    this.btnExcluir = true;
    this.btnCancelar = true;
  }

  //Método de alterar
  alterar(){
    this.usuarios[this.indiceSelecionado] = this.formulario.value;
    this.cancelar();
  }

  //Método de excluir
  excluir(indice){
    this.usuarios.splice(this.indiceSelecionado, 1);
    this.cancelar();
  }

  //Método de cancelar
  cancelar(){
    this.formulario.reset();
    this.btnCadastrar = true;
    this.btnAlterar = false;
    this.btnExcluir = false;
    this.btnCancelar = false;
  }

}
