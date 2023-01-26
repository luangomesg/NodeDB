import { Router } from "express";
import { getUser, createUser, deleteUser } from "./controllers/UserController.js";

const routes = Router();

routes.get("/users", getUser);
routes.post("/users", createUser);
routes.delete("/users/:id", deleteUser);


export default routes;

