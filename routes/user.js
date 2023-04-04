import { Router } from "express";
import { usersDelete, usersGet, usersPost, usersPut } from "../controllers/user.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { mailExists, roleValid, userIdExists } from "../helpers/db-validators.js";


const router = Router();

router.get('/', usersGet); 
router.put('/:id', [
    check("id", "Invalid ID").isMongoId(),
    check("id").custom(userIdExists),
    check("role").custom(roleValid),
    validarCampos
] , usersPut);
router.post('/', [
    check("name", "Name is required").not().isEmpty(),
    check("mail").custom(mailExists),
    check("pass", "Password required. Min length 6").isLength({min: 6}),
    check("role").custom(roleValid),
    validarCampos
] ,usersPost);
router.delete('/:id', [
    check("id", "Invalid ID").isMongoId(),
    check("id").custom(userIdExists),
    validarCampos
], usersDelete);


export {
    router
}