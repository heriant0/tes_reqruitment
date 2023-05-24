const { checkPassword, hashPassword } = require("../helper/bcrypt");
const { encode } = require("../helper/jwt");
const User = require("../models/userModel")

const UserServices = {

    register: async(firstName, lastName, email, password, role) => {
        try {
            const newUser = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashPassword(password),
                role: role
            }
            return await User.create(newUser);
        } catch (e) {
            throw new Error(e)
        }
    },

    login: async(password, userData) => {
        try {
            if (checkPassword(password, userData.password)) {
                const token = encode({
                    id: userData.userId,
                    email: userData.email
                })
                return token;
            } else return null;
        } catch (e) {
            throw new Error(e);
        }
    },
    
    validateEmail: async(email)  => {
        try {
            checkEmail = await User.findOne({where : {email: email}})
            if (checkEmail) {
                throw new Error('email already exist')
            }

            return checkEmail;
        } catch (e) {
            throw new Error(e)
        }
    },
    
    getUser: async(email)  => {
        try {
            const user = await User.findOne({where : {email: email}})
            if (!user) {
                throw new Error('email does not exist')
            }
            return user;

        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = UserServices