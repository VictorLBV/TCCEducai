import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroProfessor } from '../Models/professor';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  professor: any;

  constructor(private professorService: ProfessorService,
    private router: Router) { }

  ngOnInit(): void {
    this.professor = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.maxLength(80)]),
      email: new FormControl(null, [Validators.required, Validators.maxLength(60)]),
      senha: new FormControl(null, [Validators.required]),
      dataNascimento: new FormControl(null, [Validators.required]),
      telefone: new FormControl(null, [Validators.required])
    })
  }

  cadastrar(){
    const professor = this.professor.value;
    this.professorService.Cadastrar(professor).subscribe(resultado => {
      this.router.navigate(['/']);
      alert("Cadastro realizado com sucesso!");
    },
    (err) => {
      if(err.status === 400){
        alert("Erro ao realizar cadastro.");
      };
    });
  }
}
