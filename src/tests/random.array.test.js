//TEST THAT AN ARRAY RANDOMIZER IS ACTUALLY MAKING IT RANDOM

import { 
    randomizeArray,
    rangeFinder,
 } from '../utils/array.util';

describe(
    `Does the randomizer randomize?`,
    () => {
        
        test( `try to randomize a numeric array`,
        () => { 
            const startArray = rangeFinder( 10 );
            const randomizedStartArray = randomizeArray( startArray );
            expect( startArray ).not.toEqual( randomizedStartArray );

        });

        test(`should throw an error if randomizing a non-array`,
        () => { 
            const startArray = true;
            const randomizeNotAnArray = () => randomizeArray( startArray );
            expect( randomizeNotAnArray ).toThrow();
        });
            
});

