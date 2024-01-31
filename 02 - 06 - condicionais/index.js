var me = {
  name: 'Alexandre',
  age: '18',
  nationality: 'Brazil'
}

function checkAge(person){
  console.log('A idade da pessoa é: ' + person.age)
  
  //verificar apenas o valor, tanto string ou numero
  if(person.age == 18){

    console.log('A pessoa é maior de idade')

  }

  //verifica tambem o tipo
  if(person.age === 18){

    console.log('A pessoa é maior de idade')

  }

  else{
    console.log('A pessoa é menor de idade')
  }
}


checkAge(me)