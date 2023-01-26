import { response } from "express";
import User from "../models/User.js";

async function getUser(request, response) {
    const users = await User.find();
    return response.status(200).json(users);
}

async function createUser(request, response) {
    const user = request.body;
    const newUser = await User.create(user);
    response.status(201).json("Usuário criado!")
}

async function deleteUser(request, response) {
    const id = request.params.id;
    await User.findByIdAndDelete(id);
    response.status(200).json("Usuário deletado!");
}

export {getUser, createUser, deleteUser};