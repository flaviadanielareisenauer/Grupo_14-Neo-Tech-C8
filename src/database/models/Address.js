module.exports = (sequelize, dataTypes) => {
  let alias = "Address";
  let cols = {
    id: {
      type: dataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    streetName: {
      type: dataTypes.STRING(60),
    },
    streetNumber: {
      type: dataTypes.INTEGER(60),
    },
    dto: {
      type: dataTypes.STRING(11),
    },
    postalCode: {
      type: dataTypes.INTEGER(20),
    },
    province: {
      type: dataTypes.STRING(60),
    },
    userId: {
      type: dataTypes.INTEGER(10),
      allowNull: false,
    },
  };

  let config = {
    tableName: "addresses",
    timestamps: false,
  };

  const Address = sequelize.define(alias, cols, config);

  Address.associate = (models) => {
    Address.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    });
  };

  return Address;
};
