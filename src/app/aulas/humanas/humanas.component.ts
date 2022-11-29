import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/Models/professor';
import { Materia } from 'src/app/Models/materia';

@Component({
  selector: 'app-humanas',
  templateUrl: './humanas.component.html',
  styleUrls: ['./humanas.component.scss']
})
export class HumanasComponent implements OnInit {
  materiaSelecionada: string = 'Historia';
  professoresHistoria: Professor[] = [new Professor("João", 30, 16123456789, "joao@hotmail.com"), new Professor("Pedro", 35, 19098765432, "pedro@gmail.com"), new Professor("Ataide", 35, 19098765432, "ataide@outlook.com"), new Professor("Ribamar", 35, 19098765432, "ribamar@google.com"), new Professor("Odair", 95, 19098765432, "odair@yahoo.com")];
  professoresFilosofia: Professor[] = [new Professor("Carlos", 28, 16123456789, "carlos@hotmail.com"), new Professor("José", 33, 16123456789, "jose@hotmail.com"), new Professor("Eduardo", 18, 19876541234, "eduardo@gmail.com")];
  professoresGeografia: Professor[] = [new Professor("Lucas", 40, 16123456789, "lucas@hotmail.com"), new Professor("Leandro", 38, 16123456789, "leandro@hotmail.com")];
  materias: Materia[] = [
    new Materia("Historia", this.professoresHistoria),
    new Materia("Filosofia", this.professoresFilosofia),
    new Materia("Geografia", this.professoresGeografia)
  ];
  materia = this.materias.find(m => m.nome == 'Historia');

  constructor() { }

  ngOnInit(): void {
    //vai no back end e pega as 3 materias de matematica
    // materias = resultado do backend
  }

  alteraMateria(materia: string) {
    this.materiaSelecionada = materia;
    this.materia = this.materias.find(m => m.nome == materia);
    console.log(this.materiaSelecionada);
    console.log(this.materia);
  }


}
