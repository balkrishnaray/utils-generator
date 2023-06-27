const express = require("express")
const router = express.Router();
const apiRouter = require("./routes.api");
const uiRouter = require("./routes.ui");


router.get("/",(req,res) =>{
    res.json({msg: "Hello from API"});
} );

module.exports = router;

