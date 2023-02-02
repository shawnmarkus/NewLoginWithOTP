const express = require("express");
const dotenv = require("dotenv");
const route = require("./route/routes");
const cookieParser = require("cookie-parser");

//for the non sharable data
dotenv.config({ path: "./config.env" });

//connect db
require("./db/dbconnect");

//creating app
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(route);

//PORT
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening at port ${PORT}`));
