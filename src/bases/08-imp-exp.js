import { owners } from '../data/heroes'
import superHeroes from '../data/heroes'

const [ dc, marvel ] = owners

// getHeroById ()
// find
export const getHeroById = (id) => superHeroes.find(hero => hero.id === id)

// getHeroesByOwner
// [] 
export const getHeroesByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)




/**
 * 
import {getHeroById, getHeroesByOwner} from './bases/08-imp-exp'

console.log(getHeroById(1)) // spiderman

console.log(getHeroesByOwner('Marvel')) // []

*/