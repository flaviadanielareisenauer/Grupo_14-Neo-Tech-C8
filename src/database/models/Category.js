module.exports = (sequelize, dataTypes) => {
  const alias = "Categories";

  const cols = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    name: {
      type: dataTypes.STRING(60),
      allowNull: true,
    },
  };

  const config = {
    tableName: "categories",
    timestamps: false,
  };

  const Category = sequelize.define(alias, cols, config);

  Category.associate = (models) => {
    Category.hasMany(models.Products, {
      as: "products",
      foreignKey: "categoryId",
    });
  };

  return Category;
};
