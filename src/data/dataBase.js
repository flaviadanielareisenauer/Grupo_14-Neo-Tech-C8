const fs = require('fs');
const path = require('path');

module.exports = {
    products: JSON.parse(fs.readFileSync(path.join(__dirname, '/products.json'), "utf-8")),
    users: JSON.parse(fs.readFileSync(path.join(__dirname, '/user.json'), "utf-8")),
    writeJson: (dataBase) => {
        fs.writeFileSync(`./src/data/products.json`, JSON.stringify(dataBase), "utf-8")
    }
}