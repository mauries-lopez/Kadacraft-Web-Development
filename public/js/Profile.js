function checkStats(channelName){

    // Build - Redstone - Roleplaying
    switch(channelName){
        case "AveryMcIvory":
            processStats(30, 30, 30);
            break;
        case "AZ1O1O":
            processStats(30, 30, 30);
            break;
        case "BeeBuYog":
            processStats(30, 30, 30);
            break;
        case "ClariDori":
            processStats(30, 30, 30);
            break;
        case "Edicius8-Bit":
            processStats(30, 30, 30);
            break;
        case "Jade":
            processStats(30, 30, 30);
            break;
        case "JZGrit":
            processStats(30, 30, 30);
            break;
        case "KenPlayz":
            processStats(30, 30, 30);
            break;
        case "KingFB":
            processStats(30, 30, 30);
            break;
        case "Klarens":
            processStats(30, 30, 30);
            break;
        case "KristianPH":
            processStats(30, 30, 30);
            break;
        case "KyahRye":
            processStats(30, 30, 30);
            break;
        case "LadySue":
            processStats(30, 30, 30);
            break;
        case "MakiKun":
            processStats(30, 30, 30);
            break;
        case "McHero":
            processStats(30, 30, 30);
            break;
        case "MythDaRiffer":
            processStats(30, 30, 30);
            break;
        case "Obri":
            processStats(60, 10, 39);
            break;
        case "robraks":
            processStats(98, 78, 71);
            break;
        case "SlyTheMiner":
            processStats(20, 100, 10);
            break;
        case "Starsere":
            processStats(30, 30, 30);
            break;
        case "Sthreed":
            processStats(30, 30, 30);
            break;
        case "TenderJoncy":
            processStats(30, 30, 30);
            break;
        case "WetzkieGamer":
            processStats(30, 30, 30);
            break;
        case "WitchCarnelian":
            processStats(30, 30, 30);
            break;
        case "ZeriFae":
            processStats(30, 30, 30);
            break;
        case "ZircMCGamer":
            processStats(30, 30, 30);
            break;
    }
            
}

function processStats(build, redstone, roleplaying){
    $("#build-percent").css('width', build+'%');
    $("#build-percent").text(build+'%');
    $("#redstone-percent").css('width', redstone+'%');
    $("#redstone-percent").text(redstone+'%');
    $("#roleplaying-percent").css('width', roleplaying+'%');
    $("#roleplaying-percent").text(roleplaying+'%');
}