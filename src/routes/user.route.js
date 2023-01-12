import { Router } from "express";
import {userDemo} from "../controllers/user.controller.js"
const routes = new Router();

///api/
routes.get("/",userDemo)//api





export default routes;