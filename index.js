const express = require("express");
const app = express();
const morgan = require('morgan')
const ejs = require('ejs');

// app.get("/", (req, res) => {
//     res.send("Hello World");
// })
const indexRouter = require("./routes");
app.use(morgan("hello"));
app.use(cors());
app.use("/",indexRouter);

//setting up the third party middlewares
app.use(cors());

// app.use((req,res,next) => {
// console.log("Request Received at " +Date.now());
// next();
// })

app.listen(8000, () => {
    console.log("Server running on port 8000");
})