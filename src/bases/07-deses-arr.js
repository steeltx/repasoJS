
const characters = ['Goku', 'Vegeta', 'Trunks']

const [g, v, t, goten = 'Sin valor'] = characters


console.log(g, v, t, goten)

const returnArray = ([letters, numbers]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray(['xyz',123])

console.log(letters, numbers)
