const removeFromArray = function(arr, ...theArgs) {
    const arrOfArgs=[];
    for(const arg of theArgs){
        arrOfArgs.push(arg);
    }
    const returnArr=[];
    for(i=0;i<arr.length;i++){
        for(j=0;j<arrOfArgs.length;j++){
            if(arr[i]===arrOfArgs[j]){
                break;
            }else if(j===arrOfArgs.length-1){
                returnArr.push(arr[i])
            }
        }
    }
    return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
