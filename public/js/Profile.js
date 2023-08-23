$(document).ready(function() {
    let progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(progressBar => {
        let progress = progressBar.getAttribute('data-width');
        let curWidth = 0;

        let duration = 2; // 2 seconds
        let time = 0;
        let fps = 60; // Frames Per Second

        let interval = setInterval(function() {
            time += 1 / fps;
            curWidth = easeInOutQuad(time * 100 / duration, time, 0, progress, duration);
            progressBar.style.width = curWidth + '%';
            progressBar.textContent = Math.round(curWidth) + '%';

            if (curWidth >= progress) {
                clearInterval(interval);
                progressBar.style.width = progress + '%';
                progressBar.textContent = progress + '%';
            }
        }, 1000 / fps);
    });
});

function easeInOutQuad(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return (c / 2) * t * t + b;
    } else {
        return (-c / 2) * (--t * (t - 2) - 1) + b;
    }
}

function checkStats(channelName){

    // Build - Redstone - Roleplaying
    switch(channelName){
        case "AveryMcIvory":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "AZ1O1O":
            processStats(null, null, null, 70, 30, 10);
            break;
        case "BeeBuYog":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "ClariDori":
            $("#description-content").text("(✿◡‿◡) ♪ Clari on the beat, mahilig magpakilig dahil sa boses na kay lamig, kaya pakinggan mo na ang aking mga music! Chillin' on the beat, Minecraft ang aking hilig kaya KADACRAFT ang aking pinili. My heart skips on the beat, we will always be in sync, just be with me!");
            processLinks('https://www.facebook.com/Claridori.ph', 'https://www.youtube.com/channel/UCBNqKk9NyzpW1sbRZ2Iqrag', 'https://www.twitch.tv/claridoriyt', 'https://www.tiktok.com/@claridoriyt');
            processStats('ON THE BEAT', 'BUILDERIST', 'ACTRESS', 100, 60, 70);
            break;
        case "Edicius8-Bit":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "Jade":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "JZGrit":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "KenPlayz":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "KingFB":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "Klarens":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "KristianPH":
            $("#channelName-p").text('Kraftian PH');
            $("#description-content").text("Orayt Mga Chikoy! The name is Kristian, also known as Kristian PH, I do roleplays on KadarCraft.");
            processLinks('https://www.facebook.com/KristianPHYT', 'https://www.youtube.com/channel/UC3Sz8yjiQbQE9_Xq3wUTTog?view_as=subscriber', 'https://www.twitch.tv/kristianph', 'https://www.tiktok.com/@kristian_ph');
            processStats('Roleplaying', 'Demonetization', 'Humor', 100, 100, 80);
            break;
        case "KyahRye":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "LadySue":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "MakiKun":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "McHero":
            $("#channelName-p").text('Mc Hero');
            $("#description-content").text("Kamusta! ako nga pala si Mc Hero. And I am king of myself. Mahilig ako kumain ng Fried Chicken at Pusa ang pinaka paborito kong mobs sa Minecraft!.");
            processLinks('https://www.facebook.com/TheMcHero123', 'https://www.youtube.com/channel/UCmS4KnV7sX0l-VIyFhZ36yw?view_as=subscriber', 'https://www.twitch.tv/mchero_yt', 'https://www.tiktok.com/@mchero_11');
            processStats(null, 'Roleplaying', 'Halimaw mag Selos', 60, 100, 999);
            break;
        case "MythDaRiffer":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "Obri":
            processStats(null, null, null, 60, 10, 39);
            break;
        case "robraks":
            processStats(null, null, null, 98, 78, 71);
            break;
        case "SlyTheMiner":
            $("#description-content").text("SlyTheMiner, the founder of KadaCraft, a Filipino Minecraft SMP. With a mesmerizing ability to persuade and an infectious personality that's fun, loud, enthusiastic, funny, and charismatic, SlyTheMiner brings a unique blend of entertainment to the gaming genre. But what truly sets him apart is his ability over Redstone in Minecraft, where he dazzles viewers with intricate contraptions, functional farms, clever traps, and mind-bending circuitry. Whether you're a seasoned Minecraft player or simply seeking a good time, SlyTheMiner's channel promises an unforgettable journey where persuasion 'Scamming' meets innovation, all within the pixelated landscapes of KadaCraft. Join him now and experience Minecraft like never before!");
            processLinks('https://www.facebook.com/KuyaSly', 'https://www.youtube.com/@SlyTheMiner?view_as=subscriber', 'https://www.twitch.tv/kuyasly', 'https://www.tiktok.com/@KuyaSly');
            processStats(null, null, 'Scammer', 100, 100, 999);
            break;
        case "Starsere":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "Sthreed":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "TenderJoncy":
            $("#description-content").text("Not just tender and juicy but also a self proclaimed builder. Always ready for adventure and other fun activities within the server.");
            processLinks('https://www.facebook.com/tenderjoncy', 'https://www.youtube.com/channel/UC2ukXRx1LNiGayO_HQ_bKmA?view_as=subscriber', 'https://www.twitch.tv/tenderjoncy_');
            processStats('Build', 'Interior', 'Hotdog', 90, 60, 100);
            break;
        case "WetzkieGamer":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "WitchCarnelian":
            processStats(null, 'Witchcraft', 'Beauty', 50, 100, 90);
            break;
        case "ZeriFae":
            $("#description-content").text("Bili ka na baboy...");
            processLinks(null, 'https://www.youtube.com/@zerifae?view_as=subscriber', 'https://www.twitch.tv/zeri_fae', 'https://www.tiktok.com/@zeri_fae');
            processStats(null, null, null, 80, 80, 80);
            break;
        case "ZircMCGamer":
            processStats(null, null, null, 30, 30, 30);
            break;
    }
            
}

function processStats(firstStat, secondStat, thirdStat, build, redstone, roleplaying){

    if ( firstStat == null ){
        firstStat = "Build";
    };
    if ( secondStat == null ){
        secondStat = "Redstone";
    };
    if ( thirdStat == null ){
        thirdStat = "Roleplaying";
    };

    $("#first-stat-name").text(firstStat);
    $("#second-stat-name").text(secondStat);
    $("#third-stat-name").text(thirdStat);

    $("#percentBar-1").attr('data-width', build);
    $("#percentBar-2").attr('data-width', redstone);
    $("#percentBar-3").attr('data-width', roleplaying);

}

function processLinks(facebookLink, youtubeLink, twitch, tiktok){

    if ( facebookLink == null ){
        $("#facebook-link").css('display', 'none')
    } 

    if ( youtubeLink == null ){
        $("#youtube-link").css('display', 'none')
    } 

    if ( twitch == null ){
        $("#twitch-link").css('display', 'none')
    } 

     if ( tiktok == null ){
        $("#tiktok-link").css('display', 'none')
    }


    $("#facebook-link").attr('href', facebookLink);
    $("#youtube-link").attr('href', youtubeLink);
    $("#twitch-link").attr('href', twitch);
    $("#tiktok-link").attr('href', tiktok);

    $("#facebook-link").attr('target', "_blank");
    $("#youtube-link").attr('target', "_blank");
    $("#twitch-link").attr('target', "_blank");
    $("#tiktok-link").attr('target', "_blank");

}