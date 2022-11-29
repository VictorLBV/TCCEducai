import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AulasComponent } from '../aulas/aulas.component';
import { HumanasComponent } from '../aulas/humanas/humanas.component';
import { LinguagensComponent } from '../aulas/linguagens/linguagens.component';
import { MatematicaComponent } from '../aulas/matematica/matematica.component';
import { NaturezaComponent } from '../aulas/natureza/natureza.component';
import { NovoprofessorComponent } from '../aulas/novoprofessor/novoprofessor.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'aulas', component: AulasComponent
  },
  {
    path: 'matematica', component: MatematicaComponent
  },
  {
    path: 'linguagens', component: LinguagensComponent
  },
  {
    path: 'natureza', component: NaturezaComponent
  },
  {
    path: 'humanas', component: HumanasComponent
  },
  {
    path: 'novoprofessor', component: NovoprofessorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
