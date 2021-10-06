let sistemasNotas =() => {
    let mat = []
    mat[0] = []
    mat[1] = []
    mat[2] = []
    mat[3] = []

    for (let i = 0; i < 4; i++) {
        alert(`Informe as notas do aluno ${i+1}`)
        for (let j = 0; j < 4; j++) {
            mat[i][j] = Number(prompt(`Informa a nota ${j+1}`))
            
        }
        
    }

    for (let i = 0; i < 4; i++) {
        let soma = 0
        for (let j = 0; j < 4; j++) {
            soma = soma + mat[i][j]
            
        }
        console.log(`A media do aluno ${i+1} é ${soma/4}`)
        
    }
}