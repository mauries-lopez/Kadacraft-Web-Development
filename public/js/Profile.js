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
            processStats(null, null, null, 30, 30, 30);
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
            processStats(null, null, null, 30, 30, 30);
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
            processStats(null, null, null, 30, 30, 30);
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
            processStats(null, null, null, 20, 100, 10);
            break;
        case "Starsere":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "Sthreed":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "TenderJoncy":
            $("#description-content").text("Not just tender and juicy but also a self proclaimed builder. Always ready for adventure and other fun activities within the server.");
            processStats('Build', 'Interior', 'Hotdog', 90, 60, 100);
            break;
        case "WetzkieGamer":
            processStats(null, null, null, 30, 30, 30);
            break;
        case "WitchCarnelian":
            processStats(null, 'Witchcraft', 'Beauty', 50, 100, 90);
            break;
        case "ZeriFae":
            processStats(null, null, null, 30, 30, 30);
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

    $("#percentBar-1").css('width', build+'%');
    $("#percentBar-1").text(build+'%');
    $("#percentBar-2").css('width', redstone+'%');
    $("#percentBar-2").text(redstone+'%');
    $("#percentBar-3").css('width', roleplaying+'%');
    $("#percentBar-3").text(roleplaying+'%');

}
