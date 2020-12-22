
export const rangeFinder = 
    ( start, stop, inc = 1) => {

    if ( start === undefined ) { 
        throw new Error('Invalid arguments for a range');
    }

    if ( stop === undefined ) { 
        stop = start;
        start = 0;
    }

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