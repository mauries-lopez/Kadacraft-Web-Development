
function getChannelAPI(channelName, channelID){

    var url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId="+channelID+"&maxResults=5&order=date&key=AIzaSyDLRLFI_5LRxV2eBJErG3m3iVw8GSIBU6E"
    
    /*
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




