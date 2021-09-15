function principal() {
  let opcao;
  let idade, peso, altura;
  let vetor = [];
  do {
    opcao = Number(prompt(`Mermao escolhe ai qq voce quer 1. F1 2. F2 3. F3`));
    switch (opcao) {
      case 1:
        idade = Number(prompt(`Informe sua idade !`));
        f1(idade);
        break;
      case 2:
        peso = Number(prompt(`Informe sua peso !`));
        idade = Number(prompt(`Informe seu idade !`));
        f2(idade, peso);
        break;
      case 3:
        idade = Number(prompt(`Informe sua idade !`));
        peso = Number(prompt(`Informe seu peso !`));
        altura = Number(prompt(`Informe sua altura !`));

        f3(idade, peso, altura);
        break;
      case 4:
        vetor.push(1);
        vetor.push(2);
        vetor.push(3);
        f4(vetor);
        break;
      default:
        alert(`Errado!!!!!`);
    }
  } while (opcao != 4);
}
function f1(idade) {
  alert(`Chamada F1`);
  alert(idade);
}
function f2(idade, peso) {
  alert(`Chamada F2`);
  alert(idade);
  alert(peso);
}
function f3(idade, peso, altura) {
  alert(`Chamada F3`);
  alert(idade);
  alert(peso);
  alert(altura);
}
function f4(vetor) {
  vetor[0] = vetor[0] + 10;
  vetor[1] = vetor[1] + 10;
  vetor[2] = vetor[2] + 10;
}
