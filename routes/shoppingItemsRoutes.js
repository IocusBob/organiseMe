const mongoose = require('mongoose');
const ShoppingItem = mongoose.model('shoppingItems');

module.exports = (app) => {

    app.get('/api/shoppingItems', async (req, res) => {
        const shoppingList = await ShoppingItem.find({ _user: req.user.id });
        res.send(shoppingList);
    });

    app.post('/api/shoppingItem/updateChecked', async (req, res) => {
        const {id, checked} = req.body
        await ShoppingItem.updateOne({ _id: id }, {checked});
        res.redirect('/api/shoppingItems');
    });


    app.post('/api/shoppingItem/create', async (req, res) => {
        const  {shoppingItemName, shoppingItemQuantity } = req.body;

        const shoppingItem = new ShoppingItem({
            item: shoppingItemName,
            quantity: shoppingItemQuantity,
            _user: req.user.id,
        });
        await shoppingItem.save();
        res.redirect('/api/shoppingItems');
    });

    app.post('/api/shoppingItems/delete', async (req, res) => {
        const {shoppingList} = req.body;
        const  itemsToDelete = shoppingList.map(shoppingItem => {
            return shoppingItem._id
        });
        ShoppingItem.deleteMany({
            _id: {
                $in: itemsToDelete
            }
        }, function(err, result){
            if(err){
                console.log(err)
            } else {
                console.log(result)
            }
        });
        res.redirect('/api/shoppingItems');
    });
};