const User = require("../models/userModel");

const authorization = async (req, res, next) => {
    try {
      const user = await User.findOne({ where: { userId: req.UserData.id } })
  
      if (!user) {
        throw {
          statusCode: 404,
          name: "CustomValidation",
          message: "Data not found"
        }
      }
  
      if (user.role === "admin") {
        next()
      } else {
        throw {
          statusCode: 403,
          name: "CustomValidation",
          message: 'Forbidden Access'
        }
  
      }
    } catch (e) {
      next(e)
    }
  }
  
  module.exports = authorization 