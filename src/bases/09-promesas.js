// console.log('Inicio')

// new Promise((resolve,reject) => {
//     console.log('Cuerpo de la promesa')
//     reject('Promesa resuelta con error')
// }).then(console.log )
// .catch(console.log)

// console.log('Fin')

import { getHeroById } from './bases/08-imp-exp'

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            if(hero){
                resolve(hero)
            }
            else{
                reject('Heroe no existe')
            }
        }, 1000);
    });
}

getHeroByIdAsync(1)
.then(h => console.log(`El heroe es : ${h.name}`))
.catch(console.log)