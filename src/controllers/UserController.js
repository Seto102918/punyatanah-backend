
exports.registerNewUser = async (req, res, next) => {
    const db = require("../database/connection");

    console.log(req.body)
    const { full_name, username, date_of_birth, phone, email, password, image } = req.body;
    if (!full_name || !username || !email || !password ||!phone ||!date_of_birth) {
        res.status(400).send("Please provide all required information.");
        return;
    }

    const user = await db.user.findOne({ where: { email } });
    if (user) {
        res.status(400).send("The email address already exists.");
        return;
    }

    const newUser = await db.user.create({
        full_name, username, date_of_birth, phone, email, password, image
    });

    res.status(201).send({
        username
    });
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).send("Please provide all required information.");
        return;
    }

    const user = await db.users.findOne({ where: { email } });
    if (!user) {
        res.status(401).send("The user does not exist.");
        return;
    }

    if (user.password !== password) {
        res.status(401).send("The password is incorrect.");
        return;
    }

    const token = await user.generateAuthToken();

    res.status(200).send({
        user,
        token,
    });
}