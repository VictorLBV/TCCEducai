import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from 'src/app/Models/professor';
import { Tema } from 'src/app/Models/tema';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss']
})
export class MateriaComponent implements OnInit {
  professores: Professor[] = [];

  constructor(private professorService: ProfessorService,
    private router: Router) { }

  @Input() tema: Tema | undefined;

  usuarioLogado: string | null = '';
  idUsuarioLogado = localStorage.getItem('id');

  ngOnInit(): void {
    this.professorService.GetByTemaId(this.tema?.id).subscribe(resultado => {
      this.professores = resultado;
    })
    console.log(location.href)
  }

  usuarioEstaLogado() : boolean{
    this.usuarioLogado = localStorage.getItem('email');
    return this.usuarioLogado != null;
  };

  professorEnsinaTema() : boolean{
    this.idUsuarioLogado = localStorage.getItem('id');
    let professor = this.professores.filter(p => p.id == this.idUsuarioLogado);
    return professor.length > 0;
  }

  ensinarTema(){
    this.professorService.EnsinarTema(this.idUsuarioLogado, this.tema?.id).subscribe(resultado => {
      location.reload();
    },
    (err) => {
      if(err.status === 500){
        alert('Erro no servidor da API');
      };
    });
  }
    pararEnsinarTema(){
      this.professorService.PararEnsinarTema(this.idUsuarioLogado, this.tema?.id).subscribe(resultado => {
        location.reload();
      },
      (err) => {
        if(err.status === 500){
          alert('Erro no servidor da API');
        };
      });
  }
}
