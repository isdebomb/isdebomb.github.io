$(document).ready(function(){ 
    var prevWidth = $(window).width();

    
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
        if (getUrlVars()["send"]=="thanks") {
            $('#about').css("opacity", "0");
            $('#de-members').fadeOut(0);
            $('#de-repertoire').fadeOut(0);
            $('#de-contact').fadeOut(0);
            $('#de-about').fadeOut(0);
            $('#de-thanks').fadeIn(500);
        }
    });
    
    $('.mobile-menu').click(function () {
        $('#menu').css("visibility", "visible");
        $('.info').fadeOut(0)
        $('#menu').fadeOut(0)
        $(this).fadeOut(200);
        $('#menu').fadeIn(500);
        $('html,body').animate({
            scrollTop: $("#menu").offset().top
        });
        
    });
    
    $('.menu-item').click(function () {
        if($(window).width() < 797) {
            $('#menu').fadeOut(0)
            $('.mobile-menu').fadeIn(500);
        }
        $('.person').css("border", "none");
    });
    
    $('#facebook').click(function () {
        window.open('https://www.facebook.com/UChicagoRunforCover/', '_blank');
    });
    $('#fb-ico').click(function () {
        window.open('https://www.facebook.com/UChicagoRunforCover/', '_blank');
    });
    
    $('#video').click(function () {
        window.open('https://play.spotify.com/artist/1WN22dBwn6fM3biZufox5W', '_blank');
    });
    $('#vid-ico').click(function () {
        window.open('https://play.spotify.com/artist/1WN22dBwn6fM3biZufox5W', '_blank');
    });
    
    $('#email').click(function () {
        window.open('mailto:uofcrunforcover@gmail.com');
    });
    $('#em-ico').click(function () {
        window.open('mailto:uofcrunforcover@gmail.com');
    });
    
    $('#facebook-2').click(function () {
        window.open('https://www.facebook.com/UChicagoRunforCover/', '_blank');
    });
    $('#fb-ico-2').click(function () {
        window.open('https://www.facebook.com/UChicagoRunforCover/', '_blank');
    });
    
    $('#video-2').click(function () {
        window.open('https://play.spotify.com/artist/1WN22dBwn6fM3biZufox5W', '_blank');
    });
    $('#vid-ico-2').click(function () {
        window.open('https://play.spotify.com/artist/1WN22dBwn6fM3biZufox5W', '_blank');
    });
    
    $('#email-2').click(function () {
        window.open('mailto:uofcrunforcover@gmail.com');
    });
    $('#em-ico-2').click(function () {
        window.open('mailto:uofcrunforcover@gmail.com');
    });
    
    $('#about-nav').click(function () { 
        $('.person').css("transform", "scale(1)"); 
        $('#about').css("opacity", "1");
        $('#members').css("opacity", "0");
        $('#repertoire').css("opacity", "0");
        $('#contact').css("opacity", "0");
        $('#de-members').fadeOut(0);
        $('#de-repertoire').fadeOut(0);
        $('#de-contact').fadeOut(0);
        $('#de-thanks').fadeOut(0);
        $('#de-about').fadeIn(500);
    });
    
    $('#members-nav').click(function () { 
        $('.person').css("transform", "scale(1)"); 
        $('#about').css("opacity", "0");
        $('#members').css("opacity", "1");
        $('#repertoire').css("opacity", "0");
        $('#contact').css("opacity", "0");
        $('#member-information').fadeOut(0);
        $('#de-about').fadeOut(0);
        $('#de-repertoire').fadeOut(0);
        $('#de-contact').fadeOut(0);
        $('#de-thanks').fadeOut(0);
        $('#de-members').fadeIn(500);
    });
    
    $('#repertoire-nav').click(function () { 
        $('.person').css("transform", "scale(1)"); 
        $('#about').css("opacity", "0");
        $('#members').css("opacity", "0");
        $('#repertoire').css("opacity", "1");
        $('#contact').css("opacity", "0");
        $('#de-members').fadeOut(0);
        $('#de-about').fadeOut(0);
        $('#de-contact').fadeOut(0);
        $('#de-thanks').fadeOut(0);
        $('#de-repertoire').fadeIn(500);
    });
    
    $('#contact-nav').click(function () { 
        $('.person').css("transform", "scale(1)"); 
        $('#about').css("opacity", "0");
        $('#members').css("opacity", "0");
        $('#repertoire').css("opacity", "0");
        $('#contact').css("opacity", "1");
        $('#de-members').fadeOut(0);
        $('#de-repertoire').fadeOut(0);
        $('#de-about').fadeOut(0);
        $('#de-thanks').fadeOut(0);
        $('#de-contact').fadeIn(500);
    });
    
    $('.person').click(function () {
        $('.person').css("transform", "scale(1)"); 
        $('.person').css("z-index", "9"); 
        $(this).css("transform", "scale(1.8)");
        $(this).css("z-index", "10");
        $('.person').css("border", "none"); 
        $(this).css("border", "solid 3px white");
        $("html, body").animate({ scrollTop: $(document).height() }, 200);
    });
    
    $('.ziv').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Ziv Kraus");
        $('#place').html("Musical Director | Stamford, CT | 4th Year");
        $('#year').html("<strong>Major:</strong> Psychology");
        $('#fav-song').html("<strong>Audition Song:</strong> ????");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> ????");
        $('#quote').html("<strong>Favorite Quote:</strong> ????");
        $('#her-bio').html("????");
        $('#member-information').fadeIn(500);
    });
    
    $('.yoo').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Alex Yoo");
        $('#place').html("President | ???? | 3rd Year");
        $('#year').html("<strong>Major:</strong> Biology");
        $('#fav-song').html("<strong>Audition Song:</strong> ????");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> ????");
        $('#quote').html("<strong>Favorite Quote:</strong> ????");
        $('#her-bio').html("????");
        $('#member-information').fadeIn(500);
    });
    
    $('.ale').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Alessandro Clark-Ansani");
        $('#place').html("Vice President | Forrest Hills, NY | 2nd Year");
        $('#year').html("<strong>Major:</strong> Political Science");
        $('#fav-song').html("<strong>Audition Song:</strong> ????");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> ????");
        $('#quote').html("<strong>Favorite Quote:</strong> ????");
        $('#her-bio').html("????");
        $('#member-information').fadeIn(500);
    });
    
    $('.will').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Will Shore");
        $('#place').html("Productivity Manager | New York City, NY | 3rd Year");
        $('#year').html("<strong>Major:</strong> Physics");
        $('#fav-song').html("<strong>Audition Song:</strong> ????");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> ????");
        $('#quote').html("<strong>Favorite Quote:</strong> ????");
        $('#her-bio').html("????");
        $('#member-information').fadeIn(500);
    });
    
    $('.sun').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Chris Sun");
        $('#place').html("???? | 3rd Year");
        $('#year').html("<strong>Major:</strong> ????");
        $('#fav-song').html("<strong>Audition Song:</strong> ????");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> ????");
        $('#quote').html("<strong>Favorite Quote:</strong> ????");
        $('#her-bio').html("????");
        $('#member-information').fadeIn(500);
    });
    
    $('.george').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("George Saieed");
        $('#place').html("Social Chair | Pittsburgh, PA | 2nd Year");
        $('#year').html("<strong>Major:</strong> Neuroscience");
        $('#fav-song').html("<strong>Audition Song:</strong> I'm So Sorry by Imagine Dragons ");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Binary");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Cherish those who seek the truth, but beware of those who find it,' by Voltaire");
        $('#her-bio').html("When not singing with RfC, you can find George doing research in a computational neuroscience lab, reading about technology, playing piano, programming, coding, doing more coding, and basically just living and breathing all things electronic.");
        $('#member-information').fadeIn(500);
    });
    
    $('.ben').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Ben Donvan");
        $('#place').html("Treasurer | Washington, DC | 2nd Year");
        $('#year').html("<strong>Major:</strong> History");
        $('#fav-song').html("<strong>Audition Song:</strong> ????");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Rainbow Eucalyptus");
        $('#quote').html("<strong>Favorite Quote:</strong> 'You've gotta pay the troll toll,' in It's Always Sunny in Philadelphia");
        $('#her-bio').html("Sadbois are so 2016. 2017 is the year of the melancholiman.");
        $('#member-information').fadeIn(500);
    });
    
    $('.chavez').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Chris Chavez");
        $('#place').html("Olathe, KS | 2nd Year");
        $('#year').html("<strong>Major:</strong> ????");
        $('#fav-song').html("<strong>Audition Song:</strong> ????");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> ????");
        $('#quote').html("<strong>Favorite Quote:</strong> ????");
        $('#her-bio').html("????");
        $('#member-information').fadeIn(500);
    });
    
    $('.alex').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Alex Hummels");
        $('#place').html("West Lafayette, IN | 1st Year");
        $('#year').html("<strong>Major:</strong> Undecided");
        $('#fav-song').html("<strong>Audition Song:</strong> Take On Me, by a-ha");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Rainbow Eucalyptus");
        $('#quote').html("<strong>Favorite Quote:</strong> 'Are you a cop? Legally you have to tell me if you're a cop,' by Shakespeare");
        $('#her-bio').html("I love science, running, chipotle, and dissonance. The best thing in this world (besides a chipotle quesarito) is parallel tritones. Anyone who has performed the Battle of Jericho by Moses Hogan knows what I mean. Also, please never clap on beats 1 and 3 (in 4/4) around me. It makes me want to vomit. ");
        $('#member-information').fadeIn(500);
    });
    
    $('.michael').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Michael Hanna");
        $('#place').html("???? | 1st Year");
        $('#year').html("<strong>Major:</strong> ????");
        $('#fav-song').html("<strong>Audition Song:</strong> ????");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> ????");
        $('#quote').html("<strong>Favorite Quote:</strong> ????");
        $('#her-bio').html("????");
        $('#member-information').fadeIn(500);
    });
    
    $('.wenye').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Wayne Loh Wen Ye");
        $('#place').html("????, Singapore | 1st Year");
        $('#year').html("<strong>Major:</strong> ????");
        $('#fav-song').html("<strong>Audition Song:</strong> ????");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> ????");
        $('#quote').html("<strong>Favorite Quote:</strong> ????");
        $('#her-bio').html("????");
        $('#member-information').fadeIn(500);
    });
    
    $('.yu').click(function () {
        $('#member-information').fadeOut(0);
        $('#name').html("Alex Yu");
        $('#place').html("???? | 1st Year");
        $('#year').html("<strong>Major:</strong> Economics");
        $('#fav-song').html("<strong>Audition Song:</strong> ????");
        $('#weapon').html("<strong>Favorite Tree Type:</strong> Christmas");
        $('#quote').html("<strong>Favorite Quote:</strong> ????");
        $('#her-bio').html("Alex is so happy to be in Run For Cover. Outside of a cappella, Alex enjoys making playlists, eating pizza, and being better than Alex Yoo.");
        $('#member-information').fadeIn(500);
    });
});

    
    $(window).resize(function() {
        if($(window).width() > 796) {
                $('.mobile-menu').fadeOut(0);
                $('#menu').fadeIn(0);
                if ($('.info').css("opacity") == 0) {
                    $('#about').css("opacity", "0");
                }
        }
        if($(window).width() < 797 && prevWidth > 796 && $('.info').css("opacity") != 0) {
            $('.mobile-menu').fadeIn(500);
            $('#menu').fadeOut(0);
        }
        var nw = $(window).width();
        //compare new and old width      
        prevWidth = nw;
    });