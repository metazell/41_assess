function addCommas(num) {
    // Convert the number to string to process
    const numStr = num.toString();
    
    // If there's a decimal part, split integer and decimal
    let [integerPart, decimalPart] = numStr.split('.');

    // Add commas to the integer part using regular expression
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // If there was a decimal part, concatenate it back
    return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}

module.exports = addCommas;
