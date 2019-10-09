function initPage() {


    // your functions go here

    //console.log('page loaded');

};

jQuery(document).ready(function ($) {

    var jssor_1_options = {
        $AutoPlay: 1,
        $Idle: 8000,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $ThumbnailNavigatorOptions: {
            $Class: $JssorThumbnailNavigator$,
            $Cols: 15,
            $SpacingX: 3,
            $SpacingY: 3,
            $Align: 455
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*responsive code begin*/
    /*remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 530);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
});

var stopAnimation = false;

//function ChangeTab(name)
//{
//    try
//    {
//        //stopAnimation = true;

//        document.getElementById("liSlide1").style.display = "none";
//        document.getElementById("liSlide2").style.display = "none";
//        document.getElementById("liSlide3").style.display = "none";
//        document.getElementById("liSlide4").style.display = "none";
//        document.getElementById("liSlide5").style.display = "none";
//        document.getElementById("liSlide6").style.display = "none";

//        document.getElementById("liSlide1").style.left = "0%";
//        document.getElementById("liSlide2").style.left = "0%";
//        document.getElementById("liSlide3").style.left = "0%";
//        document.getElementById("liSlide4").style.left = "0%";
//        document.getElementById("liSlide5").style.left = "0%";
//        document.getElementById("liSlide6").style.left = "0%";


//        switch(name.id.toString())
//        {
//            case "li-profileID":                
//                document.getElementById("liSlide1").style.display = "block";
//                document.getElementById("liSlide1").style.left = "100%";
//                break;
//            case "li-jobsID":
//                document.getElementById("liSlide2").style.display = "block";
//                document.getElementById("liSlide2").style.left = "100%";
//                break;
//            case "li-educationID":
//                document.getElementById("liSlide3").style.display = "block";
//                document.getElementById("liSlide3").style.left = "100%";
//                break;
//            case "li-eventsID":
//                document.getElementById("liSlide4").style.display = "block";
//                document.getElementById("liSlide4").style.left = "100%";
//                break;
//            case "li-travelID":
//                document.getElementById("liSlide5").style.display = "block";
//                document.getElementById("liSlide5").style.left = "100%";
//                break;                
//            case "li-favoritesID":
//                document.getElementById("liSlide6").style.display = "block";
//                document.getElementById("liSlide6").style.left = "100%";
//                break;



//        }
//    }
//    catch(ex)
//    {
//        console.log(ex.message);
//    }    
//}


document.querySelector('#btnPlayVideo').addEventListener('click', function () {



    if (document.querySelector('#videoplayerDIV').style.display == 'block') {
        document.querySelector('#videoplayerDIV').style.display = 'none';
    }

    else {
        document.querySelector('#videoplayerDIV').style.display = 'block';
    }

});

$(function () {
    $nav = $('.menu-list');

    $('#menu-btn').click(function () {
        $nav.slideToggle();
    });

});

$(document).ready(function () {
    $("#aHome").click(function () {
        $('html, body').animate({
            scrollTop: $(".header-intro").offset().top
        }, 2000);
    });
    $("#aAppF").click(function () {
        $('html, body').animate({
            scrollTop: $(".app-info").offset().top
        }, 2000);
    });
    $("#aVideo").click(function () {
        $('html, body').animate({
            scrollTop: $(".video-player-sec").offset().top
        }, 2000);
    });
    $("#aUkUni").click(function () {
        $('html, body').animate({
            scrollTop: $(".uk-universities-sec").offset().top
        }, 2000);
    });
    $("#aGuides").click(function () {
        $('html, body').animate({
            scrollTop: $(".school-and-experties").offset().top
        }, 2000);
    });
    $("#acontact").click(function () {
        $('html, body').animate({
            scrollTop: $(".footer-up").offset().top
        }, 2000);
    });

    $("#aHomeS").click(function () {
        $('html, body').animate({
            scrollTop: $(".header-intro").offset().top
        }, 2000);
    });
    $("#aAppFS").click(function () {
        $('html, body').animate({
            scrollTop: $(".app-info").offset().top
        }, 2000);
    });
    $("#aVideoS").click(function () {
        $('html, body').animate({
            scrollTop: $(".video-player-sec").offset().top
        }, 2000);
    });
    $("#aUkUniS").click(function () {
        $('html, body').animate({
            scrollTop: $(".uk-universities-sec").offset().top
        }, 2000);
    });
    $("#aGuidesS").click(function () {
        $('html, body').animate({
            scrollTop: $(".school-and-experties").offset().top
        }, 2000);
    });
    $("#acontactS").click(function () {
        $('html, body').animate({
            scrollTop: $(".footer-up").offset().top
        }, 2000);
    });
});