import { Schema, model } from "mongoose";

const RoleSchema = Schema({
    rol: {
        type: String,
        required: [true, "El rol es obligatorio"]
    }
})

const RoleModel = model("Role", RoleSchema)

export{
    RoleModel
}