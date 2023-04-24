console. log('bem vindo ao starter')
/* tipos de dados- strings: cadeia de caracteres.
"" ,  ' ' - devem ser escritos dentro de aspas, simples ou duplas.
também, dentro de crases ` `. dentro de crases é possível usar mutiplas linha sem erros ao código.*/
// exercicios:

let weight;
console .log(typeof weight)

/*let name = 'mayk' // string
let age = 23  // (integer)
let stars = 4.5  // (float)
let isSubscribed = false   // boolean*/

let student = {
    name: 'mayk', 
    age: 23,  
    weight: 83.5,  
    isSubscribed: true, 
}

const john ={
    name:'john',
    age: 45,
    weight: 130.8,
    isSubscribed: true,
}
 
console.log(`o aluno chama-se ${student.name}, tem ${student.age} anos e pesa ${student.weight} Kg`)

let students = []

 students = [
    student,
    john
]


console.log(students)
