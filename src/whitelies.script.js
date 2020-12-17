import { whiteLiesData } from '../data/whitelies.data';

import {
    getRandomWhiteLie,
    getRandomWhiteLiesList,
} from './whitelies';


console.log( getRandomWhiteLiesList(whiteLiesData, 100))






let myArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

//take a chunk of an array and return the integers?


rangeFinder = (start, stop, inc) => {
    let arrTwo = [];
    for( let i = start; i <= stop; i += inc) {
    arrTwo.push(myArr[i]);
    }
    
    // slicey = myArr.slice(start, stop);
     console.log(arrTwo);
}

rangeFinder(2, 5, 1);