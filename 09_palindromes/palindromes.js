const palindromes = function (str) {
    let lowerCaseString = str.toLowerCase();
    let noWhiteSpacesString = lowerCaseString.replaceAll(" ", "");
    let handlePunctuation = noWhiteSpacesString.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"");
    let backwardsString = handlePunctuation.split("").reverse().join("");

    if(handlePunctuation === backwardsString)
    {
        return true;
    }else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
