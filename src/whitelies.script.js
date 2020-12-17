// import { whiteLiesData } from '../data/whitelies.data';

// import {
//     getRandomWhiteLie,
//     getRandomWhiteLiesList,
// } from './whitelies';


// console.log( getRandomWhiteLiesList(whiteLiesData, 100))






let myArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

//take a chunk of an array and return the integers?


const rangeFinder = (start, stop, inc = 1) => {
    let arrTwo = [];
    let i = start;
    for( ; i <= stop; i += inc) {
    arrTwo.push(i);
    }
    
    // slicey = myArr.slice(start, stop);
     return arrTwo;
}


const aGo = rangeFinder(0, 20);
aGo.sort( ( a, b ) => Math.random() > .5 ? 1 : -1 );


// aGo.sort( ( a, b ) => a < b ? 1 : -1 );
console.log(aGo);

// const rangeOfItems = [ ...Array( 5 ).keys() ]