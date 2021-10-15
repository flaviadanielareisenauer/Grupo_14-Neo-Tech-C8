module.exports = (sequelize, dataTypes) => {

    const alias = "CategoryProducts";

    const cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        productId: {
            type: dataTypes.INTEGER(10),
            foreignKey: true,
            allowNull: true
        },
        categoryId: {
            type: dataTypes.INTEGER(10),
            foreignKey: true,
            allowNull: true
        }
    };

    const config = {
        tableName: "categoryproducts",
        timestamps: false
    };

    const CategoryProduct = sequelize.define(alias, cols, config);

    /*   CategoryProduct.associate = models => {
          CategoryProduct.belongsToMany(models.CategoryProducts, {
              as: "categoryproducts",
              foreignKey: "productId"
          })
      } */

    return CategoryProduct

}