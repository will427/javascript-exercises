const add = function(one, two) {
  return one + two;
};

const subtract = function (one, two) {
	return one - two;
};

const sum = function(arrayOfNumbers) {

  if(arrayOfNumbers.length === 0)
    {
      return 0;
    }else if(arrayOfNumbers.length === 1)
      {
        return arrayOfNumbers[0];
      }
    else
    {
      let counter = 0;
      let sum = 0;
      while(counter < arrayOfNumbers.length)
        {
          sum += arrayOfNumbers[counter];
          counter++;
        }
        return sum;
    }


};

const multiply = function(arrayOfNumbers) {

  let counter = 0;
  let result = 1;
      
      for (let  i= 0;  i< arrayOfNumbers.length; i++) 
      {
        let temporalMultiplication = result * arrayOfNumbers[i];
        result = temporalMultiplication;
      }
      return result;
};

const power = function(one, two) {
	return Math.pow(one,two);
};

const factorial = function(number)
{
	
  if(number === 0)
    {
      return 1;
    }
    else
    {
      let result = 1;
      for(let i = number; 1 <= i; i--)
        {
          let holder = result * i;
          result = holder;
        }
        return result;
    }

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
