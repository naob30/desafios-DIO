// Solicita o nome e o XP do herói
let nome = prompt("Digite o nome do herói:");
let xp = parseInt(prompt("Digite a quantidade de XP do herói:"));

// Variável para armazenar o nível
let nivel = ""; 

// Matriz contendo intervalos de XP e seus respectivos níveis
const niveis = [
    [0, 1000, "Ferro"],          
    [1001, 2000, "Bronze"],      
    [2001, 5000, "Prata"],       
    [5001, 7000, "Ouro"],        
    [7001, 8000, "Platina"],     
    [8001, 9000, "Ascendente"], 
    [9001, 10000, "Imortal"],   
    [10001, Infinity, "Radiante"]
];

// Percorrendo a matriz para determinar o nível do herói
for (let i = 0; i < niveis.length; i++) {
    let [min, max, nivelPossivel] = niveis[i];
    if (xp >= min && xp <= max) {
        nivel = nivelPossivel;
        break;
    }
}

// Exibe a mensagem final
alert(`O Herói de nome ${nome} está no nível de ${nivel}`);