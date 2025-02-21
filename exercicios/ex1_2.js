//Para usar o prompt no nodejs é preciso instalar essa lib 'prompt-sync'

let prompt = require("prompt-sync");
prompt = prompt();

const n1 = prompt("Digite o primeiro número: ");
console.log(n1);

// Parte 1: Operadores Aritméticos
// 1.1. Cálculo de Desconto
// let preco = parseFloat(prompt("digite o preço:"));
// let desconto = parseFloat(prompt("digite o desconto:"));

// function calcularDesconto (preco, desconto){
//     const resultado = preco -(preco * desconto/100);
//     console.log("o valor com desconto é:", resultado);
// }

// calcularDesconto(preco, desconto);

// 1.2. Conversor de Temperatura

// let celsius = parseFloat(prompt("digite quantos graus:"));

// function conversao(celsius) {
//     const fahrenheit = ((celsius * 9 / 5) + 32);
//     console.log(fahrenheit)
// }

// conversao(celsius);

// 1.3. Cálculo de Juros Simples

// let numero = parseFloat(prompt("digite o numero:"));
// let taxa = parseFloat(prompt("digite a taxa:"));
// let tempo = parseFloat(prompt("digite o tempo:"));

// function jurosSimples (numero, taxa, tempo ){

//     const taxaConvertido = (taxa / 10);
//   const resultado = (numero * taxaConvertido * tempo);
//   console.log(resultado)
// }

// jurosSimples(numero, taxa, tempo);

// Parte 2: Operadores Relacionais
// 2.1. Maior Número

// let numero1 = parseFloat(prompt("digite o primeiro numero:"));
// let numero2 = parseFloat(prompt("digite o segundo numero:"));

// function comparacao(numero1, numero2) {
//     if(numero1 > numero2){
//         console.log("o maior numero é:", numero1);
//     }else if(numero1 < numero2){
//         console.log("o maior numero é:", numero2);
//     }else {
//         console.log("os dois são iguais");
//     }
// }

// comparacao(numero1, numero2);

// 2.2. Classificação de Idade

// let idade = parseFloat(prompt("digite sua idade:"));

// function classificacao(idade){
//     if(idade < 12){
//         console.log("você é uma criança")
//     }else if(idade >=12 && idade < 18){
//         console.log("você já é um adolecente")
//     }else {
//         console.log("você é um adulto")
//     }
// }
// classificacao(idade);

// 2.3. Validação de Nota

//  let nota = parseFloat(prompt("digite sua nota:"));

//  function valida(nota){
//      if(nota >= 0 && nota <= 10){
//          return true;
//      }else {
//          return false;
//      }
//  }

//  console.log(valida(nota));

// Parte 3: Operadores Lógicos
// 3.1. Aprovado ou Reprovado

// let media = parseFloat(prompt("digite a media do aluno:"));
// let falta = parseFloat(prompt("digite as faltas em porcentagem:"));

// function aprovacao(media, faltas){

//       if(media <= 10 && media >=7 && media > 25){
//       console.log("Uau! Aprovado");
//       }else{
//       console.log("Reprovado!")
//      }
// }
// aprovacao(media, falta);

// 3.2. Intervalo de Valores

// let valor = parseFloat(prompt("digite o valor:"));
// let min = parseFloat(prompt("digite o valor minimo:"));
// let max = parseFloat(prompt("digite o valor maximo:"));

// function entre(valor, min, max){
//     if(valor >= min && valor <= max){
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(entre(valor, min, max));

// 3.3. Verificação de Login

// let user = prompt("digite seu username:");
// let senha = parseFloat(prompt("digite sua senha:"));

// function verifica(user, senha) {
//   if (user === "admin" && senha === 1234) {
//     console.log("Login bem-sucedido");
//   } else {
//     console.log("Usuário ou senha incorretos");
//   }
// }
// verifica(user, senha);
