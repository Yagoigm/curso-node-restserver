import { RoleModel } from "../models/role.js";
import { Usuario } from "../models/usuario.js";

const roleValid = async (role = "") => {
    const knownRole = await RoleModel.findOne({role});
    if(!knownRole){
        throw new Error(`Role ${role} doesn't exist in DB`)
    }
}

    //Validacion correo duplicado-valido
const mailExists = async (mail = "") => {
    const duplicateMail = await Usuario.findOne({mail});
    if (duplicateMail){
        throw new Error(`Mail ${mail} already exists in DB`)
    }
} 

const userIdExists = async (id) => {
    const userExists = await Usuario.findById(id);

    if (!userExists){
        throw new Error(`There is no user for ID ${id}`)
    }
} 


export {
    roleValid,
    mailExists,
    userIdExists
}