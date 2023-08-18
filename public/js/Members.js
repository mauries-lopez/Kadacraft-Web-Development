$(document).ready(function() {

  $('#place-member').css('transition', '0.5s');

    /* NAVIGATION */
    $('#first-row img, #second-row img, #third-row img, #fourth-row img, #fifth-row img').click(
      function(){
        var name = $(this).attr("alt");
        var channelID = $(this).data("channel-id");
        window.location.href = "/profile?channelName="+name+"&channelID="+channelID+"";
    });

    /* ANIMATIONS */
    $('#first-row img, #second-row img, #third-row img, #fourth-row img, #fifth-row img').hover(
      function(){
        var island = $(this).data("ph-island");
        var name = $(this).attr("alt");
        var coordX = $(this).data("coord-x");
        var coordY = $(this).data("coord-y");

        $('#luzon').removeClass('island-unselected island-normal island-selected').addClass('island-normal');
        $('#visayas').removeClass('island-unselected island-normal island-selected').addClass('island-normal');
        $('#mindanao').removeClass('island-unselected island-normal island-selected').addClass('island-normal');
        $('#visayas').removeAttr('style');
        $('#mindanao').removeAttr('style');
        $('.hover-image').remove();

        if (island == 'luzon') {
          $('#luzon').removeClass('island-normal').addClass('island-selected');
          $('#visayas').removeClass('island-selected island-normal').addClass('island-unselected');
          $('#mindanao').removeClass('island-selected island-normal').addClass('island-unselected');
        } else if (island == 'visayas') {
          $('#luzon').removeClass('island-selected island-normal').addClass('island-unselected');
          $('#visayas').removeClass('island-normal').addClass('island-selected');
          $('.island-selected').css('transform', 'translate(110%, 230%) scale(1.1)');
          $('#mindanao').removeClass('island-selected island-normal').addClass('island-unselected');
        } else if (island == 'mindanao') {
          $('#luzon').removeClass('island-selected island-normal').addClass('island-unselected');
          $('#visayas').removeClass('island-selected island-normal').addClass('island-unselected');
          $('#mindanao').removeClass('island-normal').addClass('island-selected');
          $('.island-selected').css('transform', 'translate(24%, 150%) scale(1.05)');
        }

        var img = $('<img src="../image/yt-profile/'+name+'.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('transform', 'translate('+coordX+'%, '+coordY+'%)');
      
      });

});
  