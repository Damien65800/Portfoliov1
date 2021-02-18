window.onload = function () {

    $('#parcours').click(function () {
        $('html,body').animate({ scrollTop: $("#parcoursaff").offset().top }, 'fast');
    });

    $('#competences').click(function () {
        $('html,body').animate({ scrollTop: $("#competencesaff").offset().top }, 'fast');
    });

    $('#contact').click(function () {
        $('html,body').animate({ scrollTop: $("#contactaff").offset().top }, 'fast');
    });

    $('li').click(function () {
        $(this).toggleClass('active').siblings().removeClass('active');
    });

    $('#un').click(function () {
        if ($('#un').hasClass('active')) {
            $('.un').css("opacity", "1");
            $('.trois').css("opacity", "0");
            $('.deux').css("opacity", "0");
        }
        else {
            $('.un').css("opacity", "0");
        }
    });
    $('#deux').click(function () {
        if ($('#deux').hasClass('active')) {
            $('.deux').css("opacity", "1");
            $('.un').css("opacity", "0");
            $('.trois').css("opacity", "0");
        }
        else {
            $('.deux').css("opacity", "0");
        }
    });
    $('#trois').click(function () {
        if ($('#trois').hasClass('active')) {
            $('.trois').css("opacity", "1");
            $('.deux').css("opacity", "0");
            $('.un').css("opacity", "0");
        }
        else {
            $('.trois').css("opacity", "0");
        }
    });
    $(window).scroll(function () {
        var $height = $(window).scrollTop();
        if ($height > 1000) {
            $(document).ready(function () {
                $('.adobe').css('width', '95%');
                $('.html').css('width', '85%');
                $('.css').css('width', '75%');
                $('.jquery').css('width', '80%');
                $('.javascript').css('width', '60%');
                $('.bootstrap').css('width', '80%');
                $('.wordpress').css('width', '80%');
                $('.ui').css('width', '60%');
                $('.ux').css('width', '55%');
            });
        }
    });
}