const convertToCelsius = function(Fahrenheit) {
  let result=(Fahrenheit-32)*(5/9);
  if(result%1!==0){
    return parseFloat(result.toFixed(1));
  }else{
    return result;
  }
};

const convertToFahrenheit = function(Celcius) {
  let result=Celcius*(9/5)+32;
  if(result%1!==0){
    return parseFloat(result.toFixed(1));
  }else{
    return result;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
