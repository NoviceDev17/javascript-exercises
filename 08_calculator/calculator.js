const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return (a-b);
};

const sum = function(arr) {
	let sum=0;
  for(number of arr){
    sum+=number;
  }
  return sum;
};

const multiply = function(arr) {
  let result=0;
  for(i=0;i<arr.length;i++){
    if(i===0){
      result+=arr[i];
    }else{
      result*=arr[i];
    }
  }
  return result;
};

const power = function(a,b) {
	result=1;
  for(i=0;i<b;i++){
    result*=a;
  }
  return result;
};

const factorial = function(a) {
  result=1;
	for(i=1;i<=a;i++){
    result*=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
