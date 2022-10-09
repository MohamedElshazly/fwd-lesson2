import {sum, lgNum} from './utilities/mathOperations.js'; 
import { concat, cut3 } from './utilities/logicOperations.js';

const arrayOperationMod = (() => {
    let myModule = {}; 
    
    myModule.sum = (arr) => {
        return sum(arr);
    }

    myModule.lgNum = (arr) => {
        return lgNum(arr);
    }

    myModule.concat = (arr1, arr2) => {
        return concat(arr1, arr2); 
    }

    myModule.cut3 = (arr) => {
        return cut3(arr);
    }

    return myModule;

})();

console.log(arrayOperationMod.sum([1, 2, 3]));
console.log(arrayOperationMod.lgNum([1, 9, 3]));
console.log(arrayOperationMod.concat([1, 2, 3], [4, 5, 6]));
console.log(arrayOperationMod.cut3([1, 2, 3, 4, 5]));