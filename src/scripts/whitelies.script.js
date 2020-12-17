
import { whiteLiesData } from '../../data/whitelies.data';

import { 
    getRandomWhiteLie,
    getRandomWhiteLiesList,
 } from '../whitelies';

console.log( getRandomWhiteLie( whiteLiesData ) );

console.log( getRandomWhiteLiesList( whiteLiesData, 4 ));