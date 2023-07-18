
import { userSchema } from "../../../db/models/user.model.js";
import { Op } from "sequelize";



//NOTE - 1 - sign up
export const signUP = async (req, res) => {
    const { name, email, age, password } = req.body;
    try {
        const user = await userSchema.create({ name, email, age, password });;
        res.json({ Message: "User Created Successfully.", user });
    }
    catch (err) {
        const Message = err.errors[0].message
        res.json({ Message });
    }

}

//NOTE - 2- sign in 
export const signIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await userSchema.findOne({
        where: {
            email,
            password
        }
    });

    user ? res.status(200).json({ Message: "User Founded" }) : res.status(400).json({ Message: "User Not Founded" })

}
//NOTE - 3-update user 
export const updateUser = async (req, res) => {
    const { name, email, age, password } = req.body;
    const updatedUser = await userSchema.update({ name, email, age, password }, {
        where: {
            email
        }
    });


    updatedUser[0] ? res.status(200).json({ Message: "User Updated Successfully.", updatedUser }) : res.status(400).json({ Message: "User Not Found .", updatedUser });


};


//NOTE - 4- delete user
export const deleteUser = async (req, res) => {
    const { email, password } = req.body;
    const deletedUser = await userSchema.destroy({
        where: {
            email,
            password
        }
    });
    deletedUser ? res.status(200).json({ Message: "User Deleted" }) : res.status(400).json({ Message: "User Not Found " })
};

//NOTE - 5- search for user where his name start with "a" and age less than 30 => using like for characters

export const searchUsersByNameAndAge = async (req, res) => {
    const user = await userSchema.findAll({
        where: {
            name: {
                [Op.startsWith]: 'a'
            },
            age: {
                [Op.lt]: 30
            },
        }
    });

    user ? res.status(200).json({ Message: "User Founded", user }) : res.status(400).json({ Message: "User Not Founded", user });
}

//NOTE - 6- search for user where his age is between 20 and 30 
export const searchBetween = async (req, res) => {
    const user = await userSchema.findAll({
        where: {

            age: {
                [Op.between]: [20, 30]
            },
        }
    });

    user ? res.status(200).json({ Message: "User Founded", user }) : res.status(400).json({ Message: "User Not Founded", user });
}


//NOTE - 7 - get the 3 oldest users
export const getThreeOldestUser = async (req, res) => {
    const user = await userSchema.findAll({

    });

    user.sort((a, b) => b.age - a.age)
    const sortedUsers = user.filter((user, index) => {
        return index !== 2;
    })
    user ? res.status(200).json({ Message: "User Founded", sortedUsers }) : res.status(400).json({ Message: "User Not Founded", sortedUsers });
}


//NOTE - 8- search for users by list of ids => using IN
export const listOfIds = async (req, res) => {
    const user = await userSchema.findAll({
        where: {
            id: {
                [Op.in]: [1, 2, 3, 4, 5, 6],
            }
        }
    });



    user ? res.status(200).json({ Message: "User Founded", user }) : res.status(400).json({ Message: "User Not Founded", user });
}

//NOTE - 9- get all user getAllUsers
export const getAllUsers = async (req, res) => {

    const users = await userSchema.findAll();
    res.json({ Message: "Done", users })
}