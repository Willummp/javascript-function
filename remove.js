const showList = require('./showlist');
const prompt = require("prompt-sync")();

function removeFromList (list){
    showList(list);
    const positionText = prompt(`Qual elemento vc deseja removeee??? de 1 a 4`);
    const position = Number(positionText) - 1;
    list.splice(position,1);
} module.exports = removeFromList;