

export function crearPersona(nombre, predecesor, tipoPredecesor) {
   
    const persona = {
        nombre:"",
        predecesor:"",
        tipoPredecesor:""
    }

    persona.nombre = nombre;
    persona.predecesor = predecesor;
    persona.tipoPredecesor = tipoPredecesor

    return persona
}
 
