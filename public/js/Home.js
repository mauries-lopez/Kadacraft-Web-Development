window.onload = function(){

    $("#member_button").click(function(){

        if ( $("#member_title").text() == "< Web Developer" ) {
            $("#member_title").text("Members > ");
            $(".flex-container").css("display", "flex");
            $("#web-developer").remove();
    
            
        }else{
            $("#member_title").text("< Web Developer");
            $(".flex-container").css("display", "none");
            
            var member = document.getElementById("members");
           
            var unorderList = document.createElement("ul");
            unorderList.setAttribute("class", "flex-container warp");
            unorderList.setAttribute("id", "web-developer");
    
            var orderList = document.createElement("li");
            var anchor = document.createElement("a");
            anchor.setAttribute("href", "https://www.youtube.com/@Atmospheric");
            anchor.setAttribute("style", "text-decoration: none;");
            anchor.setAttribute("target", "_blank");
    
            var divOne = document.createElement("div");
            divOne.setAttribute("class", "content-members");
    
            var title = document.createElement("h3");
            title.textContent = "Atmospheric";
            
            var img = document.createElement("img");
            img.src = "../public/image/atmospheric.png";
            img.style.width = "100px";
            img.style.borderRadius = "50%";
    
            unorderList.appendChild(orderList);
            orderList.appendChild(anchor);
            anchor.appendChild(divOne);
            divOne.append(title, img);
            member.appendChild(unorderList);
        }
    })

    var tooltipVisible = false;

    $("#facebook-links").click(function(){
        if (!tooltipVisible) {
            $("#tooltip-text").stop().css({
                display: "flex",
                flexDirection: "column",
                opacity: 0
            }).animate({
                opacity: 1
            }, "fast");
            $("#button-1").text("Group");
            $("#button-2").text("Page");
            tooltipVisible = true;
        } else {
            $("#tooltip-text").stop().animate({
                opacity: 0
            }, "fast", function() {
                $(this).css("display", "none");
            });
            tooltipVisible = false;
        }
    });
    
    $("#tooltip-text").on("click", "#button-1", function() {
        tooltipVisible = false;
        $("#tooltip-text").stop().animate({
            opacity: 0
        }, "fast", function() {
            $(this).css("display", "none");
        }
        );
    });
    
    $("#tooltip-text").on("click", "#button-2", function() {
        tooltipVisible = false;
        $("#tooltip-text").stop().animate({
            opacity: 0
        }, "fast", function() {
            $(this).css("display", "none");
        }
        );
    });
    
    

};

