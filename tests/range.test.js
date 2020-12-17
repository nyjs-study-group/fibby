
// import { range } from './src/array.methods';

const range = () => true;

describe(
    `Tests of the python-like range function`,
    () => { 

        beforeEach( () => { 

        });

        test(`Can it work to make a range of 10 items with only 
          one argument`,
          () => {
              const expectedResult = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
              const result = range( 10 );
              expect( result ).toEqual( expectedResult );
          }
        );

        test(`Can it make a range from 5 to 14`,
            () => { 
              const expectedResult = [ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];
              const result = range( 5, 14 );
              expect( result ).toEqual( expectedResult );
            }
        );

        test(`Can it make range from 0 to 20, with increment of 2`,
            () => { 
              const expectedResult = [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 ];
              const result = range( 0, 20, 2 );
              expect( result ).toEqual( expectedResult );
            }
        );

        test(`it should throw an error if no arguments are passed`,
           () => { 
             const callRange = () => range();
             expect( callRange ).toThrow();
            }
        );

    }
);