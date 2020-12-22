import { rangeFinder } from '../arrayUtils/utils';

describe(
    `Tests of the range finder that is to emulate that found in python`,
    () => {
    beforeEach( () => { 
    });

    const range = rangeFinder;
    
    test( `Can it work to make a range of 10 with a single argument`,
    () => {
        const expectedResult = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        const result = range( 10 );
        expect( result ).toEqual( expectedResult );
    });

    test( `Can it make a range from 5 to 15`,
    () => {
        const expectedResult = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const result = range( 5, 15 );
        expect( result ).toEqual( expectedResult );
    });

    test( `Can it make a range from 5 to 30, with steps of 5`,
    () => {
        const expectedResult = [5, 10, 15, 20, 25 ]
        const result = range( 5, 30, 5 );
        expect( result ).toEqual( expectedResult );
    });
        
});    
        
