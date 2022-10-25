const express = require("express");
const dotenv = require("dotenv");
// const route = require("./route/routes")

//for the non sharable data
dotenv.config({ path: "./config.env" });

//connect db 
require("./db/dbconnect");

//creating app
const app = express();

// app.use(route);
app.use(express.json());


//PORT
const PORT=process.env.PORT;

app.listen(PORT, () => console.log(`listening at port ${PORT}`));
