var person1 = {
  name: 'Daniel',
  age: 22
}

var person2={
  name: 'Robson',
  age:32
}

var person3 = {
  name: 'Caio',
  age:45
}


// listando objetos
var list = [person1, person2, person3]

for(var person of list){


  console.log(person.name)
  console.log('\---------------------------------------/')

}