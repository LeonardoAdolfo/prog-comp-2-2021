// Cria a função
let sistemaVendas =()=>{
    // Vetor meses 
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

    //Declara Matriz
    let matriz = []

    for(let i = 0; i<12;i++){
        matriz[i] = []
        alert(`Informe das vendas do mes ${meses[i]}`)
        for(let j = 0; j<12;j++){
            matriz[i][j] = Number(prompt(`Informe das vendas da semana  ${j+1}`))
            
        }
    }
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