var person = {

  age:14,
  name:'Caike'
}

//funcao pura
function getRemainingYearsToMajorty (personObject){

  return 18 - personObject.age

}

//funcao impura, gera efeitos colaterais
function increasePersonAge(personObject){

  personObject.age = personObject.age + 1

}

//chamada metodo impuro
var remainingYears = getRemainingYearsToMajorty(person)

console.log(remainingYears)