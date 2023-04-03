import {request, response} from "express";

const usersGet = (req, res = response) => {

    const {q, nombre, apiKey = "No key provided"}  = req.query;

    res.json({
        ok: true,
        msg: "get api",
        q,
        nombre,
        apiKey
    })
}

const usersPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        ok: true,
        msg: "post api",
        nombre,
        edad
    })
}

const usersPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: "put api",
        id
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: "delete api"
    })
}


export {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}