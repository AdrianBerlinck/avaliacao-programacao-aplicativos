
import Livro from "./Livro";

export default class LivroFisico extends Livro {
    numeroPaginas: number;

    constructor(titulo: string, autor: string, isbn: string, numeroPaginas: number) {
        super(titulo, autor, isbn);
        this.numeroPaginas = numeroPaginas;
    }

    override exibirDetalhes(): void {
        console.log("-----DADOS LIVRO-------");
        console.log(`Nome: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`isbn: ${this.isbn}`);
        console.log(`Numero de paginas: ${this.numeroPaginas}`);

    }
}