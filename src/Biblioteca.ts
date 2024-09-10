import leia from "readline-sync";
import Livro from "./Livro";
import LivroFisico from "./LivroFisico";
import Ebook from "./Ebook";

export default class Biblioteca {
    cadastro: Livro[] = [];

    public save(livro: Livro) {
        this.cadastro.push(livro);
        console.log("Cadastro criado com sucesso!");
    }

    public adicionarLivro() {
        console.log("-------ADICIONAR LIVRO----------");

        var titulo = leia.question("DIGITE O TITULO DO LIVRO: ");
        var autor = leia.question("DIGITE O AUTOR DO LIVRO: ");
        var isbn = leia.question("DIGITE A ISBN DO LIVRO: ");
        var tipoLivroIndex = leia.keyInSelect(["FISICO", "EBOOK"], "Escolha o tipo de livro:");

        var livro: Livro;

        if (tipoLivroIndex === 0) {
            var numeroPaginas = leia.questionInt("DIGITE O NUMERO DE PAGINAS: ");
            livro = new LivroFisico(titulo, autor, isbn, numeroPaginas);
            this.save(livro);
        } else if (tipoLivroIndex === 1) {
            var tamanhoArquivo = leia.questionInt("DIGITE O TAMANHO DO ARQUIVO: ");
            livro = new Ebook(titulo, autor, isbn, tamanhoArquivo);
            this.save(livro);
        } else {
            console.log("Tipo de livro não selecionado.");
        }


    }

    public removerLivro() {
        console.log("---------DELETAR LIVRO-----------")
        var isbnLivro = leia.question("DIGITE O ISBN DO LIVRO: ")
        var index = this.cadastro.findIndex(livro => livro.isbn === isbnLivro);

        if (index !== -1) {
            console.table(this.cadastro[index]);
            this.cadastro.splice(index, 1);
            console.log(`O LIVRO FOI EXCLUÍDO COM SUCESSO`);

        } else {
            console.log(`Nenhum livro encontrado com o ISBN ${isbnLivro}.`);
        }
    }


    public buscarLivro() {
        console.log("---------BUSCAR LIVRO-----------");
        var isbnLivro = leia.question("DIGITE O ISBN DO LIVRO: ");
        var index = this.cadastro.findIndex(livro => livro.isbn === isbnLivro);
        console.table(this.cadastro[index]);

    }

    public listarLivros() {
        console.table(this.cadastro);

    }

}

