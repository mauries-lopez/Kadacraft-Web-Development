const fs = require('fs');

const CACHE_LIFESPAN = 3;

const controller = {

    getIndex: function (req, res) {
        let details = {
            videos: []
        };

        runFetch().then(async videosArray => {
            for (const videos of videosArray) {
                let video = videos.items[0];
                let channelName = checkChannelName(video.snippet.channelTitle);
                let videoId = video.snippet.resourceId.videoId;

                let viewsCount;
                let likesCount;
                let commentsCount;

                let videoStats = await fetchVideoStats(videoId);
                videoStats.items.forEach(video => {
                    viewsCount = video.statistics.viewCount;
                    likesCount = video.statistics.likeCount;
                    commentsCount = video.statistics.commentCount;
                })

                details.videos.push({
                    videoId: videoId,
                    videoThumbnail: video.snippet.thumbnails.high.url,
                    channelName: channelName,
                    videoTitle: video.snippet.title,
                    viewsCount: viewsCount,
                    likesCount: likesCount,
                    commentsCount: commentsCount
                });
            }
            res.render('index', details);
        });
    },

    getWorld: function (req, res) {
        res.render('world');
    },

    getProfile: function (req, res){

        var channelID = req.query.channelID;
        var channelName = req.query.channelName;

        let details = {
            videos: [],
            channelID: channelID,
            channelName: channelName
        };

        runProfileFetch(channelID).then(async videosArray => {

            for (const video of videosArray) {
                let channelName = checkChannelName(video.snippet.channelTitle);
                let videoId = video.snippet.resourceId.videoId;

                let viewsCount;
                let likesCount;
                let commentsCount;

                let videoStats = await fetchVideoStats(videoId);
                videoStats.items.forEach(video => {
                    viewsCount = video.statistics.viewCount;
                    likesCount = video.statistics.likeCount;
                    commentsCount = video.statistics.commentCount;
                });

                details.videos.push({
                    videoId: videoId,
                    videoThumbnail: video.snippet.thumbnails.high.url,
                    channelName: channelName,
                    videoTitle: video.snippet.title,
                    viewsCount: viewsCount,
                    likesCount: likesCount,
                    commentsCount: commentsCount
                });
            }
            res.render('profile', details);
        });

        
    },

    getError: function (req, res) {
        res.render('error');
    }

}


/*
    Main API : AIzaSyAlOrXuFx12OhKSYAyN1T9I8NSSns4Spxs
    Sub API : AIzaSyBZ0Cw4kmHvDBCE58v-pvsKy4jNe2uQAYY
*/

// For Profile Page (For all related to Profile, it uses 13 QUOTAS per person) (Call Steps: checkCache -> fetchProfileChannelVideos)
async function fetchProfileChannelVideos(channelID){
    const filePath = 'caches/channelProfileVideos-' + channelID + '.json';

    // Convert channelID to playlistID by changing ID prefix from "UC" (channelID) to "UU" (playlistID)
    const playlistID = channelID.substring(0, 1) + 'U' + channelID.substring(1 + 1);
    return await new Promise((resolve, reject) => {
        checkCache(CACHE_LIFESPAN, filePath, async function (isCacheExpired) {
            if (isCacheExpired || !fs.existsSync(filePath)) {
                let url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=" + playlistID + "&maxResults=10&key=AIzaSyBZ0Cw4kmHvDBCE58v-pvsKy4jNe2uQAYY";
                let response = await fetch(url);
                let data = await response.json();

                let cache = {
                    timestamp: Date.now() / 1000,
                    data: data
                };
                fs.writeFile(filePath, JSON.stringify(cache), (err) => {
                    if (err) throw err;
                });

                resolve(data);
            } else {
                fs.readFile(filePath, (err, data) => {
                    resolve(JSON.parse(data).data);
                });
            }
        });
    });
}

