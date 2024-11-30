# 🦸‍♂️ Hero Level Calculator 🦸‍♀️

Este projeto é um calculador de níveis de heróis com base na quantidade de XP! 💥 O herói entra com seu XP, e o sistema diz em que nível ele está. Super simples e divertido! 😎

---

## Como Funciona 🚀

O código solicita o nome do herói e a quantidade de XP, depois calcula o nível do herói com base no XP informado. Os níveis são atribuídos da seguinte forma:

- **Ferro**: XP entre 0 e 1000
- **Bronze**: XP entre 1001 e 2000
- **Prata**: XP entre 2001 e 5000
- **Ouro**: XP entre 5001 e 7000
- **Platina**: XP entre 7001 e 8000
- **Ascendente**: XP entre 8001 e 9000
- **Imortal**: XP entre 9001 e 10000
- **Radiante**: XP maior ou igual a 10001

---

## 🎮 Como Jogar (usar) 🧙‍♂️

1. **Abra o código** em um navegador, que é onde ele foi feito para funcionar. 😁
2. O navegador pedirá para você inserir o **nome do herói** e o **XP**.
3. Após isso, você verá um alerta dizendo o **nível** do herói! 🏆

---

## Exemplo de Execução ✨

### Entradas:
- **Nome**: João
- **XP**: 7500

### Saída:
`O Herói de nome João está no nível de Ouro 🥇`

---

## 🚧 Estrutura do Código

1. **Entrada de dados**: O código usa o `prompt()` para coletar o nome e o XP do herói.
2. **Verificação do nível**: O XP informado é comparado com as faixas de nível para determinar o título do herói.
3. **Saída**: O nível do herói é exibido usando um **alert** no navegador.

---

### Exemplo de Código

```javascript
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
