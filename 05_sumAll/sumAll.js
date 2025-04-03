const sumAll = function(a,b) {
    if(a<0||b<0){
        return "ERROR";
    }
    else if(a!==parseInt(a)||b!==parseInt(b)){
        return "ERROR";
    }
    let result=0;
    if(a<b){
        for(i=a;i<=b;i++){
            result+=i;
        }
    }else{
        for(i=b;i<=a;i++){
            result+=i;
        }
    }
    return result;
}   

// Do not edit below this line
module.exports = sumAll;