// For Home Page (For all related to Home, it uses 53 QUOTAS per page load) (Call Steps: checkCache -> fetchChannelVideos -> fetchPlaylistVideos -> fetchVideoStats )
async function fetchChannelVideos(){
    const filePath = 'caches/channelVideos.json';
    return await new Promise((resolve, reject) => {
        checkCache(CACHE_LIFESPAN, filePath, async function (isCacheExpired) {
            if (isCacheExpired || !fs.existsSync(filePath)) {
                let url = "https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCvYssWjD3EYiw02k9V2julg&id=UC8w7U97376AfqgbgChFQ0Rg&id=UC3Ir6UQsfdG_5LAebS47tPw&id=UCdfkfwLNSFcoxJfMUELsGFg&id=UCBNqKk9NyzpW1sbRZ2Iqrag&id=UC6tCdiWfn_fg69MM6xEJhlQ&id=UC_ftwy-jI7VRv4BkbSsCnuA&id=UClx91ILccyc0IpzqGZjwhpg&id=UCY-2sNc980SBE4WirNsW5kQ&id=UCY82vc2qc6OpJ2JIc84uwmw&id=UCH1ePS4jaQ_pKjCV3ZoWTNQ&id=UC3Sz8yjiQbQE9_Xq3wUTTog&id=UCOp3dnFJVrEtTtgVF56OeSg&id=UCnPHLZXBAH42XVJlcwTCLlA&id=UCmS4KnV7sX0l-VIyFhZ36yw&id=UCMjP3_mW1_uwgRiLHWj_DQg&id=UCSHb6WyycptSag5u22KQdXA&id=UCzW-TM_w4ntSKbzeT1lcwOQ&id=UChMoFQr8tEisoGXOhw3cdHg&id=UChDF2wRXgNq_RZX0UZrB7Mg&id=UCj9AedTtoCwMUFUDAK_STPQ&id=UC2ukXRx1LNiGayO_HQ_bKmA&id=UCSWIKRQ3S3CW7c3S6VPe63Q&id=UCng1BP8fhudP2WfI_JaJFZw&id=UCaC6Exn0uANeUJNqd0QggNw&id=UCIHLEsaC8fCu9EWhKJzLNCQ&maxResults=1&key=AIzaSyBZ0Cw4kmHvDBCE58v-pvsKy4jNe2uQAYY";
                let response = await fetch(url);
                let data = await response.json();

                let cache = {
                    timestamp: Date.now() / 1000,
                    data: data
                };
                fs.writeFile(filePath, JSON.stringify(cache), (err) => {
                    if (err) throw err;
                });

                resolve(data);
            } else {
                fs.readFile(filePath, (err, data) => {
                    resolve(JSON.parse(data).data);
                });
            }
        });
    });
}

// For Getting all videos from the upload playlist of each YouTube Channel
async function fetchPlaylistVideos(dataID, vidCount){
    const filePath = 'caches/playlistVideos-' + dataID + '.json';
    return await new Promise((resolve, reject) => {
        checkCache(CACHE_LIFESPAN, filePath, async function (isCacheExpired) {
            if (isCacheExpired || !fs.existsSync(filePath)) {
                let url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=" + vidCount + "&playlistId=" + dataID + "&key=AIzaSyBZ0Cw4kmHvDBCE58v-pvsKy4jNe2uQAYY";
                let response = await fetch(url);
                let video = await response.json();

                let cache = {
                    timestamp: Date.now() / 1000,
                    data: video
                };
                fs.writeFile(filePath, JSON.stringify(cache), (err) => {
                    if (err) throw err;
                });

                resolve(video);
            } else {
                fs.readFile(filePath, (err, data) => {
                    resolve(JSON.parse(data).data);
                });
            }
        });
    });
}

async function runFetch(){
    let channelVideos = await fetchChannelVideos();
    let videosArray = [];

    let fetchPromises = [];
    for (let i = 0; i < channelVideos.items.length; i++) {
        let playlistId = channelVideos.items[i].contentDetails.relatedPlaylists.uploads;
        let fetchPromise = fetchPlaylistVideos(playlistId,1);
        fetchPromises.push(fetchPromise);
    }

    videosArray = await Promise.all(fetchPromises);
    //Sort the videosArray by latest date
    videosArray.sort(function(a, b) {
        var dateA = new Date(a.items[0].snippet.publishedAt);
        var dateB = new Date(b.items[0].snippet.publishedAt);
        //If the dates are equal, sort by time
        if(dateA.getTime() == dateB.getTime()) {
            var timeA = new Date(a.items[0].snippet.publishedAt);
            var timeB = new Date(b.items[0].snippet.publishedAt);
            return timeB - timeA;
        }
        return dateB - dateA;
    });

    return videosArray;
}

