describe(
    `Tests of the python`,
    () => {
        beforeEach( () => {

        
        () => {
            test( `Can it work to make a range of 10 with a single argument`,
            () => {
                const expectedResult = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                const result = range( 10 );
                expectedResult( result ).toEqual( expectedResult );
            });

            test( `Can it make a range from 5 to 15`,
            () => {
                const expectedResult = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
                const result = range( 5, 14 );
                expectedResult( result ).toEqual( expectedResult );
            });    
        }
    });    
        
});