import { Router } from "express";
import {adminDemo} from "../controllers/admin.controller.js"
const routes = new Router();

///api/
routes.get("/",adminDemo)//api





export default routes;