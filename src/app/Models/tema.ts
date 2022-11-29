import { Disciplina } from "./disciplina";

export class Tema {
    Id: string = '';
    Nome: string = '';
    Disciplina: Disciplina = new Disciplina();
    Professores = [];

    constructor(){}
}