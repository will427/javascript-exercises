const reverseString = function(str) {
    // str.split("").reverse().join("")
    let arr = [];
    for(let i = 0; i < str.length; i++)
        {
            arr.push(str.charAt(str.length - (i+1)));
        }
    return arr.join("");  
};

// Do not edit below this line
module.exports = reverseString;
