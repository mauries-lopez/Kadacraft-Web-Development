const controller = {

    getIndex: function (req, res) {

        //fetchChannelVideos();
        //runFetch();

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
    var url = "https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCvYssWjD3EYiw02k9V2julg&id=UC8w7U97376AfqgbgChFQ0Rg&id=UC3Ir6UQsfdG_5LAebS47tPw&id=UCdfkfwLNSFcoxJfMUELsGFg&id=UCBNqKk9NyzpW1sbRZ2Iqrag&id=UC6tCdiWfn_fg69MM6xEJhlQ&id=UC_ftwy-jI7VRv4BkbSsCnuA&id=UClx91ILccyc0IpzqGZjwhpg&id=UCY-2sNc980SBE4WirNsW5kQ&id=UCY82vc2qc6OpJ2JIc84uwmw&id=UCH1ePS4jaQ_pKjCV3ZoWTNQ&id=UC3Sz8yjiQbQE9_Xq3wUTTog&id=UCOp3dnFJVrEtTtgVF56OeSg&id=UCnPHLZXBAH42XVJlcwTCLlA&id=UCmS4KnV7sX0l-VIyFhZ36yw&id=UCMjP3_mW1_uwgRiLHWj_DQg&id=UCSHb6WyycptSag5u22KQdXA&id=UCzW-TM_w4ntSKbzeT1lcwOQ&id=UChMoFQr8tEisoGXOhw3cdHg&id=UChDF2wRXgNq_RZX0UZrB7Mg&id=UCj9AedTtoCwMUFUDAK_STPQ&id=UC2ukXRx1LNiGayO_HQ_bKmA&id=UCSWIKRQ3S3CW7c3S6VPe63Q&id=UCng1BP8fhudP2WfI_JaJFZw&id=UCaC6Exn0uANeUJNqd0QggNw&id=UCIHLEsaC8fCu9EWhKJzLNCQ&maxResults=1&key=AIzaSyBZ0Cw4kmHvDBCE58v-pvsKy4jNe2uQAYY";
    var response = await fetch(url);
    var data = await response.json();
    return data;
}

// For Getting all videos from the upload playlist of each YouTube Channel
async function fetchPlaylistVideos(dataID,vidCount){
    
    var url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults="+vidCount+"&playlistId="+dataID+"&key=AIzaSyBZ0Cw4kmHvDBCE58v-pvsKy4jNe2uQAYY";
    var response = await fetch(url);
    var video = await response.json();
    return video;
}

function runFetch(){

    fetchChannelVideos()         
    .then( data => {
        var fetchPromises = [];
        if ( data == null ){
            console.log("Don't fetch playlist videos");
            return;
        }else {

            for (var i = 0; i < data.items.length; i++) {
                var playlistId = data.items[i].contentDetails.relatedPlaylists.uploads;
                var fetchPromise = fetchPlaylistVideos(playlistId,1);
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
                    var video = videos.items[0];

                    //Store all videos in Cache Storage
                    localStorage.setItem(video.snippet.channelId, JSON.stringify(video));
                
                });
                
            })
            .catch(error => {
                console.error("Error:", error);
            });

        }
        
    })


}

// Checking for cache 
function checkCache(channelID, fromProfile ) {


    /*
    const currentTimeStamp = new Date().getHours();

    if (localStorage.getItem("lastTimeStamp") == null && localStorage.getItem("expirationTimeStamp") == null) {
        localStorage.setItem("lastTimeStamp", currentTimeStamp);
        localStorage.setItem("expirationTimeStamp", currentTimeStamp + 3);
        console.log("Fetch, no cache");
        fetchChannelVideos(); 
        runFetch();
        return true;

    } else {

        if (currentTimeStamp <= localStorage.getItem("expirationTimeStamp")) {
            console.log("Don't fetch");
            if ( fromProfile == true) {
                fetchProfileChannelVideos(channelID);
            }
        } else {
            console.log("Fetch, cache expired. Set new timeStamps");
            localStorage.setItem("lastTimeStamp", currentTimeStamp);
            localStorage.setItem("expirationTimeStamp", currentTimeStamp + 3);
            fetchChannelVideos();
            runFetch();
            return true;
        }

    }
    */

}

// HELPER FUNCTIONS

// Helper Function for checking correct channel name
function checkChannelName(channelTitle){
    switch(channelTitle){
        case "Avery McIvory":
            return "AveryMcIvory";
        case "1O1O":
            return "AZ1O1O";
        case "StarserePlays":
            return "Starsere";
        case "Zeri Fae":
            return "ZeriFae";
        case "Kraftian PH":
            return "KristianPH";
        case "Edicius 8-bit":
            return "Edicius8-Bit";
        case "Ken Playz":
            return "KenPlayz";
        case "WITCH CARNELIAN":
            return "WitchCarnelian";
        case "Sthreed YT":
            return "Sthreed";
        case "JZ GRIT":
            return "JZGrit";
        case "maki kun":
            return "MakiKun";
        case "King FB":
            return "KingFB";
        case "Mc Hero":
            return "McHero";
        case "Ladysue Alberto":
            return "LadySue";
        case "kyahrye":
            return "KyahRye";
        default:
            return channelTitle;
    }
}

// Helper Function for getting likes, views, and comments counts
async function fetchVideoStats(videoID){

    var url = "https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id="+videoID+"&key=AIzaSyBZ0Cw4kmHvDBCE58v-pvsKy4jNe2uQAYY";
    var response = await fetch(url);
    var data = await response.json();
    return data;

}

module.exports = controller;