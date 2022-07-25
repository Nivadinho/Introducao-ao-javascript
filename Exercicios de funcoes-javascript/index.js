const alunos = [
    {
        nome: 'joão',
        nota:5
        turma:'1b',
    },
    {
        nome:'sofia',
        nota:9,
        turma:'1b',
    },
    {
        nome: 'Paulo',
        nota:6,
        turma:'2c',
    },
    {
        nome: 'Claudio',
        nota 3,
        turma:'2c',
    },
];

Function alunosaprovados(arr5, media) {
    let aprovados =[];
    for (let i=0; i <arr.length;++) {

        const {nota, nome}= arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }

    }

    return aprovados;
}

console.log(alunosaprovados(alunos, 5));