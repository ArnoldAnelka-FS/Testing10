// const total =(array) => {
//     let total = 0;
//     for (let index in array) {
//         total+= array[index];
//     }
//     return total;
// }
// module.exports = total;




const obscureNumber = (creditCardNumber) => {
    if (creditCardNumber.length === 12) {
        const lastFourDigits = creditCardNumber.slice(-4); // Used to retrieve the last 4 digits
        let obscuredPart = '';
        
        // Used a for loop to obscure the first 8 digits
        for (let i = 0; i < 8; i++) {
            obscuredPart += 'X';
        }
        
        return obscuredPart + lastFourDigits;
    } else {
        return "Invalid Credit Card";
    }
};

module.exports = obscureNumber;





