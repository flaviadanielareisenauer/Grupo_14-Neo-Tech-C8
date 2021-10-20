module.exports = (sequelize, dataTypes) => {

    const alias = "ProductsImage";

    const cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        productId: {
            type: dataTypes.INTEGER(10),
            allowNull: true
        }
    };

    const config = {
        tableName: "productsimage",
        timestamps: false
    };

    const ProductImage = sequelize.define(alias, cols, config);

    ProductImage.associate = models => {
        ProductImage.belongsTo(models.Products, {
            as: "products",
            foreignKey: "productId"
        })
    }


    return ProductImage

}