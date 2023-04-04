import { Schema, model } from "mongoose";

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    mail: {
        type: String,
        required: [true, "El mail es obligatorio"],
        unique: true
    },
    pass: {
        type: String,
        required: [true, "La contraseña es obligatoria"]
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: ["ADMIN_ROLE", "USER_ROLE"]
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
})

UsuarioSchema.methods.toJSON = function() {
    const {__v, pass, ...user} = this.toObject();
    return user;
}

const Usuario = model('Usuario', UsuarioSchema)


export{
    Usuario
}