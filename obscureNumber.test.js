// const total = require("./total");

// describe("Total Module tests", ()=>{
//     test("As a user I want to be able to get the total after submitting various prices", ()=>{
//         expect(total([2.5, 78.12, 12.89])).toEqual(93.51);
//     });
// });

const obscureNumber = require("./obscureNumber"); 

describe("obscureCreditCard Function tests", () => {
    it("should obscure a 12-digit credit card number, keeping the last 4 digits visible", () => {
        expect(obscureNumber("123456789012")).toEqual("XXXXXXXX9012");
    });

    it("should return 'Invalid Credit Card' for an invalid credit card number", () => {
        expect(obscureNumber("1234567890123")).toEqual("Invalid Credit Card");
    });
});

