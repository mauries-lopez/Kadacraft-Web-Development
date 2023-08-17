
function getChannelAPI(channelName, channelID){
    /*
    var url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId="+channelID+"&maxResults=5&order=date&key=AIzaSyDLRLFI_5LRxV2eBJErG3m3iVw8GSIBU6E"
    
   
    fetch(url)
    .then((result) => {
        return result.json();
    }).then((data) => {
        var videos = data.items;

        for ( videos of videos) {

            console.log(videos.id.videoId);

            // Create the main container div
            var ytVideoDiv = document.createElement('div');
            ytVideoDiv.onclick = (function(videoId) {
                return function() {
                    window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
                };
            })(videos.id.videoId);
            ytVideoDiv.style.cursor = 'pointer';
            ytVideoDiv.className = 'ytVideo';
            ytVideoDiv.id = 'ytThumbnail';
            ytVideoDiv.style.backgroundImage = `url(${videos.snippet.thumbnails.high.url})`;

            // Create the inner div for the image
            var ytPicDiv = document.createElement('div');
            ytPicDiv.id = 'ytPic';
            var ytImage = document.createElement('img');
            ytImage.src = '../image/'+channelName+'.jpg'; //CHANGE PROFILE PICTURE
            ytPicDiv.appendChild(ytImage);

            // Create the inner div for the right content
            var rightContentDiv = document.createElement('div');
            rightContentDiv.id = 'right-content';

            // Create the div for the video title
            var ytTitleDiv = document.createElement('div');
            ytTitleDiv.id = 'ytTitle';
            var ytTitle = document.createElement('p');
            ytTitle.textContent = videos.snippet.title; // CHANGE VIDEO TITLE
            ytTitleDiv.appendChild(ytTitle);

            // Create the div for the video author
            var ytAuthorDiv = document.createElement('div');
            ytAuthorDiv.id = 'ytAuthor';
            var ytAuthor = document.createElement('p');
            ytAuthor.textContent = videos.snippet.channelTitle; // CHANGE VIDEO AUTHOR
            ytAuthorDiv.appendChild(ytAuthor);

            // Create the div for the icons and counts
            var ytIconsDiv = document.createElement('div');
            ytIconsDiv.id = 'ytIcons';

            // Create and add the icon and count elements
            var iconLabels = ['view', 'like', 'comment'];
            for (var i = 0; i < 3; i++) {
                var iconImg = document.createElement('img');
                iconImg.className = 'yt-icon';
                iconImg.src = `../public/image/small-icon/${iconLabels[i]}-icon.png`;

                var iconCount = document.createElement('p');
                iconCount.textContent = '100'; //CHANGE COUNT

                ytIconsDiv.appendChild(iconImg);
                ytIconsDiv.appendChild(iconCount);
            }

            // Append elements to their respective parent elements
            rightContentDiv.appendChild(ytTitleDiv);
            rightContentDiv.appendChild(ytAuthorDiv);
            rightContentDiv.appendChild(ytIconsDiv);

            ytVideoDiv.appendChild(ytPicDiv);
            ytVideoDiv.appendChild(rightContentDiv);

            // Append the main container to a parent element in the DOM
            var parentElement = document.getElementById('ytVideo-container'); // Replace 'parent' with the actual parent element's ID
            parentElement.appendChild(ytVideoDiv);

        }

    })
    */

}


function getChannelVideos(){

    var url = "https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCvYssWjD3EYiw02k9V2julg&id=UC8w7U97376AfqgbgChFQ0Rg&id=UC3Ir6UQsfdG_5LAebS47tPw&id=UCdfkfwLNSFcoxJfMUELsGFg&id=UCBNqKk9NyzpW1sbRZ2Iqrag&id=UC6tCdiWfn_fg69MM6xEJhlQ&id=UC_ftwy-jI7VRv4BkbSsCnuA&id=UClx91ILccyc0IpzqGZjwhpg&id=UCY-2sNc980SBE4WirNsW5kQ&id=UCY82vc2qc6OpJ2JIc84uwmw&id=UCH1ePS4jaQ_pKjCV3ZoWTNQ&id=UC3Sz8yjiQbQE9_Xq3wUTTog&id=UCOp3dnFJVrEtTtgVF56OeSg&id=UCnPHLZXBAH42XVJlcwTCLlA&id=UCmS4KnV7sX0l-VIyFhZ36yw&id=UCMjP3_mW1_uwgRiLHWj_DQg&id=UCSHb6WyycptSag5u22KQdXA&id=UCzW-TM_w4ntSKbzeT1lcwOQ&id=UChMoFQr8tEisoGXOhw3cdHg&id=UChDF2wRXgNq_RZX0UZrB7Mg&id=UCj9AedTtoCwMUFUDAK_STPQ&id=UC2ukXRx1LNiGayO_HQ_bKmA&id=UCSWIKRQ3S3CW7c3S6VPe63Q&id=UCng1BP8fhudP2WfI_JaJFZw&id=UCaC6Exn0uANeUJNqd0QggNw&id=UCIHLEsaC8fCu9EWhKJzLNCQ&maxResults=1&key=AIzaSyDLRLFI_5LRxV2eBJErG3m3iVw8GSIBU6E"
    fetch(url)
    .then((result) => {
        return result.json();
    }).then((data) => {
        for ( playlistID of data.items) {
            createVideoElements(playlistID.contentDetails.relatedPlaylists.uploads);
        }
    })


}

