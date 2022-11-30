import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../Models/login';
import { Professor } from '../Models/professor';
import { ProfessorService } from '../services/professor.service';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new Login();
  professor = new Professor();

  constructor(private professorService: ProfessorService,
    private router: Router,) { }

  ngOnInit(): void {
  } 

  logar(){
    console.log(this.login.email, this.login.senha);

    this.professorService.Logar(this.login).subscribe(resultado => {
      this.professor = resultado;
      localStorage.setItem('email', this.login.email);
      localStorage.setItem('id', this.professor.id);
      this.router.navigate(['/aulas'])
    },
    (err) => {
      if(err.status === 400){
        alert('Usuário ou senha inválido');
      }
      else if(err.status === 500){
        alert('Erro no servidor da API');
      }
      else{
        alert("Servidor fora do ar!")
      }
    });
  }
}
