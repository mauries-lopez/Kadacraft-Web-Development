$(document).ready(function() {

  $('#place-member').css('transition', '0.5s');

    /* NAVIGATION */
    $('#avery-link').click(function() {
      window.open('https://www.facebook.com', '_blank');
    });


    /* ANIMATIONS */

    $('#avery-link').hover(
      function() {
          $('#luzon').css({
              'transform': 'scale(1.05)',
              'position': 'absolute',
              'z-index': '10',
              'transition': 'all 0.5s ease-in-out'
          });
          $('#visayas').css({
              'filter': 'brightness(25%)',
              'transition': 'all 0.5s ease-in-out',
          });
          $('#mindanao').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
          });

          var img = $('<img src="../public/image/avery.jpg" alt="Image">');
          img.addClass('hover-image');
          $('#place-member').append(img);
          $('#place-member').css('position', 'absolute');
          $('#place-member').css('left', '0');
          $('#place-member').css('top', '0');
          $('#place-member').css('z-index', '50');
          $('#place-member').css('transform', 'translate(480%, 600%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#1O1O-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/az1010.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(480%, 600%)');

    },
    function() {
        $('#luzon').css('transform', 'scale(1)');
        $('#visayas').css('filter', 'brightness(100%)');
        $('#mindanao').css('filter', 'brightness(100%)');
        $('.hover-image').remove();
    }
    );

    $('#Bee-link').hover(
      function() {
          $('#luzon').css({
              'transform': 'scale(1.05)',
              'position': 'absolute',
              'z-index': '10',
              'transition': 'all 0.5s ease-in-out'
          });
          $('#visayas').css({
              'filter': 'brightness(25%)',
              'transition': 'all 0.5s ease-in-out',
          });
          $('#mindanao').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
          });

          var img = $('<img src="../public/image/beebuyog.jpg" alt="Image">');
          img.addClass('hover-image');
          $('#place-member').append(img);
          $('#place-member').css('position', 'absolute');
          $('#place-member').css('left', '0');
          $('#place-member').css('top', '0');
          $('#place-member').css('z-index', '50');
          $('#place-member').css('transform', 'translate(430%, 650%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Bee-link').hover(
      function() {
          $('#luzon').css({
              'transform': 'scale(1.05)',
              'position': 'absolute',
              'z-index': '10',
              'transition': 'all 0.5s ease-in-out'
          });
          $('#visayas').css({
              'filter': 'brightness(25%)',
              'transition': 'all 0.5s ease-in-out',
          });
          $('#mindanao').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
          });
      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
      }
    );

    $('#KyahRye-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/kyahrye.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(480%, 585%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Clari-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/claridori.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(500%, 670%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Edicius-link').hover(
      function() {
          $('#luzon').css({
              'transform': 'scale(1.05)',
              'position': 'absolute',
              'z-index': '10',
              'transition': 'all 0.5s ease-in-out'
          });
          $('#visayas').css({
              'filter': 'brightness(25%)',
              'transition': 'all 0.5s ease-in-out',
          });
          $('#mindanao').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
          });
      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
      }
    );

    $('#Jade-link').hover(
      function() {
          $('#luzon').css({
              'transform': 'scale(1.05)',
              'position': 'absolute',
              'z-index': '10',
              'transition': 'all 0.5s ease-in-out'
          });
          $('#visayas').css({
              'filter': 'brightness(25%)',
              'transition': 'all 0.5s ease-in-out',
          });
          $('#mindanao').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
          });
      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
      }
    );

    $('#Jz-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/jzgrit.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(480%, 600%)');

    },
    function() {
        $('#luzon').css('transform', 'scale(1)');
        $('#visayas').css('filter', 'brightness(100%)');
        $('#mindanao').css('filter', 'brightness(100%)');
        $('.hover-image').remove();
    }
    );

    $('#Ken-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/kenplayz.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(426%, 450%)');
      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#King-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/kingfb.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(520%, 570%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Klarenz-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
      }
    );

    $('#Kris-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/kristianph.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(380%, 480%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Ladysue-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/ladysue.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(520%, 570%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#MakiKun-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/makikun.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(480%, 600%)');

    },
    function() {
        $('#luzon').css('transform', 'scale(1)');
        $('#visayas').css('filter', 'brightness(100%)');
        $('#mindanao').css('filter', 'brightness(100%)');
        $('.hover-image').remove();
    }
    );

    $('#McHero-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/mchero.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(520%, 570%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Myth-link').hover(
      function() {
          $('#visayas').css({
              'transform': 'translate(110%, 230%) scale(1.05)',
              'position': 'absolute',
              'z-index': '10',
              'transition': 'all 0.5s ease-in-out'
          });
          $('#luzon').css({
              'filter': 'brightness(25%)',
              'transition': 'all 0.5s ease-in-out',
          });
          $('#mindanao').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
          });

          var img = $('<img src="../public/image/mythdariffer.jpg" alt="Image">');
          img.addClass('hover-image');
          $('#place-member').append(img);
          $('#place-member').css('position', 'absolute');
          $('#place-member').css('left', '0');
          $('#place-member').css('top', '0');
          $('#place-member').css('z-index', '50');
          $('#place-member').css('transform', 'translate(670%, 1030%)');
      },
      function() {
          $('#visayas').css('transform', 'translate(110%, 230%) scale(1)');
          $('#luzon').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Obri-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/obri.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(600%, 650%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Rob-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/robraks.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(600%, 650%)');
      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Sly-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/slytheminer.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(480%, 530%)');
        //$('#place-member').css('transform', 'translate(31%, 530%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Starsere-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/starsere.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(480%, 600%)');

    },
    function() {
        $('#luzon').css('transform', 'scale(1)');
        $('#visayas').css('filter', 'brightness(100%)');
        $('#mindanao').css('filter', 'brightness(100%)');
        $('.hover-image').remove();
    }
    );

    $('#Sthreed-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/sthreed.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(428%, 480%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#TenderJoncy-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/tenderjoncy.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(380%, 480%)');


      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Wetz-link').hover(
      function() {
          $('#mindanao').css({
              'transform': 'translate(24%, 150%); scale(1.05)',
              'position': 'absolute',
              'z-index': '10',
              'transition': 'all 0.5s ease-in-out'
          });
          $('#luzon').css({
              'filter': 'brightness(25%)',
              'transition': 'all 0.5s ease-in-out',
          });
          $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
          });
      },
      function() {
          $('#mindanao').css('transform', 'translate(24%, 150%); scale(1)');
          $('#luzon').css('filter', 'brightness(100%)');
          $('#visayas').css('filter', 'brightness(100%)');
      }
    );

    $('#Witch-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/witch.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(495%, 585%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Zeri-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/zerifae.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(500%, 670%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

    $('#Zirc-link').hover(
      function() {
        $('#luzon').css({
            'transform': 'scale(1.05)',
            'position': 'absolute',
            'z-index': '10',
            'transition': 'all 0.5s ease-in-out'
        });
        $('#visayas').css({
            'filter': 'brightness(25%)',
            'transition': 'all 0.5s ease-in-out',
        });
        $('#mindanao').css({
          'filter': 'brightness(25%)',
          'transition': 'all 0.5s ease-in-out',
        });

        var img = $('<img src="../public/image/zircmcgamer.jpg" alt="Image">');
        img.addClass('hover-image');
        $('#place-member').append(img);
        $('#place-member').css('position', 'absolute');
        $('#place-member').css('left', '0');
        $('#place-member').css('top', '0');
        $('#place-member').css('z-index', '50');
        $('#place-member').css('transform', 'translate(520%, 590%)');

      },
      function() {
          $('#luzon').css('transform', 'scale(1)');
          $('#visayas').css('filter', 'brightness(100%)');
          $('#mindanao').css('filter', 'brightness(100%)');
          $('.hover-image').remove();
      }
    );

});
  