function createVideoElements(playlistID){
              
    var url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId="+playlistID+"&key=AIzaSyDLRLFI_5LRxV2eBJErG3m3iVw8GSIBU6E"
    fetch(url)
    .then((result) => {
        return result.json();
    }).then((data) => {

        var videos = data.items;

        for ( videos of videos) {

            var channelName = checkChannelName(videos.snippet.channelTitle);

            // Make the videos be ordered by published date (newest first)
            

            // Create the main container div
            var ytVideoDiv = document.createElement('div');
            ytVideoDiv.onclick = (function(videoId) {
                return function() {
                    window.location.href = `https://www.youtube.com/watch?v=${videos.snippet.resourceId.videoId}`;
                };
            })(videos.id.videoId);
            ytVideoDiv.style.cursor = 'pointer';
            ytVideoDiv.className = 'ytVideo';
            ytVideoDiv.id = 'ytThumbnail';
            ytVideoDiv.style.backgroundImage = `linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0.8)),url(${videos.snippet.thumbnails.high.url})`;

            // Create the inner div for the image
            var ytPicDiv = document.createElement('div');
            ytPicDiv.id = 'ytPic';
            var ytImage = document.createElement('img');
            ytImage.src = '../image/'+channelName+'.jpg'; //CHANGE PROFILE PICTURE
            ytPicDiv.appendChild(ytImage);

            // Create the inner div for the right content
            var rightContentDiv = document.createElement('div');
            rightContentDiv.id = 'right-content';

            // Create the div for the video title
            var ytTitleDiv = document.createElement('div');
            ytTitleDiv.id = 'ytTitle';
            var ytTitle = document.createElement('p');
            ytTitle.textContent = videos.snippet.title; // CHANGE VIDEO TITLE
            ytTitleDiv.appendChild(ytTitle);

            // Create the div for the video author
            var ytAuthorDiv = document.createElement('div');
            ytAuthorDiv.id = 'ytAuthor';
            var ytAuthor = document.createElement('p');
            ytAuthor.textContent = videos.snippet.channelTitle; // CHANGE VIDEO AUTHOR
            ytAuthorDiv.appendChild(ytAuthor);

            // Create the div for the icons and counts
            var ytIconsDiv = document.createElement('div');
            ytIconsDiv.id = 'ytIcons';

            // Create and add the icon and count elements
            var iconLabels = ['view', 'like', 'comment'];
            for (var i = 0; i < 3; i++) {
                var iconImg = document.createElement('img');
                iconImg.className = 'yt-icon';
                iconImg.src = `../public/image/small-icon/${iconLabels[i]}-icon.png`;

                var iconCount = document.createElement('p');
                iconCount.textContent = '100'; //CHANGE COUNT

                ytIconsDiv.appendChild(iconImg);
                ytIconsDiv.appendChild(iconCount);
            }

            // Append elements to their respective parent elements
            rightContentDiv.appendChild(ytTitleDiv);
            rightContentDiv.appendChild(ytAuthorDiv);
            rightContentDiv.appendChild(ytIconsDiv);

            ytVideoDiv.appendChild(ytPicDiv);
            ytVideoDiv.appendChild(rightContentDiv);

            // Append the main container to a parent element in the DOM
            var parentElement = document.getElementById('ytVideo-container'); // Replace 'parent' with the actual parent element's ID
            parentElement.appendChild(ytVideoDiv);

        }
    })

}

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
        default:
            return channelTitle;
    }
}


function checkCache(){

    const currentTimeStamp = new Date().getHours();
    
    if ( localStorage.getItem("lastTimeStamp") == null && localStorage.getItem("expirationTimeStamp") == null ){
        localStorage.setItem("lastTimeStamp", currentTimeStamp);
        localStorage.setItem("expirationTimeStamp", currentTimeStamp + 3);
        getChannelVideos();
        return true;
    } else {
        
        if ( currentTimeStamp <= localStorage.getItem("expirationTimeStamp") ){
            console.log("Don't fetch");
        }else {
            console.log("Fetch, cache expired. Set new timeStamps");
            localStorage.setItem("lastTimeStamp", currentTimeStamp);
            localStorage.setItem("expirationTimeStamp", currentTimeStamp + 3);
            getChannelVideos();
            return true;
        }

    }

}