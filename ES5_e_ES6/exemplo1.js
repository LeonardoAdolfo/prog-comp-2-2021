let vet = [1, 2, 3, 4, 5];
vet.forEach((elemento) => {
  console.log(elemento);
});

let vet2 = [10, 20, 30, 40, 50];

vet2.forEach((elemento, posicao) => {
  console.log(elemento, posicao);
});

let vet3 = [10, 20, 30, 40, 50];

vet3.forEach((e, p) => {
  if (p % 2 == 0) {
    console.log(e);
  }
});


//
let filmes = [
  {
    nome: "Vingadores",
    ano: 2018,
    classificacao: "Aventura",
  },
  {
    nome: "Batman",
    ano: 2019,
    classificacao: "Ação",
  },
  {
    nome: "X-Men",
    ano: 2020,
    classificacao: "Ficcao",
  },
];
// percorrer filmes 
filmes.forEach((elem) => {
    console.log(`Nome: ${elem.nome}; \nAno: ${elem.ano}; \nClassificção: ${elem.classificacao}`)
})

// Função .map()
// Pode alterar conteúdo do vet original

let vet4 = [9, 8, 7, 6, 5];

vet4 = vet4.map((elemento) => {
  return Math.pow(elemento, 2);
});
console.log(vet4);


//Função .reduce()
let vet5 = [5,9,12,15,18]
// soma elementos do arrey
let soma = vet5.reduce( ( total, ele) => {
    return total + ele
}) 

//Funcção filter 
//Resumidamente filtrar o vetor 
let vet6 = [1,2,3,4,5,6,6,4,8,777,1]

let pares = vet6.filter( ele =>{
    return ele % 2 == 0
} )
console.log(pares)


//For of
// igual ao for in do python
let carro = ['BMW','AUDI', 'Mini']
for(let elementos of carro){
    console.log(elementos)
}
    
