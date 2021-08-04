
const persona = {
    nombre: 'Tony',
    apellido : 'Stark',
    edad: 45,
    direccion : {
        ciudad: 'New York',
        zip: 41320,
        lat: 14.123123,
        lng: 18.021012
    }
}


const persona2 = {...persona}

persona2.nombre = 'Peter'

console.log(persona)

console.log(persona2)