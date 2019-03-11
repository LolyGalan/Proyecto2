const model = require("../models/loginmodels");
const crypt = require ("../util/crypt-util")
const token = require ('../util/token')

function loginWithPost (req, res) {
    model.findByUsername(req.body.uname)// 1 - buscar al usuario en la base de datos
    //buscamos en la base de datos el nombre que le hemos metido por formulario
    .then( result => {
      console.log("resultados " + result);
      if (result.length === 1) {
            var password = result[0].contraseña;
            var passwordQuePoneElUsuarioEnElFormulario = req.body.psw;
            var e = crypt.encrypt(passwordQuePoneElUsuarioEnElFormulario);
            console.log(e);
            if (password == e) { // 2 - comprobar su password
                res.render('privada', {
                  'message' : {text: 'logueado', type: 'info'},
                  'name': result[0].nombre ,
                   'username': result[0].telefono,
                  'token': token.buildToken(result[0].id)
                });// 3 - mandarlo a la página privada
              }
            else {
                res.render('login', {title: 'Contraseña incorrecta, loguéate de nuevo'});
            }
      } 
    })
    .catch( err => {
      console.log("el modelo dice que no puede " + err);
      res.render('error', err);
    })
}
 
module.exports = {
    loginWithPost
}