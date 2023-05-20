const db = require("../database/connection");
const { Op } = require("sequelize");

exports.getListTanah = async (req, res, next) => {
    const filter = req.query;
    // const attributesChosen = ["title", "size", "price", "regency.province_name", "regency.regency_name", "user.full_name"];
    console.log('filter', filter);

    db.regency.hasMany(db.tanah, {foreignKey: 'id_regency'})
    db.tanah.belongsTo(db.regency, {foreignKey: 'id_regency'})

    db.user.hasMany(db.tanah, {foreignKey: 'id_user'})
    db.tanah.belongsTo(db.user, {foreignKey: 'id_user'})
    
    let whereFilter = {}
    let listTanah = [];

    console.log()

    if (filter == {}) {
        let listTanah = await db.tanah.findAll({
            // attributes: attributesChosen,
            include: [
                {
                    model: db.regency,
                    required: false
                },
                {
                    model: db.user,
                    required: false
                }
            ]
        });
        res.json(listTanah);
        return;
    }else if(filter['title']) {
        listTanah = await db.tanah.findAll({
            where: {
              title: {
                $like: filter['title'],
              },
            },
            // attributes: attributesChosen,
            include: [
                {
                    model: db.regency,
                    required: false
                },
                {
                    model: db.user,
                    required: false
                }
            ]
        });
    } else {
        if(filter['id_province']) whereFilter['id_province'] = filter['id_province'];
        if(filter['id_regency']) whereFilter['id_regency'] = filter['id_regency'];

        //certifikat
        if(filter['certificate']) whereFilter['certificate'] = [filter['certificate']];
        
        //harga
        if(filter['min_price']) whereFilter['price'] = {
            [Op.gte]: filter['min_price'],
        };
        if(filter['max_price']) whereFilter['max_price'] = {
            [Op.lte]: filter['max_price'],
        };
        
        //luas
        if(filter['min_size']) whereFilter['size'] = {
            [Op.gte]: parseInt(filter['min_size']),
        };
        if(filter['max_size']) whereFilter['size'] = {
            [Op.lte]: filter['max_size'],
        };

        listTanah = await db.tanah.findAll({
            where: whereFilter,
            // attributes: attributesChosen,
            include: [
                {
                    model: db.regency,
                    required: false
                },
                {
                    model: db.user,
                    required: false
                }
            ]
        });
    }

    res.json(listTanah);
}