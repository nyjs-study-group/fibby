


// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,
export const fibonacci = ( count ) => { 
    if (count <= 1) return 1;
  
    return fibonacci(count - 1) + fibonacci(count - 2);
}


export const fibonacciWhile = (count) => {
    let a = 1;
    let b = 0; 
    let temp;
  
    while (count >= 0){
      temp = a;
      a = a + b;
      b = temp;
      count--;
    }
  
    return b;
  }


export const fibonacciSeries = ( count ) => { 
    let i = 0; 
    const series = []; 
    for (; i !== count; i++ ){ 
    //caching the iterator by removing redundancy of visiting "0" 
    series[i] = fibonacci(i) 
    } 
    return series 
}


export const fibonacciSeriesWhile = ( count ) => { 
    let i = 0; 
    const series = []; 
    for (; i !== count; i++ ){ 
    //caching the iterator by removing redundancy of visiting "0" 
    series[i] = fibonacciWhile(i) 
    } 
    return series 
}