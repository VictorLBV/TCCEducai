import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/Models/disciplina';
import { Materia } from 'src/app/Models/materia';
import { Professor } from 'src/app/Models/professor';
import { Tema } from 'src/app/Models/tema';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ProfessorService } from 'src/app/services/professor.service';
import { TemaService } from 'src/app/services/tema.service';

@Component({
  selector: 'app-matematica',
  templateUrl: './matematica.component.html',
  styleUrls: ['./matematica.component.scss']
})
export class MatematicaComponent implements OnInit {
  //temaSelecionado:string = 'Geometria';
  // professoresGeometria: Professor[] = [new Professor("João", 30, 16123456789, "joao@hotmail.com"), new Professor("Pedro", 35, 19098765432, "pedro@gmail.com"), new Professor("Ataide", 35, 19098765432, "ataide@outlook.com"),new Professor("Ribamar", 35, 19098765432, "ribamar@google.com"), new Professor("Odair", 95, 19098765432, "odair@yahoo.com")];
  // professoresAlgebra: Professor[] = [new Professor("Carlos", 28, 16123456789, "carlos@hotmail.com"), new Professor("José", 33, 16123456789, "jose@hotmail.com"), new Professor("Eduardo", 18, 19876541234, "eduardo@gmail.com")];
  // professoresAritmetica: Professor[] = [new Professor("Lucas", 40, 16123456789, "lucas@hotmail.com"), new Professor("Leandro", 38, 16123456789, "leandro@hotmail.com")];
  // materias: Materia[] = [
  //   new Materia("Geometria", this.professoresGeometria),
  //   new Materia("Algebra", this.professoresAlgebra),
  //   new Materia("Aritmetica", this.professoresAritmetica)
  // ];
  // materia = this.materias.find(m => m.nome == 'Geometria');

  temas: any[] = [];
  tema: Tema | undefined = new Tema();
  temaSelecionado: string | undefined = '';
  professores: Professor[] = [];

  constructor(private temaService: TemaService, 
              private professorService: ProfessorService) { }

  usuarioLogado: string | null = '';
  idUsuarioLogado = localStorage.getItem('id');

  ngOnInit(): void {
    this.temaService.GetByDisciplinaId('11687CCF-728E-4E46-B8F1-96B4E8EAB49D').subscribe(resultado => {
      this.temas = resultado;
      this.tema = resultado.find(t => t.nome == this.temaSelecionado);
    })
  }

  alteraTema(temaSelecionado: string){
    this.tema = this.temas.find(t => t.nome == temaSelecionado);
    this.temaSelecionado = this.tema?.nome;
  }

  selecionado(temaSelecionado: string): boolean{
    return temaSelecionado == this.temaSelecionado;  
  }

  usuarioEstaLogado() : boolean{
    this.usuarioLogado = localStorage.getItem('email');
    return this.usuarioLogado != null;
  };
}
