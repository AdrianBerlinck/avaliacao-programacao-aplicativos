import Biblioteca from "./Biblioteca";
import leia from "readline-sync";


const biblioteca = new Biblioteca();

function exibirMenu() {
    console.log("\n------- MENU DA BIBLIOTECA --------");
    console.log("1. Adicionar Livro");
    console.log("2. Remover Livro");
    console.log("3. Buscar Livro");
    console.log("4. Listar Livros");
    console.log("0. Sair");

    var escolha = leia.questionInt("Escolha uma opcao: ");

    switch (escolha) {
        case 1:
            biblioteca.adicionarLivro();
            break;
        case 2:
            biblioteca.removerLivro();
            break;
        case 3:
            biblioteca.buscarLivro();
            break;
        case 4:
            biblioteca.listarLivros();
            break;
        case 0:
            console.log("Saindo...");
            process.exit(0);
            break;
        default:
            console.log("Opcao invalida.");
    }
}

while (true) {
    exibirMenu();
}