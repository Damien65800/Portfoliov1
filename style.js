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
        }
        else {
            $('.un').css("opacity", "0");
        }
    });
    $('#deux').click(function () {
        if ($('#un').hasClass('active')) {
            $('.un').css("opacity", "1");
        }
        else {
            $('.un').css("opacity", "0");
        }
    });
    $('#trois').click(function () {
        if ($('#un').hasClass('active')) {
            $('.un').css("opacity", "1");
        }
        else {
            $('.un').css("opacity", "0");
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

    document.querySelector('#contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        e.target.elements.name.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
    });
}