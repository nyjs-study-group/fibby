
describe(
    `This is our first test runs`,
    () => { 

        test(`Lets see if one = 1`,
            () => { 
                expect( 1 ).toBe( 1 );
                expect( 1 ).toEqual( 1 );
                expect( 1 == "1" ).toBe( true );
                expect( 1 === "1" ).toEqual( true );
            }
        );
    }
);