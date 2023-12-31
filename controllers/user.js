import { response, request } from 'express';



const getUsers = (req, res = response) => {

    const {q, nombre, apikey} = req.query;
    
    res.json({
        msg:'get API - controller',
        q,
        nombre,
        apikey
    });
}

const putUser = (req, res = response) => {

    const { id } = req.params;
    
    res.status(500).json({
        msg:'put API - controller',
        id
    });
}

const postUser = (req, res = response) => {
    const {nombre, edad} = req.body;
    
    
    res.status(201).json({
        msg:'post API - controller',
        nombre,
        edad
    });
}

const deleteUser = (req, res = response) => {
    res.json({
        msg:'delete API - controller'
    });
}

const patchUser = (req, res = response) => {
    res.json({
        msg:'patch API - controller'
    });
}

export {
    getUsers,
    putUser,
    postUser,
    deleteUser,
    patchUser
}