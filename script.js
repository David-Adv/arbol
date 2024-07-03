import {crearPersona} from "./assets/crearPersona.js"
console.log("hola")
const container = document.getElementById("container")
const rama2 = document.getElementById("rama2")

// const bart = crearPersona("bart","homero","padre")
// const bart = crearPersona("bart","homero","padre")
 const personas =[
    crearPersona("bart","homero","padre"),
    crearPersona("bart","marge","madre"),
    crearPersona("homero","abraham","padre"),
    crearPersona("homero", "mona", "madre"),
    crearPersona("marge","clancy","padre"),
    crearPersona("marge","jacqueline","madre")
    
]


function createSubcaja(nombre) {
    return `
                    <div>${nombre}</div> 
             `
}
let primeraRama = ""

for(let i = 0; i<=1; i++ ){
 primeraRama += createSubcaja(personas[i].predecesor)

}

let segundaRama = ""

for(let i = 2; i<=5; i++ ){
 segundaRama += createSubcaja(personas[i].predecesor)

}



createTemplate (container,primeraRama)

createTemplate (rama2,segundaRama)

function createTemplate (container, template){
    container.innerHTML += template

}
console.log(primeraRama)


console.log(personas)
