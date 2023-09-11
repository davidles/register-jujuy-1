const adminController = {
    render: (req, res) =>{
        res.send(`Hola admin: ${req.query.user}`)
    },

    /** Perfil */
    profile: (req, res) =>{
        res.render('profile')
    },

    /*** Registrar usuario */
    formCreate: (req, res) =>{
        res.render('create')
    },

    createUser: (req, res) =>{
        res.redirect('/admin/profile')
    }
}

module.exports = adminController;