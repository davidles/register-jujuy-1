const data = require('../data/dataUsers.json'); // Parseado ->  JS

const validateAdmin = ( req, res, next ) =>{
    
    const user = req.query.user;

    const searchAdmin = data.find( admin => admin.name === user)

    if(searchAdmin){
        next()
    }else{
        res.send('No tienes los privilegios para ingresar');
    }
    

}

module.exports = validateAdmin;