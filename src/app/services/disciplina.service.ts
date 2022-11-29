import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disciplina } from '../Models/disciplina';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DisciplinaService {

  constructor(private http: HttpClient) {}

   GetAll() : Observable<Disciplina[]>{
    return this.http.get<Disciplina[]>('http://localhost:5000/obter-disciplinas');
  }
  GetById(id: string ) : Observable<Disciplina>{
    return this.http.get<Disciplina>(`http://localhost:5000/obter-disciplina-por-id/${id}`);
  }
}
