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
            $("#channelName-p").text('Edicius 8-bit');
            $("#description-content").text("So yep! Ako nga pala si Edicius 8-bit, isang sobrang 'Family Friendly na medyo bastos' sa Kadacraft. Kulay Pink ang aking brief at mahilig po ako kumanta at sumayaw, madalas nag iingay at laging galit! Pero nagbago na ako, mahirap na. Isa rin akong Pogi Hunter. Pero serious note! I'm still adopting things sa Minecraft. Learning things and discovering stuff! Doing the best that I can for the viewers! Hope you enjoy if nararamdaman mo rin ako hehe.");
            processLinks('https://www.facebook.com/edicius8bitofficial', 'https://www.youtube.com/channel/UC6tCdiWfn_fg69MM6xEJhlQ?view_as=subscriber', 'https://www.twitch.tv/edicius8bit', 'https://www.tiktok.com/@edicius_8bit');
            processStats(null, 'Roleplaying', 'Bastos', 40, 80, 200);
            break;
        case "Jade":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "JZGrit":
            $("#channelName-p").text('JZ GRIT');
            $("#description-content").text("JZ GRIT, The Grind father");
            processLinks('https://www.facebook.com/JZGRITph', 'https://www.youtube.com/jzgrit?view_as=subscriber', 'https://www.twitch.tv/jzgrit_', 'https://www.tiktok.com/@jzgrlt');
            processStats(null, null, null, 50, 20, 30);
            break;
        case "KenPlayz":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "KingFB":
            $("#channelName-p").text('King FB');
            $("#description-content").text("Ako nga pala si KingFB! Ang inyong Stepbro-Content Creator on-the-go!");
            processLinks('https://www.facebook.com/gaming/KingRSY', 'https://www.youtube.com/@KingFB?view_as=subscriber', 'https://www.twitch.tv/kingfb', 'https://www.tiktok.com/@_kingfb');
            processStats(null, 'Roleplaying', 'Handsome', 100, 10, 100);
            break;
        case "Klarens":
            $("#description-content").text("Hai. It is a pleasure to meet you. My role in the server is to stand somewhere, anywhere, or everywhere. Also, I have an empty bottle fetish, so if you ever come across one, kindly send it to my mailbox or through the trash can if you can't find it. Ah, 'yung sinaing, ok, bye, /afk.");
            processLinks(null, 'https://www.youtube.com/@klrns_', 'https://www.twitch.tv/klarenso_o', null);
            processStats(null, 'Farm', 'AFK', 50, 70, 100);
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
            $("#channelName-p").text('Ladysue Alberto');
            $("#description-content").text("Hello I am Ladysue! You can call me Ate Sue. Isa akong Rainbow Unicorn or Rainicorn :) Ang paborito kong gawin ay kumuha ng diamonds and ancient debris!  Kuha hindi nakaw ah! HAHA and mahilig din ako mag prank pero sometimes lang :D");
            processLinks('https://www.facebook.com/ladysueeee', 'https://www.youtube.com/@LadysueAlberto07', 'https://m.twitch.tv/ladysue07', 'https://www.tiktok.com/@ladysue07');
            processStats(null, 'Roleplaying', 'Diamonds & Ancient Debris', 60, 70, 100);
            break;
        case "MakiKun":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "McHero":
            $("#channelName-p").text('Mc Hero');
            $("#description-content").text("Kamusta! ako nga pala si Mc Hero. And I am king of myself. Mahilig ako kumain ng Fried Chicken at Pusa ang pinaka paborito kong mobs sa Minecraft!.");
            processLinks('https://www.facebook.com/TheMcHero123', 'https://www.youtube.com/channel/UCmS4KnV7sX0l-VIyFhZ36yw?view_as=subscriber', 'https://www.twitch.tv/mchero_yt', 'https://www.tiktok.com/@mchero_11');
            processStats(null, 'Roleplaying', 'Halimaw mag Selos', 60, 100, 200);
            break;
        case "MythDaRiffer":
            $("#description-content").text("I am the Top G HardCore Player of KadaCraft");
            processLinks('https://www.facebook.com/mythdariffer', 'https://www.youtube.com/channel/UCMjP3_mW1_uwgRiLHWj_DQg?view_as=subscriber', 'https://www.twitch.tv/mythdariffer', null);
            processStats(null, null, null, 70, 60, 50);
            break;
        case "Obri":
            $("#description-content").text("Hello ako si Obri, laging mataray role ko diko alam kung bakit. Hindi ako nageexplore kasi takot ako sa mga mobs, magbubuild nalang ako.");
            processLinks('https://www.facebook.com/profile.php?id=100078689359622&mibextid=ZbWKwLr', 'https://youtube.com/@Obriii?view_as=subscriber', 'https://www.twitch.tv/obriiiiiii', 'https://www.tiktok.com/@aubreeyph?_t=8f37fhBn1Yw&_r=1');
            processStats(null, null, null, 60, 1, 39);
            createExtraElements('Sigaw', 200);
            break;
        case "robraks":
            $("#description-content").text("He excels in the realm of Community Building, aiming to showcase his mastery of Structural Elegance to not only his followers but also the audience of Server Members. Robraks stands apart from others due to his remarkable expertise in understanding the intricacies of the game we all love. Whether it's constructing buildings, working with Redstone, optimizing farms, or delving into technical aspects, he possesses the ability to impart knowledge on all these fronts. There are numerous incentives to accompany him on his content creation journey, open to all of us, except for those who would obstruct the flow of content.");
            processLinks('https://www.facebook.com/roboraksu', 'https://www.youtube.com/channel/UCzW-TM_w4ntSKbzeT1lcwOQ?view_as=subscriber', 'https://www.twitch.tv/robraks', 'https://www.tiktok.com/@robraks');
            processStats('Innovator', 'Structural Engineer', 'Gangster', 100, 100, 200);
            break;
        case "SlyTheMiner":
            $("#description-content").text("SlyTheMiner, the founder of KadaCraft, a Filipino Minecraft SMP. With a mesmerizing ability to persuade and an infectious personality that's fun, loud, enthusiastic, funny, and charismatic, SlyTheMiner brings a unique blend of entertainment to the gaming genre. But what truly sets him apart is his ability over Redstone in Minecraft, where he dazzles viewers with intricate contraptions, functional farms, clever traps, and mind-bending circuitry. Whether you're a seasoned Minecraft player or simply seeking a good time, SlyTheMiner's channel promises an unforgettable journey where persuasion 'Scamming' meets innovation, all within the pixelated landscapes of KadaCraft. Join him now and experience Minecraft like never before!");
            processLinks('https://www.facebook.com/KuyaSly', 'https://www.youtube.com/@SlyTheMiner?view_as=subscriber', 'https://www.twitch.tv/kuyasly', 'https://www.tiktok.com/@KuyaSly');
            processStats(null, null, null, 70, 20, 10);
            createExtraElements('Scammer', 200);
            break;
        case "Starsere":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "Sthreed":
            $("#channelName-p").text('Sthreed YT');
            $("#description-content").text("I am the smallest Enderman , I make manual farms");
            processLinks('https://www.facebook.com/sthreed.sapno', 'https://youtube.com/@SthreedYT?view_as=subscriber', 'https://www.twitch.tv/sthreed', 'https://www.tiktok.com/@sthreed');
            processStats(null, null, null, 70, 20, 10);
            break;
        case "TenderJoncy":
            $("#description-content").text("Not just tender and juicy but also a self proclaimed builder. Always ready for adventure and other fun activities within the server.");
            processLinks('https://www.facebook.com/tenderjoncy', 'https://www.youtube.com/channel/UC2ukXRx1LNiGayO_HQ_bKmA?view_as=subscriber', 'https://www.twitch.tv/tenderjoncy_', 'https://www.tiktok.com/@tenderjoncy');
            processStats('Build', 'Interior', 'Hotdog', 90, 60, 100);
            break;
        case "WetzkieGamer":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "WitchCarnelian":
            $("#channelName-p").text('WITCH CARNELIAN');
            $("#description-content").text("Witch Carnelian also known as  ' Nelian '. An eclectic witch. On her 18th birthday she wish to become the greatest magical witch. To enhance her magical power even more her parents gave her a gift called the endless book that will guide her through her journey while she's looking for her familiar named ' Midnight ' a magical black cat who went missing. She meet a wonderful people who lived on B5 island. After a while living in a peaceful island there's a tree of light magically sprouted. By their curiosity they went to investigate and manage to enter the tree of light. The enchanted portal brought them into the world of Kadacraft.");
            processLinks('https://www.facebook.com/junelyn.dacay', 'https://www.youtube.com/channel/UCng1BP8fhudP2WfI_JaJFZw?view_as=subscriber', 'https://www.twitch.tv/witch_carnelian', 'https://www.tiktok.com/@witch_carnelian?lang=en');
            processStats('Build', 'Witchcraft', 'Beauty', 80, 99.99, 100);
            break;
        case "ZeriFae":
            $("#description-content").text("Bili ka na baboy...");
            processLinks(null, 'https://www.youtube.com/@zerifae?view_as=subscriber', 'https://www.twitch.tv/zeri_fae', 'https://www.tiktok.com/@zeri_fae');
            processStats(null, null, null, 80, 80, 80);
            break;
        case "ZircMCGamer":
            $("#description-content").text("Ako Si Zirc Na Mahilig Mag Build.., Masipag Daw Sa Server.., Favorite Ko Sa Server Mag Grind Ng Kung Ano Ano.., Ang Ayaw Ko Lang Nakawin Nyo Pinto Ko.., Kung Ayaw Nyo Mawala Build Nyo Haha Charuuuttt..,");
            processLinks('https://www.facebook.com/ZircMcGamer', 'https://www.youtube.com/@ZircMcGamer?view_as=subscriber', 'https://www.twitch.tv/zircmcgamer', null);
            processStats(null, null, null, 100, 10, 50);
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

function createExtraElements(extraStatName, extraStatValue){

    var statsContainer = document.getElementById('mid');            

    var statName = document.createElement('div');
    statName.classList.add('stat-name');
    statName.setAttribute('id', 'first-stat-name');
    statName.textContent = extraStatName;

    var statsBar = document.createElement('div');
    statsBar.classList.add('stats-bar');

    var progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.setAttribute('id', 'percentBar-1');
    progressBar.setAttribute('data-width', extraStatValue);

    statsBar.appendChild(progressBar);
    
    statsContainer.appendChild(statName);
    statsContainer.appendChild(statsBar);

}