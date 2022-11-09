//DECLARANDO UMA INTERFACE
function cadastroAluno(aluno: Aluno){

}

interface Aluno {
    matricula: number,
    nome: string,
    dataNAscimento?: string //ao adicionarmos ?, ele torna o campo opcional.
}

cadastroAluno({matricula: 1986101149, nome: 'Marx', dataNAscimento: '26/07/1995'})



//COMPATIBILIDADE DE TIPOS
let Aluno2 = {
    matricula: 1986101250,
    nome: 'Gabriel',
    dataNascimento: '26/07/1995',
    turma: 'A14'
}

cadastroAluno(Aluno2)

//Podemos atribuir o OBJETO acima à função cadastroAluno, pois a verificação de tipos no TypeScript é baseada na estrutura do tipo e não no nome do tipo