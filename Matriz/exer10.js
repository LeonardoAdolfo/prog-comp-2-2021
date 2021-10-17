let ex10 = ()=>{
    let matriz = []
    for(let i=0;i<5;i++){
        matriz[i] = []
        for(let j=0;j<5;j++){
            matriz[i][j] = Number(prompt(`Informe um numero: `))
        }
    }
    
    let lin4
    for(let i=0;i<5;i++){
        lin4 = 0
        for(let j=0;j<5;j++){
            lin4 = lin4 + matriz[3][j]
        }
    }
    
    
    let col
    for(let j=0;j<5;j++){
        col = 0
        for(let i=0;i<5;i++){
            col = col + matriz[i][1]
        }
    }
    
    let  DigP = 0
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            if(i == j){
                 DigP =  DigP + matriz[i][j]
            }
        }
    } 
    let DigS = 0
    for(let i=0;i<5;i++){
            DigS = DigS + matriz[i][5-1-i]
    } 
    let total = 0
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            total = total + matriz[i][j]
        }
    }
    alert(`A soma da linha 4 é: ${lin4} \nA soma da coluna 2 é ${col} \nA soma da diagonal principal ${DigP} \nA soma da diagonal secundaria é ${DigS} \nA soma total dos elementos da matriz é ${total}`)
   
    
} 