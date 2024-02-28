// criando uma função basica, sendo age por ter uma interrogação é opcional
function greet(name: string, age?:number){
  console.log(`Hello, ${name.toUpperCase()}, age ${age}`)
}

greet('Ronaldo',33)