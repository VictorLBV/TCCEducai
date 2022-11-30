import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AulasComponent } from './aulas/aulas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './login/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from './carousel/carousel.module';
import { MatematicaComponent } from './aulas/matematica/matematica.component';
import { LinguagensComponent } from './aulas/linguagens/linguagens.component';
import { NaturezaComponent } from './aulas/natureza/natureza.component';
import { HumanasComponent } from './aulas/humanas/humanas.component';
import { MateriaComponent } from './aulas/materia/materia.component';
import { NovoprofessorComponent } from './aulas/novoprofessor/novoprofessor.component';
import { DisciplinaService } from './services/disciplina.service';
import { HttpClientModule } from '@angular/common/http';
import { TemaService } from './services/tema.service';
import { ProfessorService } from './services/professor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    AulasComponent,
    MatematicaComponent,
    LinguagensComponent,
    NaturezaComponent,
    HumanasComponent,
    MateriaComponent,
    NovoprofessorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    CarouselModule
  ],
  providers: [AuthService, DisciplinaService, TemaService, ProfessorService, HttpClientModule],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
