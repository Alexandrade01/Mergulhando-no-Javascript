//Union vs. Intersection (pipe vs. and)
//Union = 'ou'   Intersection = 'e' --> significado oposto da matematica


//union 'Ou'
type Cpf = string | number 

//estilo union de objetos
function findPerson(cpf:Cpf){
  if(typeof cpf === 'string'){
    //pode ser uma string
    return cpf.toUpperCase() 
  }
  //ou union
  return cpf.toFixed(2)
}



type Animal = {sex:'male' | 'female'}
type Human = {hungry: boolean}

//estilo intersection &
type Person = Animal & Human

function getPersonStatus(person: Person){
  return person;
}


