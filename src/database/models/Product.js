module.exports = (sequelize, dataTypes) => {
  const alias = "Products";

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
    description: {
      type: dataTypes.STRING(100),
    },
    discount: {
      type: dataTypes.INTEGER(11),
    },
    price: {
      type: dataTypes.INTEGER(11),
      allowNull: true,
    },
    color: {
      type: dataTypes.STRING(60),
    },
    code: {
      type: dataTypes.STRING(60),
    },
    categoryId: {
      type: dataTypes.INTEGER(11),
      allowNull: true,
    },
  };

  const config = {
    tableName: "products",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = (models) => {
    Product.belongsTo(models.Categories, {
      as: "categories",

      foreignKey: "categoryId",
    });

    Product.hasMany(models.ProductsImage, {
      as: "productsimage",
      foreignKey: "productId",
    });
  };

  return Product;
};
