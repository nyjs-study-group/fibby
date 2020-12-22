
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


export const randomizeArray = ( arr ) => {
    assert( Array.isArray( arr ), 'Cannot run randomize array on a non-array' );

    const arrayToSort = [ ...arr ];
    return arrayToSort.sort( ( a, b ) => Math.random() > .5 ? 1 : -1 );
}
    
