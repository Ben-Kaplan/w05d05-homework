const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
require("./db/db");
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));
const elderlyController = require("./controllers/elderlycontroller")
app.use('/grandparent', elderlyController);



app.listen(3000, () => {
	console.log("howdy cowboy");
});