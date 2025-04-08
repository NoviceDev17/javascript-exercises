const fibonacci = function(num) {
    if(num==0){
        return 0;
    }else if(num<0){
        return 'OOPS';
    }
    let firstNumber=0;
    let secondNumber=1;
    for(let i=1;i<num;i++){
        let current=firstNumber+secondNumber;
        firstNumber=secondNumber;
        secondNumber=current;
    }
    return secondNumber;
};

// Do not edit below this line
module.exports = fibonacci;
