import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tema } from '../Models/tema';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) {}

  GetByDisciplinaId(disciplinaId: string) : Observable<Tema[]>{
    return this.http.get<Tema[]>(`http://localhost:5000/obter-temas-por-disciplinaid/${disciplinaId}`);
  }
  GetById(id: string ) : Observable<Tema>{
    return this.http.get<Tema>(`http://localhost:5000/obter-tema-por-id/${id}`);
  }
}
