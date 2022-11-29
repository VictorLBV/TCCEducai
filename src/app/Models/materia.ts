import { Professor } from "./professor";

export class Materia {
    nome: string;
    professores: Professor[];

    constructor(nome:string, professores: Professor[]) {
        this.nome = nome;
        this.professores = professores;
    }
}
