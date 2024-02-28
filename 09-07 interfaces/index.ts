//Interfaces -- alternativa aos types

interface Human extends Animal  {

  name:string
  age: number
}

interface Animal  {
  sex: 'male' | 'female'
}

// type Person = Human & Animal

const person : Human = {
  age:22,
  name:'Lucas',
  sex: 'male'
}


