//main route folder
import { Router } from "express";
import userRoutes from "./user.route.js"
import adminRoutes from "./admin.route.js"
const routes = new Router();
//children routes
routes.use("/api/v1/user",userRoutes)
routes.use("/api/v1/admin",adminRoutes)






export default routes; 