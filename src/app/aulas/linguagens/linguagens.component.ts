import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/Models/professor';
import { Materia } from 'src/app/Models/materia';
import { Tema } from 'src/app/Models/tema';
import { TemaService } from 'src/app/services/tema.service';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-linguagens',
  templateUrl: './linguagens.component.html',
  styleUrls: ['./linguagens.component.scss']
})
export class LinguagensComponent implements OnInit {
  // materiaSelecionada: string = 'Portugues';
  // professoresPortugues: Professor[] = [new Professor("João", 30, 16123456789, "joao@hotmail.com"), new Professor("Pedro", 35, 19098765432, "pedro@gmail.com"), new Professor("Ataide", 35, 19098765432, "ataide@outlook.com"), new Professor("Ribamar", 35, 19098765432, "ribamar@google.com"), new Professor("Odair", 95, 19098765432, "odair@yahoo.com")];
  // professoresIngles: Professor[] = [new Professor("Carlos", 28, 16123456789, "carlos@hotmail.com"), new Professor("José", 33, 16123456789, "jose@hotmail.com"), new Professor("Eduardo", 18, 19876541234, "eduardo@gmail.com")];
  // professoresEspanhol: Professor[] = [new Professor("Lucas", 40, 16123456789, "lucas@hotmail.com"), new Professor("Leandro", 38, 16123456789, "leandro@hotmail.com")];
  // materias: Materia[] = [
  //   new Materia("Portugues", this.professoresPortugues),
  //   new Materia("Ingles", this.professoresIngles),
  //   new Materia("Espanhol", this.professoresEspanhol)
  // ];
  // materia = this.materias.find(m => m.nome == 'Portugues');

  temas: Tema[] = [];
  tema: Tema | undefined = new Tema();
  temaSelecionado: string | undefined = '';
  professores: Professor[] = [];

  constructor(private temaService: TemaService, 
              private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.temaService.GetByDisciplinaId('9AE2307E-DCE4-4C2E-BE87-5859BC4C131D').subscribe(resultado => {
      this.temas = resultado;
    })
    this.tema = this.temas.find(t => t.nome == this.temaSelecionado);
  }

  alteraTema(temaSelecionado: string){
    this.tema = this.temas.find(t => t.nome == temaSelecionado);
    this.temaSelecionado = this.tema?.nome;
  }

  selecionado(temaSelecionado: string): boolean{
    return temaSelecionado == this.temaSelecionado;  
  }
}
