import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from '../Models/professor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [
    {
      imageSrc:
        './assets/images/cards/geografia.jfif',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        './assets/images/cards/geografia.jfif',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        './assets/images/cards/geografia.jfif',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        './assets/images/cards/geografia.jfif',
      imageAlt: 'person2',
    },
  ]

  professores: Professor[] = [];

  constructor(private router: Router) { }

  usuarioLogado: string | null = '';
  idUsuarioLogado = localStorage.getItem('id');

  ngOnInit(): void {
  }

  usuarioEstaLogado() : boolean{
    this.usuarioLogado = localStorage.getItem('email');
    return this.usuarioLogado != null;
  };
}
