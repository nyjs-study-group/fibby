


export const getRandomWhiteLie = (whiteLiesData) => {
    const randomIndex = Math.floor( Math.random() * whiteLiesData.length);

    return whiteLiesData[ randomIndex ];
}

export const getRandomWhiteLiesList = ( whiteLiesData, count ) => {
    const whiteLiesList = [];
    let i = 0;
    for ( ; i !== count; i++) {
        whiteLiesList[ i ] = getRandomWhiteLie( whiteLiesData );
    }
    return whiteLiesList;
}


export const getRandomUniqueWhiteLies = (whiteLiesData, count) => {
    const indexes = range( 0, whiteLiesData.length );
    const randomIndexes = randomizeArray( indexes );
    

    let i = 0;
    let randomIndexCount = randomIndexes.length
    const randomUniqueLies = [];
    for( ; i !== count; i++ ) {
        randomUniqueLies[ i ] = whiteLiesData[ randomIndex[ i ] ]
    }  
    return getRandomUniqueWhiteLies
}

// create an array and randomize it hint = range = (n) => [...Array(n).keys()]
// use slice(0, count)
//length should equal count





