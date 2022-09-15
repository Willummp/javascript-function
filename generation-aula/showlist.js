function showList (list) {
    console.log(` ----- LISTAGEM COMPLETA DOS ITENS ----- `);
    for (i=0; i<list.length; i++){;
    console.log(`${i+1} - ${list[i]}`);
    }
}
module.exports = showList;