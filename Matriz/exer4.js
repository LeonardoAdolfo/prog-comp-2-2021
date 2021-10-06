// Cria a função
let sistemaVendas =()=>{
    // Vetor meses 
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

    //Declara Matriz
    let matriz = []

    let opcao
    
    do{
        opcao = Number(prompt(`1. Cadastrar Vendas \n2. Total Vendido por mes \n3.Venda semana \n4. Vendas ano \n5.Sair `))
        switch(opcao){
        case 1: cadastraVEndas(matriz, meses)
        break
        case 2: totalVendas(matriz, meses)
        break
        case 3: totalVendaSemana(matriz)
        break
        case 4: totalVendasAno(matriz)
        break
        case 5: alert('Saiu ne mano')
        break
        default: alert('Opção Invalida')
        break
    }
    }while(opcao != 5)


    
}

let cadastraVEndas = (matriz, meses) => {
    for(let i = 0; i<12;i++){
        matriz[i] = []
        alert(`Informe das vendas do mes ${meses[i]}`)
        for(let j = 0; j<12;j++){
            matriz[i][j] = Number(prompt(`Informe das vendas da semana  ${j+1}`))
            
        }
    }
}

let totalVendas = (matriz, meses) => {
    
    let soma 
    for(let i = 0; i<12;i++){
       soma =0
        alert(`Informe das vendas do mes ${meses[i]}`)
        for(let j = 0; j<12;j++){
            soma = soma + matriz[i][j]
        }
        alert(`Total vendido no mes ${i} foi ${soma}`)
    }
}

let totalVendaSemana=(matriz)=>{
    let soma = 0
    for (let j = 0;j  < 4; j++) {
        for (let i = 0; i < 12; i++) {
            soma = soma + matriz[i][j]
        }
        alert(`A soma de vendas da semana ${j+1} é ${soma} `)
        
    }
}

let totalVendasAno = (matriz) =>{
    let soma = 0
    for (let j = 0;j  < 12; j++) {
        for (let i = 0; i <12 ; i++) {
            soma = soma + matriz[j][i]
        }
        alert(`A soma de vendas do ano é ${soma} `)
        
    }
}