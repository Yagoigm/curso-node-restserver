import { response} from "express";
import  bcryptjs  from "bcryptjs";
import { Usuario } from "../models/usuario.js";


const usersGet = async (req, res = response) => {
    
    const { limit = 5, start = 0 } = req.query
    const activeState = {state: true}
    
    const [userCount, users] = await Promise.all([
        Usuario.countDocuments(activeState),
        Usuario.find(activeState)
            .skip(Number(start))
            .limit(Number(limit))
    ])

    res.json({
        userCount,
        users
    })
}

const usersPost = async (req, res = response) => {
    const {name, mail, pass, role} = req.body;
    const usuario = new Usuario( {name, mail, pass, role} );

    //Encriptar pass
    const salt = bcryptjs.genSaltSync();
    usuario.pass = bcryptjs.hashSync(pass, salt)

    await usuario.save();

    res.json({
        usuario
    })
}

const usersPut = async (req, res = response) => {

    const { id } = req.params;
    const { _id, pass, google, ...rest } = req.body;

    if ( pass ) {
        const salt = bcryptjs.genSaltSync();
        rest.pass = bcryptjs.hashSync(pass, salt)
    }

    const user = await Usuario.findByIdAndUpdate( id, rest )

    res.json({
        user
    })
}

const usersDelete = async (req, res = response) => {

    const {id} =req.params;
    //const user = await Usuario.findByIdAndDelete(id);

    const user = await Usuario.findByIdAndUpdate(id, {state: false});

    res.json({
        user
    })
}


export {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}