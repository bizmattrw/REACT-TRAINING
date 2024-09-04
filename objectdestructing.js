//DESTRUCTURING IS A WAY OF COPYING PROPERTIES OF ONE OBJECT INTO ANOTHER OBJECT

//EXAMPLE
const colors={
    color1:"WHILE",
    color2:"BLUE",
    color3:"Yellow",
}
const secondColor={
    ...colors,
    color4:"SECOND COLOR"
}
console.log(secondColor);