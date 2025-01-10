const sumAll = function(amount1, amount2) 
{
    let sum = 0;
    if(typeof amount1 === "object" || typeof amount1 === "string" || Number.isInteger(amount1) === false || amount1 < 0)
        {
            return "ERROR";
        }    
    else if(typeof amount2 === "object" || typeof amount2 === "string" || Number.isInteger(amount2) === false || amount2 < 0)
        {
            return "ERROR";
        }
    else if(amount1 < amount2)
        {
            let counter = amount1;
            while(counter <= amount2)
                {
                    sum += counter;
                    counter++;
                }
        }else
        {
            let counter = amount2;
            while(counter <= amount1)
                {
                    sum += counter;
                    counter++;
                }
        }
        return sum;
};

// Do not edit below this line
module.exports = sumAll;
