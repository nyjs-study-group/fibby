

export class FibbyMethods { 

    constructor() { 
        this.count = 10;
    }

    recursive( count = this.count ) { 
        if (count <= 1) return 1;
  
        this.tweetHello();
        return this.recursive(count - 1) 
            + this.recursive(count - 2);
    }

    tweetHello() { 
        console.log( 'hello');
    }

    while( count ) { 
        
    }
}


export class FibbyMethodsPlus extends FibbyMethods {

    constructor() { 
        super();
        this.reset();
    }

    reset() { 
        this.memoLog = {};
    }

    memo( count = this.count ) { 

        const { memoLog } = this;
    
        // check if count is already in stored value 
        if ( memoLog[count]) {
            return memoLog[count];
        }
        // base case 
        if (count <= 1 ) {
            return 1 ; 
        } 

        return memoLog[count] = 
            memoFibonacci(count - 1, memoLog) + memoFibonacci(count - 2, memoLog);
    }
}

const fibbyMethods = new FibbyMethods();
console.log( fibbyMethods.recursive( /* 10 */  ) );
fibbyMethods.count = 100;
console.log( fibbyMethods.recursive( /*100*/ ) );



class Person { 
    constructor( ) { 
        this.name = 'Fred';
        this.age = 22;
        this.username = 'fred@sonnet.com';
        this.password = 'asnoeuhsanoumjrc,.am';
    }
}




