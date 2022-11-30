import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Models/login';
import { CadastroProfessor, Professor } from '../Models/professor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) {}

  GetByTemaId(temaId: string | undefined) : Observable<Professor[]>{
    return this.http.get<Professor[]>(`http://localhost:5000/obter-professor-por-tema/${temaId}`);
  }

  Logar(login: Login) : Observable<any>{
    return this.http.post<any>('http://localhost:5000/logar', login, httpOptions);
  }

  EnsinarTema(professorId: string | null, temaId: string | undefined) : Observable<any>{
    return this.http.post<any>(`http://localhost:5000/atribuir-tema/${professorId}/${temaId}`, httpOptions);
  };

  PararEnsinarTema(professorId: string | null, temaId: string | undefined) : Observable<any>{
    return this.http.delete<any>(`http://localhost:5000/desatribuir-tema/${professorId}/${temaId}`, httpOptions);
  };

  Cadastrar(professor: CadastroProfessor) : Observable<CadastroProfessor>{
    return this.http.post<CadastroProfessor>(
      `http://localhost:5000/cadastrar`, professor, httpOptions);
  }
}
