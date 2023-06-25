const express = require("express")
const router = express.Router();

router.get("/",(req,res) =>{
    res.send({msg: "Hello from UI"});
} );

router.get("/converter/:currency1/:currency2/:value", async (req,res) => {
    const {currency1,currency2,value} = req.params;
    const CC = require('currency-converter-lt')
let currencyConverter = new CC({from:"currency1", to:"currency2", amount:Number(value)});


    //pute the code form prev exercise
    //pass the value as variable in the code
    //soter the result in  a variable called result 
    const result = await currencyConverter.convert();
    res.send(` Currency of ${currency1} into ${currency2} is ${result}`);
});



module.exports = router;