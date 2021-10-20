module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: dataTypes.STRING(40),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(40),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(40),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING(75),
            allowNull: false
        },
        dni: {
            type: dataTypes.STRING(20)
        },
        numberPhone: {
            type: dataTypes.INTEGER(30)
        },
        location: {
            type: dataTypes.STRING(60)
        },
        rol: {
            type: dataTypes.INTEGER(2).UNSIGNED,
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(60)
        },
    }
    let config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = models => {
        User.hasMany(models.Address, {
            as: "addresses",
            foreignKey: "userId"
        })
    }

    return User;
}