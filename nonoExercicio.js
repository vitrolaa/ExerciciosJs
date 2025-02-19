//9. Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a quantidade de dias trabalhados no mes: ", (dias) => {
  let horasTrabalhadas = parseInt(dias) * 8;
  let salarioTotal = horasTrabalhadas * 25;

  console.log(
    `O salario recebido pelas ${horasTrabalhadas} foi de ${salarioTotal}`
  );

  rl.close();
});
