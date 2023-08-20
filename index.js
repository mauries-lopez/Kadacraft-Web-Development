const express = require('express');

const hbs = require('hbs');

const routes = require('./routes/routes.js');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');

app.use(express.json());

app.use(express.urlencoded({extended: true}));

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('nFormatter', function(num, digits) {
    if (num < 0) return num;
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
});

app.use(express.static('public'));

app.use('/', routes);

app.use(function (req, res) {
    res.render('error');
});

app.listen(port, function () {
    console.log('app listening at port ' + port);
});