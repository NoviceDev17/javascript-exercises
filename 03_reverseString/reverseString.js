const reverseString = function(string) {
    const arr=Array.from(string);
    const reversedArr=[];
    for(i=arr.length-1;i>=0;i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
