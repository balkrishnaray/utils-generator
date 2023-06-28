const express = require("express")
const router = express.Router();
const apiRouter = require("./routes.api");
const uiRouter = require("./routes.ui");


router.get("/",(req,res) =>{
    try{
        res.json({msg: "Hello from API"});

    }
    catch(err){
        next(err);
    }
} );

module.exports = router;

