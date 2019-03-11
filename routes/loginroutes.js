var express = require('express');
var router = express.Router();
const loginController = require("../controllers/logincontroller");
const token = require('../util/token');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Loguéate' });
});
router.post('/', loginController.loginWithPost);

router.post('/:token/', token.verifyParam, function (req,res){
  console.log("ruta validada");
  res.render('index', { title: 'Tic tac' });
});

module.exports = router;
