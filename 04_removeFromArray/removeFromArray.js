const removeFromArray = function(arr1, ...another) {

    let newArray = [];
    for (const element of arr1) 
    {
        if(another.includes(element))
            {

            }else
            {
                newArray.push(element);
            } 
    }
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
