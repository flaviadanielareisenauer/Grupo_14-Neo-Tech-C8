module.exports = (sequelize, dataTypes) => {

    const alias = "User";

    const cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        firstName: {
            type: dataTypes.STRING(40),
            allowNull: true
        },
        lastName: {
            type: dataTypes.STRING(40),
            allowNull: true
        },
        email: {
            type: dataTypes.STRING(40),
            allowNull: true
        },
        password: {
            type: dataTypes.STRING(75),
            allowNull: true
        },
        dni: {
            type: dataTypes.STRING(20)
        },
        numberPhone: {
            type: dataTypes.INTEGER(20)
        },
        location: {
            type: dataTypes.STRING(60)
        },
        rol: {
            type: dataTypes.INTEGER(2),
            allowNull: true
        },
        avatar: {
            type: dataTypes.STRING(60)
        }
    };

    const config = {
        tableName: "users",
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = models => {
        User.hasMany(models.Address, {
            as: "addresses",
            foreignKey: "userId"
        })
    }
    return User

}