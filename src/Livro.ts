import { TypeReferenceDirectiveResolutionCache } from "typescript";

export default class Livro {
    constructor(titulo: string, autor: string, isbn: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }

    titulo: string;
    autor: string;
    isbn: string;


    public exibirDetalhes() {
        console.log("-----DADOS LIVRO-------");
        console.log(`Nome: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`isbn: ${this.isbn}`);
    }
}