import express from "express";
const userRouter = express.Router();
import { userSchema } from "../../../db/models/user.model.js";
import { Op } from "sequelize";
import { signUP, signIn, updateUser, deleteUser, searchUsersByNameAndAge, searchBetween, getThreeOldestUser, listOfIds, getAllUsers } from "../controller/user.controller.js";


//NOTE - 1 - sign up
userRouter.post("/users", signUP);

//NOTE - 2- sign in 
userRouter.get("/users/login", signIn)

//NOTE - update user 
userRouter.put("/users/updateUser", updateUser);

//NOTE - 4- delete user
userRouter.delete("/users/deleteUser", deleteUser);

//NOTE - 5- search for user where his name start with "a" and age less than 30 => using like for characters
userRouter.get("/users/searchUsersByNameAndAge", searchUsersByNameAndAge);

//NOTE - 6- search for user where his age is between 20 and 30 
userRouter.get("/users/searchBetween", searchBetween);

//NOTE - 7 - get the 3 oldest users
userRouter.get("/users/getThreeOldestUser", getThreeOldestUser);

//NOTE - 8- search for users by list of ids => using IN
userRouter.get("/users/listOfIds", listOfIds);

//NOTE - 9- get all user getAllUsers
userRouter.get("/users", getAllUsers);


export default userRouter;