fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzW-TM_w4ntSKbzeT1lcwOQ&maxResults=10&order=date&key=AIzaSyDLRLFI_5LRxV2eBJErG3m3iVw8GSIBU6E")
.then((result) => {
    return result.json();
}).then((data) => {
    console.log(data);
    var videos = data.items;

    /*var memberContainer = document.querySelector(".content-members");

    for (video of videos) {
        memberContainer.innerHTML += `<img src="${video.snippet.thumbnails.default.url}">`;
    }*/

})