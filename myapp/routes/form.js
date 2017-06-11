var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
	var Num = +req.body.number;
	for (var i = 1; i < +req.body.number; i++) {
		Num *= i
	}
	res.json({ number: Num })
});

module.exports = router;
