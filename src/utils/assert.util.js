
export const assert = ( condition, message ) => { 
    if ( condition === false ) { 
        throw new Error( message );
    }
}