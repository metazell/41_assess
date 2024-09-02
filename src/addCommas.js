function addCommas(num) {
    const numStr = num.toString();
    const [integerPart, decimalPart] = numStr.split('.');
    
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  }
  
  module.exports = addCommas;
  