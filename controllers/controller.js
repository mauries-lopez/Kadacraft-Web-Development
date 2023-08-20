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

        let channelID = req.query.channelID;

        res.render('profile', {channelID: channelID});
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
function fetchProfileChannelVideos(channelID){

    var url = "https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id="+channelID+"&maxResults=10&key=AIzaSyBZ0Cw4kmHvDBCE58v-pvsKy4jNe2uQAYY"
    fetch(url)
    .then((result) => {
        return result.json();
    }).then((data) => {
        var fetchPromises = [];
        for (var i = 0; i < data.items.length; i++) {
            var playlistId = data.items[i].contentDetails.relatedPlaylists.uploads;
            var fetchPromise = fetchPlaylistVideos(playlistId, 10);
            fetchPromises.push(fetchPromise);
        }

        Promise.all(fetchPromises)
            .then(videosArray => {
                //Sort the videosArray by latest date
                videosArray.sort(function(a, b){
                    var dateA = new Date(a.items[0].snippet.publishedAt);
                    var dateB = new Date(b.items[0].snippet.publishedAt);
                    //If the dates are equal, sort by time
                    if(dateA.getTime() == dateB.getTime()){
                        var timeA = new Date(a.items[0].snippet.publishedAt);
                        var timeB = new Date(b.items[0].snippet.publishedAt);
                        return timeB - timeA;
                    }
                    return dateB - dateA;
                });
      
                //Display the videos
                videosArray.forEach(function(videos){

                    videos.items.forEach( async function(video) {
                        
                        channelName = checkChannelName(video.snippet.channelTitle);

                        // Create the main container div
                        var ytVideoDiv = document.createElement('div');
                        ytVideoDiv.onclick = (function(videoId) {
                            return function() {
                                window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
                            };
                        })(video.snippet.resourceId.videoId);

                        ytVideoDiv.style.cursor = 'pointer';
                        ytVideoDiv.className = 'ytVideo';
                        ytVideoDiv.id = 'ytThumbnail';
                        ytVideoDiv.style.backgroundImage = `linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0.8)),url(${video.snippet.thumbnails.high.url})`;

                        // Create the inner div for the image
                        var ytPicDiv = document.createElement('div');
                        ytPicDiv.id = 'ytPic';

                        var ytImage = document.createElement('img');
                        ytImage.src = '../image/yt-profile/'+channelName+'.jpg'; //CHANGE PROFILE PICTURE
                        ytPicDiv.appendChild(ytImage);

                        // Create the inner div for the right content
                        var rightContentDiv = document.createElement('div');
                        rightContentDiv.id = 'right-content';

                        // Create the div for the video title
                        var ytTitleDiv = document.createElement('div');
                        ytTitleDiv.id = 'ytTitle';

                        var ytTitle = document.createElement('p');
                        ytTitle.textContent = video.snippet.title; // CHANGE VIDEO TITLE
                        ytTitleDiv.appendChild(ytTitle);

                        // Create the div for the video author
                        var ytAuthorDiv = document.createElement('div');
                        ytAuthorDiv.id = 'ytAuthor';

                        var ytAuthor = document.createElement('p');
                        ytAuthor.textContent = video.snippet.channelTitle; // CHANGE VIDEO AUTHOR
                        ytAuthorDiv.appendChild(ytAuthor);

                        var ytIconsDiv = document.createElement('div');
                        ytIconsDiv.id = 'ytIcons';

                        var viewsImg = document.createElement('img');
                        viewsImg.className = 'yt-icon';
                        viewsImg.src = '../image/small-icon/view-icon.png';
                        var views = document.createElement('p');

                        var likesImg = document.createElement('img');
                        likesImg.className = 'yt-icon';
                        likesImg.src = '../image/small-icon/like-icon.png';
                        var likes = document.createElement('p');

                        var commentsImg = document.createElement('img');
                        commentsImg.className = 'yt-icon';
                        commentsImg.src = '../image/small-icon/comment-icon.png';
                        var comments = document.createElement('p');
                        
                        await fetchVideoStats(video.snippet.resourceId.videoId).then((data) => {
                            var videos = data.items;
                            videos.forEach((video) => {
                                views.textContent = video.statistics.viewCount;
                                likes.textContent = video.statistics.likeCount;
                                comments.textContent = video.statistics.commentCount;
                            });
                        });

                        ytIconsDiv.appendChild(viewsImg);
                        ytIconsDiv.appendChild(views);
                        ytIconsDiv.appendChild(likesImg);
                        ytIconsDiv.appendChild(likes);
                        ytIconsDiv.appendChild(commentsImg);
                        ytIconsDiv.appendChild(comments);

                        
                        // Append elements to their respective parent elements
                        rightContentDiv.appendChild(ytTitleDiv);
                        rightContentDiv.appendChild(ytAuthorDiv);
                        rightContentDiv.appendChild(ytIconsDiv);
                        ytVideoDiv.appendChild(rightContentDiv);
                        ytVideoDiv.appendChild(ytPicDiv);
                        ytVideoDiv.appendChild(rightContentDiv);

                        // Append the main container to a parent element in the DOM
                        var parentElement = document.getElementById('ytVideo-container'); // Replace 'parent' with the actual parent element's ID
                        parentElement.appendChild(ytVideoDiv);
                    });

                });
            })
            .catch(error => {
                console.error("Error:", error);
                res.status(500).send("An error occurred");
            });

    })

}

