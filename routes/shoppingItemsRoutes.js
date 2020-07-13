const mongoose = require('mongoose');
const ShoppingItem = mongoose.model('shoppingItems');

module.exports = (app) => {

    app.get('/api/shoppingItems', async (req, res) => {
        const shoppingList = await ShoppingItem.find({ _user: req.user.id });
        res.send(shoppingList);
    });


    app.post('/api/shoppingItem/create', async (req, res) => {
        const  {shoppingItemName, shoppingItemQuantity } = req.body;

        // New Shopping Item
        const shoppingItem = new ShoppingItem({
            item: shoppingItemName,
            quantity: shoppingItemQuantity,
            _user: req.user.id,
        });
        await shoppingItem.save();
        res.send(req.user);
    });
};