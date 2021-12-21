import {Router} from "express";
import {usersController} from '../controllers/index.js'
import {checkUser} from "../middleware/index.js";

const route = Router()


route.get('/', checkUser,usersController.getAllUsers)

route.get('/:id',checkUser, usersController.getUserById)

export {route as usersRoutes}