const prompt=require('prompt-sync')();

function addToList (list) {
    const position = list.length;
    const item = prompt (`Digite o novo item da lista aee kkkk : `);
    list [position] = item;
    console.log(`\n ${item} foi adicionado na sua lista valeu valeu. `);
    }
    
    module.exports = addToList;