// For Home Page (For all related to Home, it uses 53 QUOTAS per page load) (Call Steps: checkCache -> fetchChannelVideos -> fetchPlaylistVideos -> fetchVideoStats )
async function fetchChannelVideos(){
    return await new Promise((resolve, reject) => {
        checkCache(CACHE_LIFESPAN, async function (isCacheExpired) {
            if (isCacheExpired || !fs.existsSync('caches/channelVideos.json')) {
                let url = "https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCvYssWjD3EYiw02k9V2julg&id=UC8w7U97376AfqgbgChFQ0Rg&id=UC3Ir6UQsfdG_5LAebS47tPw&id=UCdfkfwLNSFcoxJfMUELsGFg&id=UCBNqKk9NyzpW1sbRZ2Iqrag&id=UC6tCdiWfn_fg69MM6xEJhlQ&id=UC_ftwy-jI7VRv4BkbSsCnuA&id=UClx91ILccyc0IpzqGZjwhpg&id=UCY-2sNc980SBE4WirNsW5kQ&id=UCY82vc2qc6OpJ2JIc84uwmw&id=UCH1ePS4jaQ_pKjCV3ZoWTNQ&id=UC3Sz8yjiQbQE9_Xq3wUTTog&id=UCOp3dnFJVrEtTtgVF56OeSg&id=UCnPHLZXBAH42XVJlcwTCLlA&id=UCmS4KnV7sX0l-VIyFhZ36yw&id=UCMjP3_mW1_uwgRiLHWj_DQg&id=UCSHb6WyycptSag5u22KQdXA&id=UCzW-TM_w4ntSKbzeT1lcwOQ&id=UChMoFQr8tEisoGXOhw3cdHg&id=UChDF2wRXgNq_RZX0UZrB7Mg&id=UCj9AedTtoCwMUFUDAK_STPQ&id=UC2ukXRx1LNiGayO_HQ_bKmA&id=UCSWIKRQ3S3CW7c3S6VPe63Q&id=UCng1BP8fhudP2WfI_JaJFZw&id=UCaC6Exn0uANeUJNqd0QggNw&id=UCIHLEsaC8fCu9EWhKJzLNCQ&maxResults=1&key=AIzaSyBZ0Cw4kmHvDBCE58v-pvsKy4jNe2uQAYY";
                let response = await fetch(url);
                let data = await response.json();

                fs.writeFile('caches/channelVideos.json', JSON.stringify(data), (err) => {
                    if (err) throw err;
                });

                resolve(data);
            } else {
                fs.readFile('caches/channelVideos.json', (err, data) => {
                    resolve(JSON.parse(data));
                });
            }
        });
    });
}

// For Getting all videos from the upload playlist of each YouTube Channel
async function fetchPlaylistVideos(dataID, vidCount){
    return await new Promise((resolve, reject) => {
        checkCache(CACHE_LIFESPAN, async function (isCacheExpired) {
            if (isCacheExpired || !fs.existsSync('caches/playlistVideos-' + dataID + '.json')) {
                let url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=" + vidCount + "&playlistId=" + dataID + "&key=AIzaSyBZ0Cw4kmHvDBCE58v-pvsKy4jNe2uQAYY";
                let response = await fetch(url);
                let video = await response.json();

                fs.writeFile('caches/playlistVideos-' + dataID + '.json', JSON.stringify(video), (err) => {
                    if (err) throw err;
                });

                resolve(video);
            } else {
                fs.readFile('caches/playlistVideos-' + dataID + '.json', (err, data) => {
                    resolve(JSON.parse(data));
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

// Checking for caches
function checkCache(cacheLifespan, isCacheExpired) {
    // Convert from seconds to hours (1 hour = 3600 seconds)
    cacheLifespan *= 3600;

    // Check if cache file is not found
    if (!fs.existsSync('caches/cache.json')) {
        let cache = {
            timestamp: Date.now() / 1000 // Convert from milliseconds to seconds
        }

        // Generate a cache file
        fs.writeFile('caches/cache.json', JSON.stringify(cache), function (err) {
            if (err) throw err;
            console.info("[CACHE] Initial caches file saved");
        });

        isCacheExpired(true);
        return;
    }

    // If cache file is found:
    fs.readFile('caches/cache.json', function(err, data) {
        // Get saved timestamp from cache file
        let cacheTimestamp = JSON.parse(data).timestamp;

        let difference = Date.now() / 1000 - cacheTimestamp;
        isCacheExpired(difference >= cacheLifespan);

        // Cache is expired if the difference is greater than or equal to the cacheLifespan
        if (difference >= cacheLifespan) {
            console.info("[CACHE] Cache expired. Generating new caches…");

            let cache = {
                timestamp: Date.now() / 1000 // Convert from milliseconds to seconds
            }

            // Generate a new cache file
            fs.writeFile('caches/cache.json', JSON.stringify(cache), function (err) {
                if (err) throw err;
                console.info("[CACHE] New caches file generated");
            });
        }
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
    return await new Promise((resolve, reject) => {
        checkCache(CACHE_LIFESPAN, async function (isCacheExpired) {
            if (isCacheExpired || !fs.existsSync('caches/videoStats' + videoID + '.json')) {
                let url = "https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=" + videoID + "&key=AIzaSyBZ0Cw4kmHvDBCE58v-pvsKy4jNe2uQAYY";
                let response = await fetch(url);
                let data = await response.json();

                fs.writeFile('caches/videoStats' + videoID + '.json', JSON.stringify(data), (err) => {
                    if (err) throw err;
                });

                resolve(data);
            } else {
                fs.readFile('caches/videoStats' + videoID + '.json', (err, data) => {
                    resolve(JSON.parse(data));
                });
            }
        });
    });
}

module.exports = controller;