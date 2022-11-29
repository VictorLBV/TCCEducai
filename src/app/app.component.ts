import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'educai_tcc.angular_26082002';
  usuarioLogado: string | null  = '';

  usuarioEstaLogado() : boolean{
    this.usuarioLogado = localStorage.getItem('email');
    return this.usuarioLogado != null;
  };

  deslogar(){
    localStorage.removeItem('email');
  }
}
