import Livro from "./Livro";

export default class Ebook extends Livro {
    tamanhoArquivo: number;

    constructor(titulo: string, autor: string, isbn: string, tamanhoArquivo: number) {
        super(titulo, autor, isbn);
        this.tamanhoArquivo = tamanhoArquivo;
    }

    override exibirDetalhes(): void {
        console.log("-----DADOS LIVRO-------");
        console.log(`Nome: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`isbn: ${this.isbn}`);
        console.log(`Tamanho do arquivo: ${this.tamanhoArquivo}`);

    }
}