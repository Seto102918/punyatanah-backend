export class UserGetController {

}

export class UserPostController {
    static async RegisterNewUser(req, res, next){
        const body = res.body;
        const { QueryTypes } = require('sequelize');
        const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });
    }
}