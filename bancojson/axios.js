const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func1, func2) => {
    return func1.salario < func2.salario ? func1 : func2
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const f = funcionarios
    const chinesaDeMenorSalario = f.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(chinesaDeMenorSalario)
})

/*obtendo a mulher chinesa com o menor salario*/