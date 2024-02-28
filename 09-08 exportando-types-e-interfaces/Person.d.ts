//extensao .d.ts é um arquivo de declaração do Typescript

declare namespace Person{

  type Email = string 

  export interface Default{
    name: string
    age: number
  }


  export interface WithContacts extends Default{
  contacts: Email[]
  }

}