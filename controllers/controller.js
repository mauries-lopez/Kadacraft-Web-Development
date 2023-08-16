const controller = {

    getIndex: function (req, res) {
        res.render('index');
    },

    getWorld: function (req, res) {
        res.render('world');
    },

    getProfile: function (req, res){

        var channelName = req.query.channelName;
        var channelID = req.query.channelID;

        res.render('profile', {channelName: channelName, channelID: channelID});
    },

    getError: function (req, res) {
        res.render('error');
    }

}

module.exports = controller;