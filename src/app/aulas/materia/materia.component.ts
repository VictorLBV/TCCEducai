import { Component, Input, OnInit } from '@angular/core';
import { Materia } from 'src/app/Models/materia';
import { Professor } from 'src/app/Models/professor';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss']
})
export class MateriaComponent implements OnInit {

  constructor() { }

  @Input() materia: any;

  ngOnInit(): void {
  }

}
