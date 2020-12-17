const rangeFinder = (start, stop, inc = 1) => {
    let arrTwo = [];
    let i = start;
    for( ; i <= stop; i += inc) {
    arrTwo.push(i);
    }
    
    
     return arrTwo;
}


const aGo = rangeFinder(0, 20);

//BEFORE RANDOMIZATON 
// aGo.sort( ( a, b ) => a < b ? 1 : -1 );
aGo.sort( ( a, b ) => Math.random() > .5 ? 1 : -1 );



console.log(aGo);