async function runProfileFetch(channelID){
    let channelVideos = await fetchProfileChannelVideos(channelID);
    let videosArray = [];

    videosArray = channelVideos.items;
    //Sort the videosArray by latest date
    videosArray.sort(function(a, b) {
        var dateA = new Date(a.snippet.publishedAt);
        var dateB = new Date(b.snippet.publishedAt);
        //If the dates are equal, sort by time
        if(dateA.getTime() == dateB.getTime()) {
            var timeA = new Date(a.snippet.publishedAt);
            var timeB = new Date(b.snippet.publishedAt);
            return timeB - timeA;
        }
        return dateB - dateA;
    });

    return videosArray;

}

// Checking for caches
function checkCache(cacheLifespan, filePath, isCacheExpired) {
    // Convert from seconds to hours (1 hour = 3600 seconds)
    cacheLifespan *= 1800;

    // Check if 'caches' folder exists
    if (!fs.existsSync('caches')) {
        fs.mkdirSync('caches');
    }

    // Check if cache file is not found
    if (!fs.existsSync(filePath)) {
        isCacheExpired(true);
        return;
    }

    // If cache file is found:
    fs.readFile(filePath, function(err, data) {
        // Get saved timestamp from cache file
        let cacheTimestamp = JSON.parse(data).timestamp;
        let difference = Date.now() / 1000 - cacheTimestamp;
        isCacheExpired(difference >= cacheLifespan);
    });

}

// HELPER FUNCTIONS

// Helper Function for checking correct channel name
function checkChannelName(channelTitle){
    const channelNameMap = new Map();

    channelNameMap.set("Avery McIvory", "AveryMcIvory");
    channelNameMap.set("1O1O", "AZ1O1O");
    channelNameMap.set("StarserePlays", "Starsere");
    channelNameMap.set("Zeri Fae", "ZeriFae");
    channelNameMap.set("Kraftian PH", "KristianPH");
    channelNameMap.set("Edicius 8-bit", "Edicius8-Bit");
    channelNameMap.set("Ken Playz", "KenPlayz");
    channelNameMap.set("WITCH CARNELIAN", "WitchCarnelian");
    channelNameMap.set("Sthreed YT", "Sthreed");
    channelNameMap.set("JZ GRIT", "JZGrit");
    channelNameMap.set("maki kun", "MakiKun");
    channelNameMap.set("King FB", "KingFB");
    channelNameMap.set("Mc Hero", "McHero");
    channelNameMap.set("Ladysue Alberto", "LadySue");
    channelNameMap.set("kyahrye", "KyahRye");

    if (channelNameMap.has(channelTitle)) return channelNameMap.get(channelTitle);
    return channelTitle;
}

// Helper Function for getting likes, views, and comments counts
async function fetchVideoStats(videoID){
    const filePath = 'caches/videoStats' + videoID + '.json';
    return await new Promise((resolve, reject) => {
        checkCache(CACHE_LIFESPAN, filePath, async function (isCacheExpired) {
            if (isCacheExpired || !fs.existsSync(filePath)) {
                let url = "https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=" + videoID + "&key=AIzaSyBZ0Cw4kmHvDBCE58v-pvsKy4jNe2uQAYY";
                let response = await fetch(url);
                let data = await response.json();

                let cache = {
                    timestamp: Date.now() / 1000,
                    data: data
                };
                fs.writeFile(filePath, JSON.stringify(cache), (err) => {
                    if (err) throw err;
                });

                resolve(data);
            } else {
                fs.readFile(filePath, (err, data) => {
                    resolve(JSON.parse(data).data);
                });
            }
        });
    });
}

module.exports = controller;