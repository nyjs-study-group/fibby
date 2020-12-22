
import { assert } from './assert.util';


const invalidArgumentsError = 'Invalid arguments for a range';

export const rangeFinder = 
    ( start, stop, inc = 1) => {

    assert( !!Number.isInteger( start ), invalidArgumentsError );

    if ( stop === undefined ) { 
        stop = start;
        start = 0;
    }

    assert( !!Number.isInteger( stop ), invalidArgumentsError );
    assert( !!Number.isInteger( inc ), invalidArgumentsError );

    let arrTwo = [];
    let i = start;
    for( ; i <= stop - 1; i += inc) {
    arrTwo.push(i);
    }
    
    
     return arrTwo;
}


// const aGo = rangeFinder(0, 20);

//BEFORE RANDOMIZATON 
// aGo.sort( ( a, b ) => a < b ? 1 : -1 );
// aGo.sort( ( a, b ) => Math.random() > .5 ? 1 : -1 );



// console.log(aGo);