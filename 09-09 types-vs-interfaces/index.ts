//INTERFACES

interface Animal {
  sex: "male" | "female"
  hungry: boolean
  age: number
}

interface Mammal extends Animal{
  weaned: boolean
}

const AnimalConst: Mammal = {
  weaned: false,
  sex: "male",
  hungry: false,
  age: 0
}

//TYPE

type Weigth = number

type MammalType = Animal &{
  weigth: Weigth
  nome:string
}

const animal2: MammalType = {
  nome: 'Ale',
  sex: "male",
  hungry: false,
  age: 0,
  weigth:100

}


const greet = (name:string) => `Hello, ${name} !`