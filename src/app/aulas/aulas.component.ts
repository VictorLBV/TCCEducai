import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../Models/disciplina';
import { DisciplinaService } from '../services/disciplina.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss']
})
export class AulasComponent implements OnInit {

  disciplinas: Disciplina[] = [];
  constructor(private disciplinaService: DisciplinaService) { }

  ngOnInit(): void {
    this.disciplinaService.GetAll().subscribe(resultado => {
      this.disciplinas = resultado;
      console.log(this.disciplinas);
      console.log('teste');
    })
  }

}
