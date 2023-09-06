
const mainController = {
    /* Metodos */

    index: (req, res) =>{
        res.render('index')
    },

    users: (req,  res) =>{
        res.send('Usuarios registrados')
    }
}


module.exports = mainController;