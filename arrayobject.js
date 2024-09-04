const teachers=[
    {
    firstName:"Rurangwa",
    secondName:'Kevin',
    age:30
},
    {
    firstName:"KALISA",
    secondName:'John',
    age:27
},
    {
    firstName:"Cyubahiro",
    secondName:'Damien',
    age:30
},

]
//DESTRUCTURING
const teachersNew={
    ...teachers,
    4:{
        firstName:"KAMANZI",
    secondName:'Jean Damascene',
    age:30
    }
}
console.log(teachersNew);