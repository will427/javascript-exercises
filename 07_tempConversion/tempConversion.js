const convertToCelsius = function(farenheit) 
{
  let convertToCelsius =  (farenheit - 32) * (5/9);; 
  return Number(convertToCelsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) 
{
  let convertToFahren = (celsius * (9/5)) +32;
  return Number(convertToFahren.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
