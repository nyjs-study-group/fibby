import { whiteLiesData } from "../data/whitelies.data";

export const getRandomWhiteLie = ( whiteLies ) => { 
    const randomIndex = 
        Math.floor( Math.random() * whiteLies.length );

    return whiteLies[ randomIndex ];
}

export const getRandomWhiteLiesList = ( whiteLies, count ) => { 
    const whiteLiesList = [];

    let i = 0;
    for ( ; i !== count; i++ ) { 
        whiteLiesList[ i ] = getRandomWhiteLie( whiteLies );
    }
    return whiteLiesList;
}

export const getRandomUniqueLies = ( whiteLiesData, count ) => {

    const indexes = range( 0, whiteLiesData.length );
    // [ 0, 1, 2, 3, ... 9 ];
    
    const randomIndexes = randomizeArray( indexes ).slice( 0, count );
    // [ 9, 5, 2 ... ]
    // [ 9, 5, 2 ]

    const randomUniqueLies = [];
    let i = 0;
    let randomIndexCount = randomIndexes.length
    for ( ; i !== randomIndexCount; i++ ) { 
        const index = randomIndex[ i ]; // 9;
        randomUniqueLies[ i ] = whiteLiesData[ randomIndex[ i ] ]
    }
    return getRandomUniqueLies;
}