const UserService = require('../services/userService')
const UserController = {

    userRegister: async(req, res, next) => {
        try {
            const {firstName, lastName, email, password, role} = req.body
            validateEmail = await UserService.validateEmail(email)

            if (validateEmail) {
                throw {
                    statusCode: 400,
                    name: "CustomValidation",
                    message: "email already exists"
                }
            } else {
                const data = await UserService.register(firstName, lastName, email, password, role)
                if (data) return res.status(201).json(data)
            }
        } catch (e) {
            next(e)
        }
    },

    userLogin: async(req, res, next) => {
        try {
            const { email, password } = req.body;
            const userData = await UserService.getUser(email)
            if (!userData) {
                throw {
                    statusCode: 400,
                    name: "CustomValidation",
                    message: "email or password incorrect"
                }
            } else {
                const result = await UserService.login(password, userData)
                if (result) {
                    return res.status(200).json({ 
                        access_token: result, 
                        email: userData.email })
                } else {
                    throw {
                        statusCode: 400,
                        name: "CustomValidation",
                        message: "email or password incorrect"
                    }
                }
            }
        } catch (e) {
            next(e) ;
        }
    }
}

module.exports = UserController;

