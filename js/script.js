$(document).ready(function(){
    var achange = 0;
    var arrowwhee = 0;
    var blahblah = 0;
    var section = 1;
    

    if($(window).width() > 824) {
        achange = 210;
    }
    if($(window).width() <= 824 && $(window).width() > 655) {
        achange = 312;
    }
    if($(window).width() <= 655 && $(window).width() > 525) {
        achange = 445;
    }
    if($(window).width() <= 525 && $(window).width() > 440) {
        achange = 526;
    }
    if($(window).width() <= 440 && $(window).width() > 0) {
        achange = 611;
    }
    if($(window).width() <= 489) {
        arrowwhee = 55;
    }
    else {
        arrowwhee = 80;
    }
    var welcomeheight = ($(window).height() - $('.welcome').height() - blahblah)/2;
    $('.welcome').css('top', welcomeheight.toString()+"px");
    var meheight = ($(window).height() - $('#me').height())/2;
    $('#me').css('top', meheight.toString()+"px");
    var arrowsheight = ($(window).height() - $('#arrows').height() - arrowwhee)/2;
    $('#arrows').css('top', arrowsheight.toString()+"px");
    var socmedialeft = ($(window).width() - $('#socialmedia').width() - 107)/2;
    $('#socialmedia').css('left', socmedialeft.toString()+"px");
    var navcircles = ($(window).width() - $('#move-circles').width() + achange)/2;
    $('#move-circles').css('left', navcircles.toString()+"px");

    
    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
    

    
    $(window).on("load", function() {
        if (getUrlVars()["section"]=="projects") {
            $('#2').trigger('click');
            $('#2').trigger('hover').trigger('mouseenter');
            if (getUrlVars()["projectid"]=="speeder") {
            }
            else if (getUrlVars()["projectid"]=="church") {
                $('.fa-angle-double-down').trigger('click');
                $( ("#church-img") ).prev().css("display", "none");
            }
            else if (getUrlVars()["projectid"]=="facebook") {
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $( ("#facebook-img") ).prev().css("display", "none");
                $( ("#facebook-img") ).prev().prev().css("display", "none");
            }
            else if (getUrlVars()["projectid"]=="accident") {
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $( ("#accident-img") ).prev().css("display", "none");
                $( ("#accident-img") ).prev().prev().css("display", "none");
                $( ("#accident-img") ).prev().prev().prev().css("display", "none");
            }
            else if (getUrlVars()["projectid"]=="receipt") {
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $( ("#smart-img") ).prev().css("display", "none");
                $( ("#smart-img") ).prev().prev().css("display", "none");
                $( ("#smart-img") ).prev().prev().prev().css("display", "none");
                $( ("#smart-img") ).prev().prev().prev().prev().css("display", "none");
            }
            else if (getUrlVars()["projectid"]=="finals") {
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $( ("#finals-img") ).prev().css("display", "none");
                $( ("#finals-img") ).prev().prev().css("display", "none");
                $( ("#finals-img") ).prev().prev().prev().css("display", "none");
                $( ("#finals-img") ).prev().prev().prev().prev().css("display", "none");
                $( ("#finals-img") ).prev().prev().prev().prev().prev().css("display", "none");
            }
            else if (getUrlVars()["projectid"]=="polygon") {
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $( ("#low-img") ).prev().css("display", "none");
                $( ("#low-img") ).prev().prev().css("display", "none");
                $( ("#low-img") ).prev().prev().prev().css("display", "none");
                $( ("#low-img") ).prev().prev().prev().prev().css("display", "none");
                $( ("#low-img") ).prev().prev().prev().prev().prev().css("display", "none");
                $( ("#low-img") ).prev().prev().prev().prev().prev().prev().css("display", "none");
            }
            else if (getUrlVars()["projectid"]=="presentation") {
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $( ("#presentation-img") ).prev().css("display", "none");
                $( ("#presentation-img") ).prev().prev().css("display", "none");
                $( ("#presentation-img") ).prev().prev().prev().css("display", "none");
                $( ("#presentation-img") ).prev().prev().prev().prev().css("display", "none");
                $( ("#presentation-img") ).prev().prev().prev().prev().prev().css("display", "none");
                $( ("#presentation-img") ).prev().prev().prev().prev().prev().prev().css("display", "none");
                $( ("#presentation-img") ).prev().prev().prev().prev().prev().prev().prev().css("display", "none");
            }
            else if (getUrlVars()["projectid"]=="calc") {
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $( ("#calc-img") ).prev().css("display", "none");
                $( ("#calc-img") ).prev().prev().css("display", "none");
                $( ("#calc-img") ).prev().prev().prev().css("display", "none");
                $( ("#calc-img") ).prev().prev().prev().prev().css("display", "none");
                $( ("#calc-img") ).prev().prev().prev().prev().prev().css("display", "none");
            }
            else if (getUrlVars()["projectid"]=="instagram") {
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $( ("#instagram-img") ).prev().css("display", "none");
                $( ("#instagram-img") ).prev().prev().css("display", "none");
                $( ("#instagram-img") ).prev().prev().prev().css("display", "none");
                $( ("#instagram-img") ).prev().prev().prev().prev().css("display", "none");
            }
            else if (getUrlVars()["projectid"]=="horn") {
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $( ("#ultimate-img") ).prev().css("display", "none");
                $( ("#ultimate-img") ).prev().prev().css("display", "none");
                $( ("#ultimate-img") ).prev().prev().prev().css("display", "none");
            }
            else if (getUrlVars()["projectid"]=="uw") {
                $('.fa-angle-double-up').trigger('click');
                $('.fa-angle-double-up').trigger('click');
                $( ("#uw-img") ).prev().css("display", "none");
                $( ("#uw-img") ).prev().prev().css("display", "none");
            }
            else if (getUrlVars()["projectid"]=="past") {
                $('.fa-angle-double-up').trigger('click');
                $( ("#past-img") ).prev().css("display", "none");
            }
            
        }
        if (getUrlVars()["section"]=="blog") {
            $('#3').trigger('click');
            $('#3').trigger('hover').trigger('mouseenter');
            if (getUrlVars()["blogid"]=="search") {
            }
            else if (getUrlVars()["blogid"]=="apps") {
                $('.fa-angle-double-down').trigger('click');
                $( ("#apps-img") ).prev().css("display", "none");
            }
            else if (getUrlVars()["blogid"]=="bike") {
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $( ("#bike-img") ).prev().css("display", "none");
                $( ("#bike-img") ).prev().prev().css("display", "none");
            }
            else if (getUrlVars()["blogid"]=="light") {
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $('.fa-angle-double-down').trigger('click');
                $( ("#light-img") ).prev().css("display", "none");
                $( ("#light-img") ).prev().prev().css("display", "none");
                $( ("#light-img") ).prev().prev().prev().css("display", "none");
            }
        }
        if (getUrlVars()["section"]=="about") {
            $('#4').trigger('click');
            $('#4').trigger('hover').trigger('mouseenter');
        }
        if (getUrlVars()["section"]=="contact") {
            $('#5').trigger('click');
            $('#5').trigger('hover').trigger('mouseenter');
        }
        $("#outside").css("visibility", "visible");
        $(".sorry").delay(500).fadeOut(1000);
        $(".cssload-container").delay(500).fadeOut(1000);
        
       
        
        if ($("#welcome-text").html() != "Hi! I'm George Saieed.") {
            if ($(window).width() <= 914) {
                $("#welcome-description").css("font-size", "55px");
            }
            if ($(window).width() <= 792) {
                $("#welcome-description").css("font-size", "45px");
            }
            if ($(window).width() <= 709) {
                $("#welcome-description").css("font-size", "39px");
                $("#seemore").css("font-size", "15px");
                $("#seemore").css("margin-top", "-18px");
            }
            if ($(window).width() <= 645 && $(window).width() > 579) {
                $("#welcome-text").css("font-size", "15px");
            }
            if ($(window).width() <= 491) {
                $("#welcome-description").css("font-size", "35px");
                $("#welcome-description").css("max-width", "");
                $("#welcome-text").css("font-size", "15px");
            }
            if ($(window).width() <= 423) {
                $("#welcome-description").css("font-size", "30px");
                $("#welcome-description").css("margin-right", "0px");
                $("#seemore").css("font-size", "13px");
                $("#seemore").css("margin-top", "-15px");
            }
        }
         blahblah=0;
            if ($("#welcome-text").html() != "Hi! I'm George Saieed.") {
                if($(window).width() < 580) {
                    blahblah = 30;
                }
            } 
        setTimeout(function(){
        welcomeheight = ($(window).height() - $('.welcome').height() - blahblah)/2;
        $('.welcome').css('top', welcomeheight.toString()+"px");
        }, 100);
    });
    
    $(window).resize(function(){
        if ($("#welcome-text").html() != "Hi! I'm George Saieed.") {
        if ($(window).width() <= 423) {
                $("#welcome-description").css("font-size", "30px");
                $("#welcome-description").css("margin-right", "0px");
                $("#seemore").css("font-size", "13px");
                $("#seemore").css("margin-top", "-15px");
        }
        else if ($(window).width() <= 491) {
                $("#welcome-description").css("font-size", "35px");
                $("#welcome-description").css("max-width", "");
                $("#welcome-text").css("font-size", "15px");
        }
        else if ($(window).width() <= 645 && $(window).width() > 579) {
                $("#welcome-text").css("font-size", "15px");
        }
        else if ($(window).width() <= 709) {
                $("#welcome-description").css("font-size", "39px");
                $("#seemore").css("font-size", "15px");
                $("#seemore").css("margin-top", "-18px");
        }
        else if ($(window).width() <= 792) {
                $("#welcome-description").css("font-size", "45px");
        }
        else if ($(window).width() <= 914) {
                $("#welcome-description").css("font-size", "55px");
        }
        }
        
        //489, 15; 709, 19; 791, 21; 864, 22; 913, 25;
        if ($("#welcome-text").html() == "Hi! I'm George Saieed.") { 
            if ($(window).width() <= 489) {
                $("#welcome-description").css("font-size", "15px");
            }
            else if ($(window).width() <= 709) {
                $("#welcome-description").css("font-size", "19px");
            }
            else if ($(window).width() <= 791) {
                $("#welcome-description").css("font-size", "21px");
            }
            else if ($(window).width() <= 864) {
                $("#welcome-description").css("font-size", "22px");
            }
            else if ($(window).width() <= 913) {
                $("#welcome-description").css("font-size", "25px");
            }
            else if ($(window).width() > 913) {
                $("#welcome-description").css("font-size", "32px");
            }
        }
        blahblah=0;
        if ($("#welcome-text").html() != "Hi! I'm George Saieed.") {
        if($(window).width() < 580) {
            blahblah = 30;
        }
        
        else if($(window).width() >= 580) {
            blahblah = 0;
        }
        }
        
        
        
        if($(window).width() > 824) {
        achange = 210;
        }
        if($(window).width() <= 824 && $(window).width() > 655) {
            achange = 312;
        }
        if($(window).width() <= 655 && $(window).width() > 525) {
            achange = 445;
        }
        if($(window).width() <= 525 && $(window).width() > 440) {
            achange = 526;
        }
        if($(window).width() <= 440 && $(window).width() > 0) {
            achange = 611;
        }
        welcomeheight = ($(window).height() - $('.welcome').height() - blahblah)/2;
        $('.welcome').css('top', welcomeheight.toString()+"px");
        meheight = ($(window).height() - $('#me').height())/2;
        $('#me').css('top', meheight.toString()+"px");
        arrowsheight = ($(window).height() - $('#arrows').height())/2;
        $('#arrows').css('top', arrowsheight.toString()+"px");
        socmedialeft = ($(window).width() - $('#socialmedia').width())/2;
        $('#socialmedia').css('left', socmedialeft.toString()+"px");
        navcircles = ($(window).width() - $('#move-circles').width() + achange)/2;
        $('#move-circles').css('left', navcircles.toString()+"px");
    });
    
    $('.fa-circle-o').hover(function () {
            var labelnum = "#" + "label-" + $(this).attr('id');
            $(labelnum.toString()).css("color","#fff");
            $(this).removeClass('fa-circle-o');
            $(this).addClass('fa-circle');
        }, function () {
            if (!$('#welcome-text').hasClass($(this).attr('id').toString())) {
                var labelnum = "#" + "label-" + $(this).attr('id');
                $(labelnum.toString()).css("color","#fff");
                $(this).removeClass('fa-circle');
                $(this).addClass('fa-circle-o');
            }
    });
    
    var hometext = ["I am a self-taught designer and developer attending the University of Chicago, and you will almost always find me trying to learn something.", "Nothing fascinates me more than the human brain, or understanding why people do what they do.", "I can play piano, sing, and weirdest of all, beatbox, and I love to read about technology.", "I want to change the world one day, and I will."];
    var smalltext = ["Hi! I'm George Saieed.", "Made w/ HTML, CSS, jQuery | Oct. 2016", "March 22\, 2016 | 3 - 5 min. read", "All About Me", "Contact Me"];
    var projtext = ["Speed ER","Church Website", "Facebook Re-Design", "Accident Report", "Smart Receipts", "Finals Generator", "Low Polygon Art", "Presentation Design", "Calc Color", "Instagram Logo Design", "Ultimate Horn", "UW Poster", "Past Websites"];
    var projsubtext = ["Made w/ HTML, CSS, jQuery | Oct. 2016", "Made w/ HTML, CSS, jQuery | Sept. 2016", "Made w/ Sketch | Sept. 2016", "Made w/ Sketch | Aug. 2016", "Made w/ Sketch, Swift, XCode | Mar. 2016", "Made w/ Twilio, Python | May 2016", "Made w/ Photoshop | May 2016", "Made w/ Sketch | Jun. 2016", "Made w/ Sketch, Swift, XCode | Jul. 2016", "Made w/ Sketch | May 2016", "Made w/ Swift, XCode | Jul. 2016", "Made w/ Photoshop | May 2016", "Made w/ HTML, CSS, jQuery | Mar./Aug. 2016"];
    var projpics = ["speeder-img","church-img", "facebook-img", "accident-img", "smart-img", "finals-img", "low-img", "presentation-img", "calc-img", "instagram-img", "ultimate-img", "uw-img", "past-img"];
    var blogtext = ["Why am I terrible with computers?", "How do mobile apps really work?", "Power A House With A Bike", "Run At Light Speed"];
    var blogsubtext = ["March 22\, 2016 | 3 - 5 min. read", "July 14\, 2015 | 8 - 14 min. read", "July 15\, 2016 | 2 - 3 min. read", "July 18\, 2016 | 1-3 min. read"];
    var blogpics = ["search-img", "apps-img", "bike-img", "light-img"];
    var abouttext = ["So Who Am I?"];
    
    var backpics
    
    var textnum = 0;
    
    
   $('#container').swipe( {
    //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
           if(direction == "up")
               {
                           if (!$('#welcome-text').hasClass("1")) {
                    $('#seemore').css("opacity", "0").fadeTo(500, 1);
                    $('.welcome').css("cursor", "pointer");
                }
                if ($('#welcome-text').hasClass('1')) {
                    textnum += 1;
                    if (textnum > 3) {
                        textnum = 0;
                    }
                    $('#welcome-description').hide().delay(50).fadeIn('slow');
                    $('#welcome-description').html(hometext[textnum]);
                    $('#current-count').html((textnum + 1).toString());
                    $('#current-count').hide().fadeIn(400);
                }
                if ($('#welcome-text').hasClass('2')) {
                    textnum += 1;
                    if (textnum > 12) {
                        textnum = 0;
                    }
                    $('#welcome-description').hide().delay(50).fadeIn('slow');
                    $('#welcome-description').html(projtext[textnum]);
                    $('#welcome-text').hide().delay(50).fadeIn('slow');
                    $('#welcome-text').html(projsubtext[textnum]);
                    $( ("#" + projpics[textnum]) ).css("visibility", "visible");
                    $( ("#" + projpics[textnum]) ).insertBefore( $( "#container" ) );
                    $( ("#" + projpics[textnum]) ).css("opacity", "0").fadeTo(20, 1);
                    setTimeout(function(){
                        $( ("#" + projpics[textnum]) ).prev().css("display", "none");
                    }, 400);
                    $('#current-count').html((textnum + 1).toString());
                    $('#current-count').hide().fadeIn(400);
                }
                if ($('#welcome-text').hasClass('3')) {
                    textnum += 1;
                    if (textnum > 3) {
                        textnum = 0;
                    }
                    $('#welcome-description').hide().delay(50).fadeIn('slow');
                    $('#welcome-description').html(blogtext[textnum]);
                    $('#welcome-text').hide().delay(50).fadeIn('slow');
                    $('#welcome-text').html(blogsubtext[textnum]);
                    $( ("#" + blogpics[textnum]) ).css("visibility", "visible");
                    $( ("#" + blogpics[textnum]) ).insertBefore( $( "#container" ) );
                    $( ("#" + blogpics[textnum]) ).css("opacity", "0").fadeTo(20, 1);
                    setTimeout(function(){
                        $( ("#" + blogpics[textnum]) ).prev().css("display", "none");
                    }, 400);
                    $('#current-count').html((textnum + 1).toString());
                    $('#current-count').hide().fadeIn(400);
                }
               }
            if (direction=="down") {
                if (!$('#welcome-text').hasClass("1")) {
            $('#seemore').css("opacity", "0").fadeTo(500, 1);
            $('.welcome').css("cursor", "pointer");
        }
        if ($('#welcome-text').hasClass('1')) {
            textnum -= 1;
            if (textnum == -1) {
                textnum = 3;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(hometext[textnum]);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        
        }
        if ($('#welcome-text').hasClass('2')) {
            textnum -= 1;
            if (textnum == -1) {
                textnum = 12;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(projtext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(projsubtext[textnum]);
            $( ("#" + projpics[textnum]) ).css("visibility", "visible");
            $( ("#" + projpics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + projpics[textnum]) ).css("opacity", "0").fadeTo(20, 1);
            setTimeout(function(){
                $( ("#" + projpics[textnum]) ).prev().css("display", "none");
            }, 400);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        
        }
        if ($('#welcome-text').hasClass('3')) {
            textnum -= 1;
            if (textnum == -1) {
                textnum = 3;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(blogtext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(blogsubtext[textnum]);
            $( ("#" + blogpics[textnum]) ).css("visibility", "visible");
            $( ("#" + blogpics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + blogpics[textnum]) ).css("opacity", "0").fadeTo(20, 1);
            setTimeout(function(){
                $( ("#" + blogpics[textnum]) ).prev().css("display", "none");
            }, 400);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        }
            }
            
            if (direction == "left") {
                if ($('#1').hasClass('fa-circle')) {
                    $('#2').trigger('click');
                    $('#2').trigger('hover').trigger('mouseenter');
                }
                else if ($('#2').hasClass('fa-circle')) {
                    $('#3').trigger('click');
                    $('#3').trigger('hover').trigger('mouseenter');
                }
                else if ($('#3').hasClass('fa-circle')) {
                    $('#4').trigger('click');
                    $('#4').trigger('hover').trigger('mouseenter');
                }
                else if ($('#4').hasClass('fa-circle')) {
                    $('#5').trigger('click');
                    $('#5').trigger('hover').trigger('mouseenter');
                }
            }
            
            if (direction == "right") {
                if ($('#5').hasClass('fa-circle')) {
                    $('#4').trigger('click');
                    $('#4').trigger('hover').trigger('mouseenter');
                }
                else if ($('#4').hasClass('fa-circle')) {
                    $('#3').trigger('click');
                    $('#3').trigger('hover').trigger('mouseenter');
                }
                else if ($('#3').hasClass('fa-circle')) {
                    $('#2').trigger('click');
                    $('#2').trigger('hover').trigger('mouseenter');
                }
                else if ($('#2').hasClass('fa-circle')) {
                    $('#1').trigger('click');
                    $('#1').trigger('hover').trigger('mouseenter');
                }
            }
            
        }
   });
    
    $('.fa-angle-double-down').click(function () {
        if (!$('#welcome-text').hasClass("1")) {
            $('#seemore').css("opacity", "0").fadeTo(500, 1);
            $('.welcome').css("cursor", "pointer");
        }
        if ($('#welcome-text').hasClass('1')) {
            textnum += 1;
            if (textnum > 3) {
                textnum = 0;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(hometext[textnum]);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        }
        if ($('#welcome-text').hasClass('2')) {
            textnum += 1;
            if (textnum > 12) {
                textnum = 0;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(projtext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(projsubtext[textnum]);
            $( ("#" + projpics[textnum]) ).css("visibility", "visible");
            $( ("#" + projpics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + projpics[textnum]) ).css("opacity", "0").fadeTo(20, 1);
            setTimeout(function(){
                $( ("#" + projpics[textnum]) ).prev().css("display", "none");
            }, 400);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        }
        if ($('#welcome-text').hasClass('3')) {
            textnum += 1;
            if (textnum > 3) {
                textnum = 0;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(blogtext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(blogsubtext[textnum]);
            $( ("#" + blogpics[textnum]) ).css("visibility", "visible");
            $( ("#" + blogpics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + blogpics[textnum]) ).css("opacity", "0").fadeTo(20, 1);
            setTimeout(function(){
                $( ("#" + blogpics[textnum]) ).prev().css("display", "none");
            }, 400);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        }
    });
    
    $('.fa-angle-double-up').click(function () {
        if (!$('#welcome-text').hasClass("1")) {
            $('#seemore').css("opacity", "0").fadeTo(500, 1);
            $('.welcome').css("cursor", "pointer");
        }
        if ($('#welcome-text').hasClass('1')) {
            textnum -= 1;
            if (textnum == -1) {
                textnum = 3;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(hometext[textnum]);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        
        }
        if ($('#welcome-text').hasClass('2')) {
            textnum -= 1;
            if (textnum == -1) {
                textnum = 12;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(projtext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(projsubtext[textnum]);
            $( ("#" + projpics[textnum]) ).css("visibility", "visible");
            $( ("#" + projpics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + projpics[textnum]) ).css("opacity", "0").fadeTo(20, 1);
            setTimeout(function(){
                $( ("#" + projpics[textnum]) ).prev().css("display", "none");
            }, 400);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        
        }
        if ($('#welcome-text').hasClass('3')) {
            textnum -= 1;
            if (textnum == -1) {
                textnum = 3;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(blogtext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(blogsubtext[textnum]);
            $( ("#" + blogpics[textnum]) ).css("visibility", "visible");
            $( ("#" + blogpics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + blogpics[textnum]) ).css("opacity", "0").fadeTo(20, 1);
            setTimeout(function(){
                $( ("#" + blogpics[textnum]) ).prev().css("display", "none");
            }, 400);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        }
    });
    
    
    $('.fa-circle-o').click(function () {
        textnum = 0;
        $('#welcome-text').removeClass();
        $('#welcome-text').addClass($(this).attr('id'));
        $('#welcome-text').html(smalltext[$(this).attr('id')-1]);
        if (!$('#welcome-text').hasClass("1")) {
            $('#seemore').fadeTo(20, 1);
            $('.welcome').css("cursor", "pointer");
        }
        if ($('#welcome-text').hasClass("1")) {
            $('#seemore').fadeTo(20, 0);
            $('.welcome').css("cursor", "");
        }
        if ($(this).attr('id') == "1") {
            section = 1;
            $('#arrows').css("display", "block");
            $('#welcome-description').html(hometext[0]);
            $('#welcome-description').removeClass('huge');
            $('#welcome-description').removeClass('semi-huge');
            $('#welcome-description').removeClass('not-as-huge');
            $( "#home-img" ).insertBefore( $( "#container" ) );
            $( "#home-img").css("opacity", "0").fadeTo(20, 1);
            setTimeout(function(){
                $( "#home-img").prev().css("display", "none");
            }, 400);
            $('#current-count').html("1");
            $('#total-count').html("4");
        }
        if ($(this).attr('id') == "2") {
            section = 2;
            $('#arrows').css("display", "block");
            $('#welcome-description').html(projtext[0]);
            $('#welcome-description').addClass('semi-huge');
            $( "#speeder-img" ).css("visibility", "visible");
            $( "#speeder-img" ).insertBefore( $( "#container" ) );
            $( "#speeder-img" ).css("opacity", "0").fadeTo(20, 1);
            setTimeout(function(){
                $( "#speeder-img").prev().css("display", "none");
            }, 400);
            $('#current-count').html("1");
            $('#total-count').html("13");
        }
        if ($(this).attr('id') == "3") {
            section = 3;
            window.location.href = "https://medium.com/george-saieed";
            $('body').css("display", "none");
            $('#arrows').css("display", "block");
            $('#welcome-description').html(blogtext[0]);
            $('#welcome-description').addClass('semi-huge');
            $( "#search-img" ).css("visibility", "visible");
            $( "#search-img" ).insertBefore( $( "#container" ) );
            $( "#search-img" ).css("opacity", "0").fadeTo(20, 1);
            setTimeout(function(){
                $( "#search-img").prev().css("display", "none");
            }, 400);
            $('#current-count').html("1");
            $('#total-count').html("4");
        }
        if ($(this).attr('id') == "4") {
            section = 4;
            $('#arrows').css("display", "none");
            $('#welcome-description').html(abouttext[0]);
            $('#welcome-description').addClass('huge');
            $( "#about-img" ).css("visibility", "visible");
            $( "#about-img" ).insertBefore( $( "#container" ) );
            $( "#about-img" ).css("opacity", "0").fadeTo(20, 1);
            setTimeout(function(){
                $( "#about-img").prev().css("display", "none");
            }, 400);
        }
        if ($(this).attr('id') == "5") {
            section = 5;
            $('#arrows').css("display", "none");
            $('#welcome-description').html("Get In Touch!");
            $('#welcome-description').addClass('huge');
            $( "#contact-img" ).css("visibility", "visible");
            $( "#contact-img" ).insertBefore( $( "#container" ) );
            $( "#contact-img" ).css("opacity", "0").fadeTo(20, 1);
            setTimeout(function(){
                $( "#contact-img").prev().css("display", "none");
            }, 400);
        }
        if ($("#welcome-text").html() != "Hi! I'm George Saieed.") {
        if ($(window).width() <= 423) {
                $("#welcome-description").css("font-size", "30px");
                $("#welcome-description").css("margin-right", "0px");
                $("#seemore").css("font-size", "13px");
                $("#seemore").css("margin-top", "-15px");
        }
        else if ($(window).width() <= 491) {
                $("#welcome-description").css("font-size", "35px");
                $("#welcome-description").css("max-width", "");
                $("#welcome-text").css("font-size", "15px");
        }
        else if ($(window).width() <= 645) {
                $("#welcome-description").css("font-size", "35px");
                $("#welcome-text").css("font-size", "15px");
        }
        else if ($(window).width() <= 709) {
                $("#welcome-description").css("font-size", "39px");
                $("#seemore").css("font-size", "15px");
                $("#seemore").css("margin-top", "-18px");
        }
        else if ($(window).width() <= 792) {
                $("#welcome-description").css("font-size", "45px");
        }
        else if ($(window).width() <= 914) {
                $("#welcome-description").css("font-size", "55px");
        }
        else if ($(window).width() > 914) {
                $("#welcome-description").css("font-size", "55px");
        }
        }
        
        //489, 15; 709, 19; 791, 21; 864, 22; 913, 25;
        if ($("#welcome-text").html() == "Hi! I'm George Saieed.") { 
            if ($(window).width() <= 489) {
                $("#welcome-description").css("font-size", "15px");
            }
            else if ($(window).width() <= 709) {
                $("#welcome-description").css("font-size", "19px");
            }
            else if ($(window).width() <= 791) {
                $("#welcome-description").css("font-size", "21px");
            }
            else if ($(window).width() <= 864) {
                $("#welcome-description").css("font-size", "22px");
            }
            else if ($(window).width() <= 913) {
                $("#welcome-description").css("font-size", "25px");
            }
            else if ($(window).width() > 913) {
                $("#welcome-description").css("font-size", "32px");
            }
        }
        
        blahblah=0;
            if ($("#welcome-text").html() != "Hi! I'm George Saieed.") {
    if($(window).width() < 580) {
        blahblah = 30;
    }
                if($(window).width() >= 580) {
        blahblah = 0;
    }
    } 
        welcomeheight = ($(window).height() - $('.welcome').height() - blahblah)/2;
        $('.welcome').css('top', welcomeheight.toString()+"px");
        var thingies = ["1","2","3","4","5","6"];
        $.each(thingies, function(index, value) {
            if (!$('#welcome-text').hasClass(value.toString())) {
                var labelnum = "#" + "label-" + value;
                $(labelnum.toString()).css("color", "#fff");
                $("#" + value).removeClass('fa-circle');
                $("#" + value).addClass('fa-circle-o');
            }
        });
        
        
        
    });
    
    $('.popup-close').click(function () {
        $('#popup-maybe').fadeOut(100);
    });
    
    $('.welcome').click(function () {
        if ($("#welcome-text").html() != "Hi! I'm George Saieed.") {
            if ($('#welcome-description').html() == "Church Website") {
                window.location.href = "projects.html?projectid=church";
            }
            if ($('#welcome-description').html() == "Speed ER") {
                window.location.href = "projects.html?projectid=speeder";
            }
            if ($('#welcome-description').html() == "Facebook Re-Design") {
                window.location.href = "projects.html?projectid=facebook";
            }
            if ($('#welcome-description').html() == "Accident Report") {
                window.location.href = "projects.html?projectid=accident";
            }
            if ($('#welcome-description').html() == "Smart Receipts") {
                window.location.href = "projects.html?projectid=receipt";
            }
            if ($('#welcome-description').html() == "Finals Generator") {
                window.location.href = "projects.html?projectid=finals";
            }
            if ($('#welcome-description').html() == "Low Polygon Art") {
                window.location.href = "projects.html?projectid=polygon";
            }
            if ($('#welcome-description').html() == "Presentation Design") {
                window.location.href = "projects.html?projectid=presentation";
            }
            if ($('#welcome-description').html() == "Calc Color") {
                window.location.href = "projects.html?projectid=calc";
            }
            if ($('#welcome-description').html() == "Instagram Logo Design") {
                window.location.href = "projects.html?projectid=instagram";
            }
            if ($('#welcome-description').html() == "Ultimate Horn") {
                window.location.href = "projects.html?projectid=horn";
            }
            if ($('#welcome-description').html() == "UW Poster") {
                window.location.href = "projects.html?projectid=uw";
            }
            if ($('#welcome-description').html() == "Past Websites") {
                window.location.href = "projects.html?projectid=past";
            }
            if ($('#welcome-description').html() == "Why am I terrible with computers?") {
                $('#anotha-one').html("<div class=\"popup-total\"> <label id=\"popup-title2\">'Terrible' With Computers?</label> <hr class = \"maline\"> <p class=\"popup-text2-top\">Google is arguably the most powerful tool currently available to the masses. As someone who has spent the past five years teaching himself various programming languages, I am perfectly aware of just how useful Google can be - if one wants to solve his own problems and is willing to use it.</p> <p class=\"popup-text2\">When most people have a question, whether it relates to cooking or interior design, they tend to consult Google. 'How do I update my kindle,' 'How do I block a number,' and 'How do I get Netflix on my TV' are just a few of the suggestions that present themselves when I enter the phrase 'How do I' into the popular search engine.</p> <p class=\"popup-text2\">If such a powerful utility is so widely available, why have I spent literally hundreds of hours helping people print papers, reset their wireless routers, and unfreezing their phones? Now, don't get me wrong, I'm not complaining - I don't mind helping people, and I actually enjoy it. But why does no one think to use Google when they encounter a technological problem? Why do some people insist that \"technology doesn't like me\" and walk away, leaving their problems for someone else to solve?</p> <p class=\"popup-text2\">Do people not know how to use Google? Or do they not want to, content with relegating the task of making minor fixes to their devices to those other people that are supposedly more 'technologically savvy?' I'm inclined to think that it's the latter. Am I just 'naturally better' with technology than most other people? No - I broke three computers, two printers, and a shredder while in middle school, installing various pieces of software onto the computer and overworking both the printers and shredder. But what set me apart from the rest of my peers was that I spent hours and hours trying to fix what I had broken - and eventually succeeded in doing so.</p> <p class=\"popup-text2\">At the high school I attended, when something broke, people immediately walked away and went to look for one of the members of the technology team, my friend (another 'technologically savvy' student), or me. Regardless of who responded, we simply fixed the problem and moved on. No effort was put into actually educating the student on how to solve the problem, so she could solve it on her own the next time it occurred. I'm not blaming the faculty here - I did the same, and the faculty had no further responsibilities past fixing the problem. In addition, there existed no classes to teach students the basics of using computers or any other available electronic devices. The existence of such a class might seem absurd, but in a world where the ability to use technology efficiently is crucial to productivity, such a simple class might be necessary to show people that anyone can become 'technologically savvy.'</p> <p class=\"popup-text2\">Why not teach students how to use their computers, printers, and phones? Most of them spend the majority of their time using them for work or play, and so the ability to actually operate what they use would be an incredibly helpful skill. While offering a class on how to use computers might be the most useful, if it is not the most practical course of action, those that deal with information technology at schools might teach how to fix instead of just fixing. Instead of just replacing the paper in a printer when you see the flashing yellow light, teach the student how to recognize that error and what to do in response in the future. Instead of just connecting that printer to the student's computer, teach them how to actually do it. And honestly, this applies to anyone - if you know how to use technology, don't just fix other people's problems, show them how to do it for themselves. </p> <p class=\"popup-text2\">Is this a niche issue? Maybe. But more and more schools are implementing a one-to-one program (each student must bring a laptop with them) and it makes no sense to force students to use a tool they can't fully use. In a world where technology is becoming increasingly prevalent, it's important that people enter the workforce with the capability to use technology and fix any minor problems that may arise. I'll leave you with a minor anecdote which illustrates the importance of what I am discussing - take the modern toilet, for instance. It has become so essential to our daily lives that just about everyone uses it everyday, several times a day. Imagine if you had a friend who couldn't use the toilet. Each time he used it, he would need someone to help him operate it. This would grow extremely cumbersome, for both parties involved, and it would be to his advantage to finally learn how to use the toilet. A ridiculous analogy? You might think so, but as we use technology to do more and more, it will become increasingly more important to be able to actually know what what we're using and how to fix it. So, the next time you go to ask someone for help with a wireless router that isn't working, maybe consider going to Google first.</p></div>");
                $('#popup-maybe').fadeIn(100);
            }
            if ($('#welcome-description').html() == "How do mobile apps really work?") {
                $('#anotha-one').html("<div class=\"popup-total\"><label id=\"popup-title2\">How Do Apps Work?</label> <hr class = \"maline\"> <p class=\"popup-text2-top\">Designing and developing a simple app is not as complicated as you would think. Here, I'll prove it to you. In this post, I'll walk you through the design and development process of <a class = 'blandlink' href = 'https://itunes.apple.com/us/app/calccolor/id1133313027?mt=8'>CalcColor</a>, an app I recently pushed to the Apple App Store. It's simple, I know, but that's part of why I created it (if you're only interested in how apps work in general, and couldn't care less about how I built a calculator, scroll down to 'How Apps Work').</p> <a href'=#'> <img class='img-responsive img-padding' src='postimg/post-2-1.png' alt=''> </a> <p class=\"popup-text2\">Now, on to the app building process. People like to think that those that build applications are geniuses who come up with ideas and then immediately sit down at the computer and start cranking out code, but nothing could be further from the truth. Most of the time, before even a single line of code is written, or any designs are made, everything needs to be planned out.</p> <p class=\"popup-text2\">Like most independent developers, I began by thinking through what CalcColor needed/what would have to be done. Because of its extreme simplicity, this was pretty straightforward. I wanted to build a calculator that was simple, functional, and that looked decent, allowing the user some control over its appearance. I thus decided I'd allow the user to change the app's background. Simple.</p> <p class=\"popup-text2\">For the actual calculator, I decided to keep it very basic, including the four basic operators (+, -, &#47;, &times;) and the &#94; and &radic; operators. The next thing I had to decide was how the actual calculator would function. Would it be similar to the built-in iOS calculator app, which evaluates expressions number by number (i.e. you type in 25, then +, and the 25 disappears, allowing you to type in another number), or would it allow the user to type in the entire expression (i.e. you type in 25 + 5 - 7 * (25 * 4)) before evaluation? I eventually settled on the latter, to set CalcColor apart from the stock iOS calculator.</p> <p class=\"popup-text2\">Having taken care of that question, I needed to decide on the app's appearance. Because gradients can make for good backgrounds, I decided to make most of the backgrounds available to the user gradient-based. Because I wanted the calculator to take up the entire phone screen, I decided to make the background selection on a separate page from the calculator. With regards to the calculator itself, I was aiming for a minimalistic design, so I decided to omit the traditional button borders, going for a calculator that contained no lines.</p> <p class=\"popup-text2\"> Having planned out the layout and features of the calculator, I needed to come up with some visual that would allow me to see what the end result might look like. For that, I used Sketch (quite possible the greatest designer's tool ever created). Similar to Photoshop, but significantly easier to use, Sketch allows you to draw various shapes and mess with their attributes in order to design what your web or mobile applications will look like before you begin coding them. And so I began 'drawing'.</p> <a href=\"#\"><img class=\"img-responsive img-padding\" src=\"postimg/post-2-2.png\" alt=\"\"></a> <p class=\"popup-text2\">Now that I had a sketch of what I wanted the calculator to look like, I went ahead and added in color and decided what gradients I wanted to use.</p> <a href=\"#\"><img class=\"img-responsive img-padding\" src=\"postimg/post-2-3.png\" alt=\"\"></a> <p class=\"popup-text2\">And, vuala, there you have it. On to building it!</p> <p class=\"popup-text2\">Before I talk about the specifics of coding CalcColor, I'll talk about what you really came here wanting to know - how apps work (this doesn't really include games - they're a bit different, as they use some animation and often times certain engines such as Unity - but more on that in another post). Most apps are comprised of pages which contain buttons, tables, and navigation bars (the bars at the bottom or top of many apps that are present no matter what page you navigate to). The main page of CalcColor, for instance, is comprised of twenty-three different buttons. One is slightly different than the other twenty-two (the settings button), in that it has a different function, and there is also some text at the top of the app, for showing the user their calculator input as well as the output after they hit the equals button. In addition, there is an image in the background. The second page contains twenty-one buttons, along with an image, and two bits of text - but unlike on the main page, these pieces of text <strong>never need to be modified</strong> - they won't ever change.</p> <p class=\"popup-text2\">So now we know what exactly our calculator app consists of. However, that doesn't explain how we get those buttons there, or how we make them do anything. Because this is an iOS app, XCode is the piece of software that allows us to answer these questions. In XCode, there is something called the storyboard. This is what allows us to view what items will be on our app pages, as well as add more items to those pages. It's basically a drag-and-drop system, and, while you can still forego the storyboard and do everything programmatically, it's much easier to just use the storyboard (I personally have never built an app without the storyboard). As you can see below, you can literally just search for a button, drag and drop it onto the storyboard, and change its text as you see fit. Among many other things, you can also add labels and text fields. Modifying the text in the buttons and labels is easy, as XCode allows us to simply double click them and change their text.</p> <a href=\"#\"><img class=\"img-responsive img-padding\" src=\"postimg/post-2-4.png\" alt=\"\"></a> <p class=\"popup-text2\">Okay, so we now have two pages with all the buttons and text we need (having simply dragged-and-dropped all those items and changed their text). We also dragged on something called an 'ImageView,' which is simply a fancy term for something that can contain an image of our choosing, and set the background to the default gradient that we wanted (exported as an image from Sketch earlier). If we run our app right now, however, we are presented with the default page (the calculator), and clicking the buttons do absolutely nothing - so our calculator is not functional, and we can't even get to the other page to change our background. This is clearly a problem, and that's what we'll fix next.</p> <p class=\"popup-text2\">So how do we make our buttons function? We definitely want our user to be able to change the background, so let's start with making our 'settings' button function.  How would this work? When the user taps the settings button (and this is a gross oversimplification), the screen of our phone sends our app a message that basically says 'Hey! The user tapped me! Do with that what you will.' So what we're going to do is make it so that when our app receives this message from the settings button, our app moves over to the other page. In XCode, how do we do this? We click the settings button, hold control, and drag over onto the other page, and we select Show (because we want clicking this button to show our page). And that's it! When you run the app, and you tap the button, the screen says, \"Hey! I've been tapped,\" and so the app says, \"Okay! I'm going to move the user to the other page you've linked this button to!\" On this page, we have a back button, and we can do the exact same thing to ensure that the user can tap this button to return to the main page.</p> <p class=\"popup-text2\">On to making our calculator function! The first thing we're going to do is link all of the stuff on our main page to our code. Let's start with the buttons that are our numbers. We can hold click our button, hold control once again, and drag over into our code. Doing so creates something called an action (you can ignore the <em>@IBAction</em>, <em>func</em>, and <em>sender:AnyObject</em> for now). Take the first action (seen below), seven (we linked the number seven button to this action). When seven is pressed, our screen tells our app, 'Hey! Seven was pressed!' When this happens, our app says, 'Cool! Make whatever action is connected to the seven button happen.' </p> <a href=\"#\"> <img class=\"img-responsive img-padding\" src=\"postimg/post-2-5.png\" alt=\"\"></a> <p class=\"popup-text2\">So now the app goes to do whatever we told it to do inside that action. For something like the seven button, what would we want it to do? Well, we'd want it to do two things. First, we'd want to show the user they'd clicked the number seven, by displaying a seven as text at the top of the calculator page. Next, we'd also want to save that number somehow (as the user is going to type more numbers and various operators, so we have to remember that the button seven was pressed so we can keep it for when they type more numbers, and for when they hit the equals button). So how do we make both of these happen?</p> <p class=\"popup-text2\">Let's save the number first. How do we do that? Well, we create something called a String. A string is, well, a string of characters, which, somewhat obviously, are characters in the English language. These characters can be letters, numbers, and various symbols (like %, ^, and #). We thus create a string called <em>inTyping</em> (don't ask me why I named it that). Would we want to do this inside our action? No? Why not? Because if we did, every time we clicked the button seven, we would create a new string called <em>inTyping</em>, wiping away what <em>inTyping</em> used to hold. Thus, we'll do it at the beginning of our program (the actual line is <em>var inTyping: String = \"\"</em> - this tells our app that we are creating a string of characters called inTyping that is currently empty). </p> <p class=\"popup-text2\">Okay, now we have a string called <em>inTyping</em> which can hold our seven. However, because the user will type several numbers and operators before he hits the equals button, we don't want to set that string equal to seven when the seven button is clicked - we want to ADD seven to that string, so if the user already typed five, hitting the seven button will give us a string of \"57\" instead of clearing the five and just giving us \"7\". How do we do that? Well, in our action for when the seven button is pressed, we use <em>inTyping += \"7\"</em>. This is shorthand for <em>inTyping = inTyping + \"7\"</em>, which is just saying, 'Hey, take the current value of inTyping and the number \"7\" to it' (add in the sense that it tacks 7 on to 5, such that \"5\" + \"7\" = \"57\" and not \"12\"). </p> <p class=\"popup-text2\">Excellent! So if we do this for all the buttons, when we click any button, it adds the character of that button onto the end of our string of characters. However, nothing is appearing at the top of the calculator! The number is still stuck on 0. This is because, while we've saved our string, we haven't told our app to display it. We need a way to tell our app to modify the text at the top of our calculator. How do we do this? Well, we click the text, click control, and drag over onto our code. This creates something called an <em>@IBOutlet</em> (again, don't worry about the actual meaning of this for now). Basically this tells our code, 'Look! There's some text in our app, and if we want to do anything at all with this text, we can just call the name (in this case <em>resultField</em>) that we assigned this text, and then we can do what we want with it!' So each time we add a new number or symbol to <em>inTyping</em>, we also want to update the text. So inside all the actions for our buttons, we can type <em>resultField.text = inTyping</em>. Simply put, every time we click any of our calculator buttons, the text of our <em>resultField</em> will be set equal to our string <em>inTyping</em>. Now, when we click the seven button, we save seven to our string (this has to be done first!), and display it up top in our calculator's text field.</p> <p class=\"popup-text2\">From here, it's fairly straightforward what should be done. We do basically the exact same thing with the operators, so that if we click the \"+\" button, we save it to our string and display it. The same goes for the other operators. When we click the \"=\" button, we take the full string (for example, <strong>\"5+7+9-3/6\"</strong>), and tell the programming language we're using (in this case, Swift) to compute the result of that string. We then save that to <em>inTyping</em> and show it in our text field, clearing what was previously there. For the delete button, we delete the last character of <em>inTyping</em> and update our text field. For the clear button, we delete everything in <em>inTyping</em> and set our text field to zero.</p> <a href=\"#\"><img class=\"img-responsive img-padding\" src=\"postimg/post-2-6.png\" alt=\"\"></a> <p class=\"popup-text2\">For the backgrounds, we do the same thing - we create actions in our code for each individual background button, and when that specific button is clicked, we tell our app to change the background on both pages to that background. Because we probably want to remember what background was selected even if the user leaves the app, we also save that background somewhere in the app where it stays even if the user quits the app. And really, that's basically it!</p> <p class=\"popup-text2\">If you realized that there would be several major problems with CalcColor if this is all we did to build it, then you're well on your way to thinking like a programmer. For one, we can currently type any of the numbers and operators in any order as many times as we like. For example, we could type <strong>\"77...+++-/)\"</strong>. This makes no sense, obviously, and if we allow the user to hit the equal button having typed this in, our app will crash - our programming language doesn't know how to compute expressions that aren't valid. We would also need to make sure all of our parentheses match. In addition, the square root operator (√) and the multiplication operator (×) can't be read as part of our expression when being calculated either - we have to replace them with \"<em>sqrt</em>\" and \"*\" respectively. Lastly, because of the way Swift works, if the user were to type in <strong>\"3/4\"</strong> or <strong>\"5/3\"</strong>, he would get an answer of <strong>\"0\"</strong> and <strong>\"1\"</strong>, respectively. Why? Because (and again, this is a gross oversimplification) if both numbers don't have decimal points, Swift thinks our answer shouldn't have decimal points either, and so it immediately rounds down our result (even \"1.99\" would be rounded down to \"1\"). Clearly, we can't have this happen either. I'm not going to tell you how exactly I solved these problems, but if you're interested, try and solve them! You don't have to come up with the code required to solve them, but rather think through the logic required to solve them (i.e. if the user has typed a decimal point, then we don't want them to be able to hit the decimal point again, at least until they click an operator button). If you're really geeky (like me), feel free to <a class='blandlink' href = \"mailto:gs@georgesaieed.com\">email me</a> with how you'd solve some of these problems!</p> </div>");
                $('#popup-maybe').fadeIn(100);
            }
            if ($('#welcome-description').html() == "Power A House With A Bike") {
                $('#anotha-one').html("<div class=\"popup-total\"><label id=\"popup-title2\">Power Your Own House?</label> <hr class = \"maline\"> <p class=\"popup-text2-top\">I recently had Mark P. from Pittsburgh ask me how bicycles work - while he was asking as a joke, I decided I'd write about something related. So, <strong> how much power does a bicycle generate</strong>? And what could you power off of that energy?</p> <p class=\"popup-text2\">If you're an average, decently fit person who is casually riding your bike across flat terrain, you can generate about 100-150 watts of power. If you're a hardcore biker (i.e. you compete in the Tour de France), you can generate about 250 watts of power, and if you're really going hard while biking uphill, you can get up to 400 - 500 watts of power in.</p> <p class=\"popup-text2\">For the purposes of this post, though, I'm going to assume you're an average person and not a ripped athletic biker (a fair assumption, I think). So let's say, biking hard, you can generate 150 watts of power as you bike. So what could you power if you generated 150 watts of power for an hour? Well, for one, <strong>you could probably power a light bulb</strong> (for instance, incandescent lightbulbs draw about 100 watts of energy) for an hour. Ceiling fans also tend to use between 25 - 90 watts of power (depending on their size and speed), so you could probably also power a ceiling fan. Laptops require about 45 watts of power to stay on, while a smaller monitor (17\" LCD, for instance) requires about 40 watts of power - so you could probably power your laptop and an external monitor (not that that would be any good, as you'd be too busy biking).</p> <p class=\"popup-text2\"><strong>Could you power all of the appliances in a house?</strong> Clearly not, if you wouldn't be able to power two lightbulbs (200 watts). Let's say you were to pedal an hour a day, every day, for thirty days. You'd generate about 100 * 30 watts, or 3000 watts (3 kWh). The typical family uses about 920 kWh per month, so you wouldn't even come close to generating enough power to keep your house running. Okay, fine. Let's pretend, though, that you bike 24 hours per day. You'd generate about 100 * 24 * 30 watts, or 72,000 watts (72 kWh). That's still less than 10% of what you'd need to generate. However, we absolutely don't want to be biking 24 hours a day, so let's assume we bike three hours a day (100 * 3 * 30 = 9 kWh for the month).</p> <p class=\"popup-text2\"> <strong>How fast would you have to bike in order to get that 9 kWh up to 920 kWh?</strong> Assuming you weigh 160 pounds, and that your bike weighs 20 pounds, generating those 9 kWh would require you to bike at 15 mph every day for three hours. To generate the 920 kWh required to power a house, you would have to bike at a constant 77 mph, for three hours nonstop every. single. day. To put that in perspective, the Earth's circumference is approximately 24,901 miles. After 111 days of biking at that speed, for three hours each day, you'd have biked enough miles to go around the earth. Fine. For the sake of argument, let's assume you could bike every day for three hours at 77 mph. <strong>How much food would you have to eat to keep biking?</strong> Well, biking at 77 mph, you'd burn approximately 105,000 calories after three hours. To put that in perspective, burning a pound of fat requires you to lose 3,500 calories. After biking for three hours, you'd have lost <strong>35 pounds</strong>. If you don't want to lose weight, you'd have to eat 35,000 calories per hour. A McDonald's regular cheeseburger is approximately 313 calories - so you'd need to eat about 1.85 cheeseburgers <strong>per minute</strong> so as not to lose weight. </p> <p class=\"popup-text2\"><strong>In conclusion</strong>: please don't try to power your house using your bicycle.</p> </div>");
                $('#popup-maybe').fadeIn(100);
            }
            if ($('#welcome-description').html() == "Run At Light Speed") {
                $('#anotha-one').html("<div class=\"popup-total\"><label id=\"popup-title2\">Run At Light Speed</label> <hr class = \"maline\"> <p class=\"popup-text2-top\">The article title pretty much says it all - <strong>how much fun would it be to run at the speed of light?</strong> </p> <p class=\"popup-text2\">Let me preface the rest of this article by saying that, if you were ever to run at the speed of light, you'd probably <strong>rip every muscle in your body</strong> and hit something so quickly and with such force that you'd be <strong>squashed like a bug</strong>. It's also important to note that you can't run at the speed of light. But just for kicks, let's assume neither of these are problems and that we can run at the speed of light. </p> <p class=\"popup-text2\">First things first - how much food would you have to eat in order to keep running at the speed of light without dying of malnutrition? Well, light travels at <strong>186,000 mi/sec</strong> or <strong>669,600,000 mph</strong>. So you'd be running at a lovely 669,600,000 mph. Splendid. Now, let's assume you're going to be running at the speed of light for an hour (because why not, right)? Well, according to this random treadmill calculator I found on the internet (and we all know everything on the internet is accurate), running at that speed would cause a 180 pound male to burn <strong>88,230,305,606 calories</strong>. So you'd be burning 88 billion calories. Lovely. Now, I don't know how many of you have been to the Cheesecake Factory, but they sell a cake they call the <strong>Chocolate Tower Truffle Cake</strong> (it's actually quite amazing in every possible way). One slice is <strong>1,680 calories</strong> (totally worth it), and an entire cake is 12 slices, or <strong>20,160 calories</strong>. In order to keep up with your caloric burn, you'd need to eat <strong>88 billion\/20 thousand calories</strong> per hour, or <strong>4,376,503 cakes per hour</strong>. That's <strong>1,216 cakes <em>per second</em></strong>. </p> <img class=\"img-responsive img-padding\" src=\"postimg/post-4-1.jpg\" alt=\"\"> <p class=\"popup-text2\">That is ABSURD. That's more than <strong>16 times</strong> what blue whales eat in <strong>a single day</strong>. Not to mention that due to the extreme stress you'd be under while running that you'd probably vomit the food back up at the same rate at which you ate it. </p> <p class=\"popup-text2\">Fine, you'd have to eat, like, <strong>a lot</strong>. So how far could you run in that hour (or a little bit longer)? If you ran for <strong>67 minutes</strong> (assuming you ran in a straight line and had something to run on), you would be able to run <strong>from the Earth to Jupiter... <em>and back</em></strong>. </p> <p class=\"popup-text2\">Remember how in the last article, I said that the average family consumed approximately 920 kWh of energy per month? Well, in 2013, the entire United States consumed approximately <strong>25,451 TWh</strong> of energy, or <strong>25,451,000,000,000 kWh</strong> of energy (25 trillion kWh, if that wasn't clear). Performing all the calculations, if you could harness the energy produced from your run, you would produce enough energy to power <strong>the entire United States</strong> for a solid <strong>thirty seconds</strong>. </p> <p class=\"popup-text2\"><strong>In conclusion</strong>, light (and the Flash) <em>move really, really, REALLY fast</em>.</p> </div>");
                $('#popup-maybe').fadeIn(100);
            }
            if ($('#welcome-description').html() == "So Who Am I?") {
                $('#anotha-one').html("<div class=\"popup-total\"><label id=\"popup-title\">So Who Am I?</label> <hr class = \"maline\"> <p class=\"popup-text\">I've broken three computers, two shredders, a printer, and a wireless router. I know you're judging me now, so I'll just say I was both a very foolish and very curious middle school child (and I'll have you know I fixed two of those computers). And that is how I taught myself to fix the everyday problems people face with their phones, computers, and the multitude of other gadgets out there. From there, I found programming, and I immediately fell in love. Over the course of five years, I proceeded to teach myself Java, Python, Ruby, Rails, C#, Swift, R, and Stata, building a multitude of web and mobile applications for all kinds of different devices in the process. Later down the line, I began to look into design, teaching myself how to use Photoshop and Sketch. On July 21 and 22, 2016, I taught myself HTML(5), CSS(3), Javascript, jQuery, and bootstrap, spending about 10 hours each day familiarizing myself with front-end development languages.</p> <p class=\"popup-text\">I've released one app on the Windows App Store (Epichess), two apps on the iOS App Store (CalcColor and UltimateHorn), and am currently working as a Full Stack Designer for Inventory Connection, LLC, to design and build the front-end for their main product. I am constantly looking to learn more about everything and anything (especially tech), and so I often build random applications (see my GitHub) and read as much as I can. I am a neuroscience major at the University of Chicago (I'm very interested in machine learning, deep neural nets, and artificial intelligence), and you can often find me helping other people with their computer or phone troubles. I hope to have a profound impact on the world, and my dream is to one day found my own start-up.</p></div>");
                $('#popup-maybe').fadeIn(100);
            }
            if ($('#welcome-description').html() == "Get In Touch!") {
                $('#anotha-one').html("<div class=\"popup-total\"><label id=\"popup-title\">Contact Me</label> <div class=\"form-pad\"><form id=\"da-form\" name=\"sentMessage\" action = \"https://formspree.io/gs@georgesaieed.com\" method=\"POST\" novalidate> <div class=\"row control-group\"><div class=\"form-group col-xs-12 floating-label-form-group controls\"> <label>Name</label> <input type=\"text\" class=\"form-control\" placeholder=\"Name\" id=\"name\" required data-validation-required-message=\"Please enter your name.\" name = \"PersonName\"><p class=\"help-block text-danger\"></p></div></div> <div class=\"row control-group\"><div class=\"form-group col-xs-12 floating-label-form-group controls\"> <label>Email Address</label> <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" id=\"email\" required data-validation-required-message=\"Please enter your email address.\" name = \"_replyto\"><p class=\"help-block text-danger\"></p> </div> </div> <div class=\"row control-group\"> <div class=\"form-group col-xs-12 floating-label-form-group controls\"> <label>What's Your Question?</label> <textarea rows=\"5\" class=\"form-control\" placeholder=\"What's Your Question?\" id=\"message\" required data-validation-required-message=\"Please enter a message.\" name = \"PersonQuestion\"></textarea> <p class=\"help-block text-danger\"></p> </div> </div> <br> <div id=\"success\"></div> <div class=\"row\"> <div class=\"form-group2 col-xs-12\"> <input type=\"text\" name=\"_gotcha\" style=\"display:none\" /> <input type=\"hidden\" name=\"_next\" value=\"/?popup=thanks\" /><button type=\"submit\" id='contact-submit' class=\"btn btn-default\">Submit!</button></div> </div></form></div></div>");
                $('#popup-maybe').fadeIn(100);
            }
        }
    });
    
       
});
                  