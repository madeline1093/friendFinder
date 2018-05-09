let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let app = express();

let PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});