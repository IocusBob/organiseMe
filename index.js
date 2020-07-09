var express = require("express");
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport')
const keys = require('./config/keys');

require('./models/User');
require('./models/ShoppingItems');

require('./services/passport');

var app = express();
mongoose.connect(keys.mongoURI)

app.use(bodyParser.json())

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app);
require('./routes/shoppingItemsRoutes')(app);

const PORT = process.env.PORT || 8000
app.listen(PORT);