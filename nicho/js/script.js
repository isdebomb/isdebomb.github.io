$(document).ready(function(){
    window.alert("updated 11:10AM on 10/26");
    minheight = $(window).height;
    $(".section").css("min-height", minheight + "px");

    var type = window.location.hash.substr(1);
    if (type == "thanks") {
        $(".thanks").fadeTo(500, 1);
    }

    var fadings = $(".fading");
    var sections = $(".section");
    var scroll = $(window).scrollTop();
    if (scroll != 0) {
        $(".perm-shadow").css("opacity", "0.02");
    }

    if ($(window).width() > 640) {
        sections.each(function() {
            currentPage = "#" + $(this).attr('id') + "n";
            currentBrain = "#" + $(this).attr('id') + "b";
            
            var top = $(this).offset().top - 1;
            var bottom = $(this).offset().top + $(this).height() - 1;
            if (scroll < bottom && scroll > top) {
                $('.brain-title').css("opacity", "0");
                $('.innerbrain').css("opacity", "0");
                $(currentPage).css("opacity", "1");
                $(currentBrain).css("opacity", "1");
            }
        
        });
    }

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        $(".perm-shadow").css("opacity", "0.02");
        if (scroll == 0) {
            $(".perm-shadow").css("opacity", "0.09");
        }

        if ($(window).width() > 640) {
            var summary_offset = $("#summary").offset().top;
            if ( scroll > summary_offset ) {
                if($("#navbar").css("opacity") == "1")
                    $('#navbar').fadeTo(300, 0)
            }

            if ( scroll < summary_offset) {
                if($("#navbar").css("opacity") == "0")
                    $('#navbar').fadeTo(300, 1)
            }
        }

        //the viewport's height
        var vpheight = document.documentElement.clientHeight;
        //loop through all interested elements
        fadings.each(function(){
            //get the rect of the current element
            var r = this.getBoundingClientRect();
            //the current element's height  
            var thisHeight = $(this).height();
            //check if the element is completely out of the viewport area
            //to just ignore it (save some computation)
            if(thisHeight + r.top < 0 || r.top > vpheight) return true;
            //calculate the opacity for partially visible/hidden element
            var opacity = Math.max(0, Math.min(1, 
                        (r.top >= 0 ? vpheight - r.top : thisHeight - Math.abs(r.top)) / vpheight));
            //set the opacity
            $(this).css("opacity", opacity);
        });  

        if ($(window).width() > 640) {
            sections.each(function() {
                currentPage = "#" + $(this).attr('id') + "n";
                currentBrain = "#" + $(this).attr('id') + "b";
                
                var top = $(this).offset().top - 1;
                var bottom = $(this).offset().top + $(this).height() - 1;
                if (scroll < bottom && scroll > top) {
                    $('.brain-title').css("opacity", "0");
                    $('.innerbrain').css("opacity", "0");
                    $(currentPage).css("opacity", "1");
                    $(currentBrain).css("opacity", "1");
                }
            
            });
        }

        fadings.each(function(){
            
            //get the rect of the current element
            var r = this.getBoundingClientRect();
            //the current element's height  
            var thisHeight = $(this).height();
            //check if the element is completely out of the viewport area
            //to just ignore it (save some computation)
            if(thisHeight + r.top < 0 || r.top > vpheight) {
                // currentPage.css("opacity", "0");
                // currentBrain.css("opacity", "0");
                return true;
            }
            //calculate the opacity for partially visible/hidden element
            var opacity = Math.max(0, Math.min(1, 
                        (r.top >= 0 ? vpheight - r.top : thisHeight - Math.abs(r.top)) / vpheight));
            
        });  
        
        
    });

    if ($(window).width() > 640) {
        $(".sliding-link").click(function(e) {
            e.preventDefault();
            var aid = $(this).attr("href");
            $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
        });

        $(".mini-brain").click(function(e) {
            var aid = $(this).attr("href");
            $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
        });
    }

    $(".exit").click(function(e) {
        $(".thanks").fadeOut(500, 0);
    });

    if ($(window).width() > 640) {

        $(".innerbrain").hover(function(e) {
            $(this).css("opacity", 1);
            name = "#" + $(this).attr('id').substring(0,$(this).attr('id').length-1) + "n";
            $(name).css("opacity", 1);

        }, function() {
            $(this).css("opacity", 0);
            name = "#" + $(this).attr('id').substring(0,$(this).attr('id').length-1) + "n";
            $(name).css("opacity", 0);
        });

    }

    $(".combo").click(function(e) {
        state = true;
        $(this).children().each(function() {
            if($(this).is("img")) {
                if($(this).css("transform") == "none") {
                    state = false;
                    $(this).css("transform", "scaleY(-1)");
                } else {
                    state = true;
                    $(this).css("transform", "none");
                }
            }
        });
        $(this).siblings().each(function() {
            if($(this).is("p")) {
                if(state) {
                    $(this).slideDown(300);
                } else {
                    $(this).slideUp(300);
                }
            }

            if($(this).is("div")) {
                if(state) {
                    $(this).parent().css("display", "block").delay(300);
                    $(this).slideDown(300);
                } else {
                    $(this).slideUp(300).delay(600);
                    $(this).parent().css("display", "inline-block");
                }
            }
        });
    });

    var people = {
        "nicho" : ['Nicholas Hatsopoulos, Ph.D.', 'Principal Investigator', 'nicho@uchicago.edu', 'bio', '/img/bigpic', ''],
        "rebecca" : ['Rebecca Junod, B.S.', 'Lab Manager', 'junodrm@uchicago.edu', 'bio', '/img/bigpic', ''],
        "carrie" : ['Carrie Balcer, B.S.', 'Placeholder', 'cabalcer@uchicago.edu', 'bio', '/img/bigpic', ''],
        "karthikeyan" : ['Karthikeyan Balasubramanian, Ph.D.', 'Placeholder', 'karthikeyanb@uchicago.edu', 'bio', '/img/bigpic', ''],
        "jeff" : ['Jeff Walker, Ph.D.', 'Placeholder', 'walkerjd@uchicago.edu', 'bio', '/img/bigpic', ''],
        "vasileios" : ['Vasileios Papadourakis, Ph.D.', 'Placeholder', 'vpapadourakis@uchicago.edu', 'bio', '/img/bigpic', ''],
        "alex" : ['Alex Lee, M.S.', 'Placeholder', 'leealex@uchicago.edu', 'bio', '/img/bigpic', ''],
        "marina" : ['Marina Sundiang, B.S.', 'Placeholder', 'sundiang@uchicago.edu', 'bio', '/img/bigpic', ''],
        "wei" : ['Wei Liang, M.S.', 'Placeholder', 'weiliang@uchicago.edu', 'bio', '/img/bigpic', ''],
        "dalton" : ['Dalton Moore, B.S.', 'Placeholder', 'daltonm@uchicago.edu', 'bio', '/img/bigpic', ''],
        "caleb" : ['Caleb Sponheim, B.S.', 'Placeholder', 'calebsponheim@uchicago.edu', 'bio', '/img/bigpic', ''],
        "george" : ['George Saieed', 'Undergrad Research Assistant', 'gs@georgesaieed.com', 'bio', '/img/bigpic', 'georgesaieed.com']
    }

    $(".small-person").click(function(e) {
        $(".small-person").removeClass("chosen");
        $(this).addClass("chosen");

        $("#pname").html(people[$(this).attr("id")][0]);
        $("#title").html(people[$(this).attr("id")][1]);
        $("#email").html(people[$(this).attr("id")][2]);
        $("#email").attr("href", "mailto:" + people[$(this).attr("id")][2]);
        $(".bio").html(people[$(this).attr("id")][3]);
        $(".big-person").css("background-image", "url(\"" + people[$(this).attr("id")][4] + "\")");
        $("#extra-link").html(people[$(this).attr("id")][5]);
        $("#extra-link").attr("href", "http://" + people[$(this).attr("id")][5]);
    });

    $(".hamburger").click(function() {
        $(".mob-navbar").slideDown(300);
    });

    $(".hamburgerin").click(function() {
        $(".mob-navbar").slideUp(300);
    });

    $(".mobnavbox").click(function() {
        $(".mob-navbar").slideUp(300);
    });
    

});