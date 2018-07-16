
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/elderly")
mongoose.connection.on("connected", () => {
	console.log("connected")
});
mongoose.connection.on("error", (err) => {
	console.log(err, "mongoose failed to connect");
});
mongoose.connection.on("disconnected", () => {
	console.log("disconnected");
});
