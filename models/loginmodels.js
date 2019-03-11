const db = require('../config/mysql');


const findByUsername = username => {
    return new Promise ((resolve, reject) => {
        db.query(
            "Select * from usuarios where nombre = '"
            +username
            +"'", 
            (err, results, fields) => {
                if (err) reject(err);
                resolve(results);
            });
    
    });
}


module.exports = {
    findByUsername
}