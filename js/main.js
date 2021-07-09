/*  ---------------------------------------------------

---------------------------------------------------------  */

'use strict';

(function ($) {

    /*===============================================================
                      Working Contact Form
    ================================================================*/

    $("#contactForm").submit(function (e) {

        e.preventDefault();
        var $ = jQuery;

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $cfResponse = $('#contactFormResponse'),
            $cfsubmit = $("#cfsubmit"),
            cfsubmitText = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function (data) {
                $cfResponse.html(data);
                $cfsubmit.text(cfsubmitText);
                $('#contactForm input[name=name]').val('');
                $('#contactForm input[name=email]').val('');
                $('#contactForm textarea[name=message]').val('');
            },
            error: function (data) {
                alert("Error occurd! Please try again");
            }
        });

        return false;

    });





    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });


    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 2,
        dots: false,
        autoplay: false,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2
            }
        }
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();

    // if(mm == 12) {
    //     mm = '01';
    //     yyyy = yyyy + 1;
    // } else {
    //     mm = parseInt(mm) + 1;
    //     mm = String(mm).padStart(2, '0');
    // }
    // var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end

    // Use this for real timer date

    $(document).ready(function () {
        //zona horarira
        var nextYear = moment.tz("2021-07-26 10:00", "US/Central");
        //formato countdown
        $('#countdown').countdown(nextYear.toDate(), function (event) {
            $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"));
        });
    });

})(jQuery);