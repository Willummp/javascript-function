const prompt = require('prompt-sync')();
const showMenu = require('./showmenu');
const addToList = require('./add');
const showList = require('./showlist');
const removeFromList = require('./remove');

const list = [];
let option = 0;

do {
    console.clear();
    showMenu();
    console.log();
    option = Number(prompt(`>> `));
    console.clear();

    switch(option){
        case 1:
            addToList(list); 
          break;
        case 2:
            showList(list);
          break;
        case 3:
            removeFromList(list);
          break;
        case 4: 
            console.log (`Finalizando a aplicação.`);
          break;
        default:
            console.log(`\nOPÇÃO INVÁLIDA, ESCOLHA UM NUMERO DE 1 A 4`);
          break;
    }

    prompt(`Pressione ENTER para continuar`);
}   while(option != 4);

