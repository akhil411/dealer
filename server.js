const express = require("express");
const config = require("./config");

// set cors rules
var cors = require('cors');
var whitelist = config.whitelistUrl.split(' ');
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Internal Server Error'))
        }
    }
}

// Creating express app and configuring middleware
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (config.environment == 'production') {
    app.use(express.static("client/build"));
}

app.use(cors(corsOptions));
const PORT = config.PORT || 3001;

// Requiring our routes
const routes = require("./routes");
app.use(routes);

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
