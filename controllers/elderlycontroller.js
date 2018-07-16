const express = require("express");
const router = express.Router();
const Elderly = require("../models/elderly.js")
router.get("/", (req, res) => {
	Elderly.find({}, (err, allElderly) => {
		if(err) {
			res.send(err);
		} else {
			res.render("index.ejs",{elderly: allElderly});
		}
	})
});
router.post("/", (req, res) => {
	Elderly.create(req.body, (err, createdElderly) => {//
		if(err) {
			console.log(err)
			res.send(err);
		} else {
				res.redirect("/grandparent");
		}
	})
});
router.get("/new", (req, res) => {
	res.render("new.ejs")
});

router.delete("/:id", (req,res) => {
	Elderly.findByIdAndRemove(req.params.id, (err, foundElderly) => {
		if (err) {
			res.send(err);
		} else {
			res.redirect("/grandparent");
		}
	})
	
	
})
router.get("/:id/edit", (req, res) => {
	Elderly.findById(req.params.id, (err, foundElderly) => {
			if(err) {
				res.send(err)
			} else {
				res.render("edit.ejs",{
			elderly: foundElderly})

		
		
			}
			

	})

})
router.get("/:id", (req, res) => {
	Elderly.findById(req.params.id, (err, foundElderly) => {
			if(err) {
				res.send(err)
			} else {
				res.render("show.ejs",{
			elderly: foundElderly})

		
		
			}
			

	})

});

router.put("/:id", (req, res) => {
	console.log("i am hitting this route")
	Elderly.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedElderly) => {
			if(err) {
				res.send(err)
			} else {
				res.redirect("/grandparent");
			}

	})

})







module.exports = router;