const repeatString = function(string,repeatNum) {
    if(repeatNum<0){
        return "ERROR";
    }
    let newString='';
    for(i=0;i<repeatNum;i++){
        newString+=string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
