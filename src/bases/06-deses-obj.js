

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'IronMan'
}

const {name, age, codeName, power = 'Sin poder'} = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

const createHero = ( {name, age, codeName, power} ) => 
    ({
        id: 11111,
        name,
        age,
        codeName,
        power
    })

console.log(createHero(person))