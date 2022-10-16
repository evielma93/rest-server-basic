
const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const query = req.query;
    res.json({
        msg: 'API GET - CONTROLLER',
        query: query
    });
}

const usuariosPut = (req, res = response) => {

    let id = req.params.id
    res.json({
        msg: 'API GET - CONTROLLER',
        id : id
    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body
    res.json({
        msg: 'API post - CONTROLLER',
        body:body
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'API post - CONTROLLER',
        body:body
    });
}


const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'API post - CONTROLLER'
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}