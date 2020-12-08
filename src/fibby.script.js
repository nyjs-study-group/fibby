import { 
    fibonacci, 
    fibonacciWhile, 
    fibonacciSeries, 
    fibonacciSeriesWhile
} from './fibby';

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,

const start = new Date();

// console.log(fibonacciSeries(60));
console.log(fibonacciSeriesWhile(1000));

const end = new Date();
console.log(end - start);
// const fibValue1 = fibonacci( 1 ); // 1
// const fibValue2 = fibonacci( 2 ); // 2
// const fibValue3 = fibonacci( 3 ); // 2
// const fibValue4 = fibonacci( 4 ); // 3
// const fibValue5 = fibonacci( 5 ); // 5
// const fibValue6 = fibonacci( 6 ); // 8
// const fibValue7 = fibonacci( 7 ); // 13
// // const fibValue100 = fibonacci( 80 );

// console.log( fibValue1 );
// console.log( fibValue2 );
// console.log( fibValue3 );
// console.log( fibValue4 );
// console.log( fibValue5 );
// console.log( fibValue6 );
// console.log( fibValue7 );
// console.log(' > > > > > ')
// // console.log( fibValue100 );
