let Cidade1 = new Object();
Cidade1.uf = 'Sp'
Cidade1.nome = 'Franca'
Cidade1.populacao = 400.000

let Cidade2 = new Object();
Cidade2.uf = 'Mg'
Cidade2.nome = 'São Tomas'
Cidade2.populacao = 7.000


let pais1 = {
    nome: 'Brasil',
    sigla:'Bra',
    copas:'5',
    temCorinthians: true
}
let pais2 = {
    nome: 'Estados ',
    sigla:'Eua',
    copas:'0',
    temCorinthians: false
}


let ex = new Object()
ex["item1"] = ''


let produto = []

for(let i=0;i<4;i++){

    let objeto = {
        nome: prompt(`De o nome do primeiro produto: `),
        qtd: Number(prompt(`De a quantidade do produto: `)),
        preco: Number(prompt(`De o valor dop produto: `))
    }
    produto.push(objeto)
}



let soma = 0
let med = 0 
for(let i=0;i<4;i++){
    soma = soma + produto[i].preco
} 
med = soma/4
alert(`${med}`)
