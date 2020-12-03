


// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,
export const fibonacci = ( count ) => { 
    if (count <= 1) return 1;
  
    return fibonacci(count - 1) + fibonacci(count - 2);
}
