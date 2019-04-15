const User = require("../models/User")

class UserController {
    async store(req, res){
        const user = await User.create(req.body)

        return res.json(user)
    }

    async list(req, res){
        const users = await User.find()

        return res.json(users)
    }

    async findById(req, res) {
        const user = await User.findById(req.params.id)

        return res.json(user)
    }
}

module.exports = new UserController();