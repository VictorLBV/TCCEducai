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
import { FormsModule } from '@angular/forms';
import { CarouselModule } from './carousel/carousel.module';
import { AulasDetalhesComponent } from './aulas/aulas-detalhes/aulas-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    AulasComponent,
    AulasDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    FormsModule,
    CarouselModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
