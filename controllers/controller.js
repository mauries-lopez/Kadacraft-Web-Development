const controller = {

    getIndex: function (req, res) {
        res.render('index');
    },

    getWorld: function (req, res) {
        res.render('world');
    },

    getProfile: function (req, res){

        var channelID = req.query.channelID;

        res.render('profile', {channelID: channelID});
    },

    getError: function (req, res) {
        res.render('error');
    }

}

module.exports = controller;