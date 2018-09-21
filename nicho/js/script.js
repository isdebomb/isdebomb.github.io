$(document).ready(function(){
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

    sections.each(function() {
        currentPage = "#" + $(this).attr('id') + "n";
        currentBrain = "#" + $(this).attr('id') + "b";
        
        var top = $(this).offset().top - $(this).height()*0.25;
        var bottom = $(this).offset().top + $(this).height() - $(this).height()*0.25;
        if (scroll < bottom && scroll > top) {
            $('.brain-title').css("opacity", "0");
            $('.innerbrain').css("opacity", "0");
            $(currentPage).css("opacity", "1");
            $(currentBrain).css("opacity", "1");
        }
    
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        $(".perm-shadow").css("opacity", "0.02");
        if (scroll == 0) {
            $(".perm-shadow").css("opacity", "0.09");
        }

        var summary_offset = $("#summary").offset().top;
        if ( scroll > summary_offset ) {
            if($("#navbar").css("opacity") == "1")
                $('#navbar').fadeTo(300, 0)
        }

        if ( scroll < summary_offset) {
            if($("#navbar").css("opacity") == "0")
                $('#navbar').fadeTo(300, 1)
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

        sections.each(function() {
            currentPage = "#" + $(this).attr('id') + "n";
            currentBrain = "#" + $(this).attr('id') + "b";
            
            var top = $(this).offset().top - $(this).height()*0.25;
            var bottom = $(this).offset().top + $(this).height() - $(this).height()*0.25;
            if (scroll < bottom && scroll > top) {
                $('.brain-title').css("opacity", "0");
                $('.innerbrain').css("opacity", "0");
                $(currentPage).css("opacity", "1");
                $(currentBrain).css("opacity", "1");
            }
        
        });

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

    $(".sliding-link").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });

    $(".mini-brain").click(function(e) {
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });

    $(".exit").click(function(e) {
        $(".thanks").fadeOut(500, 0);
    });

    $(".innerbrain").hover(function(e) {
        $(this).css("opacity", 1);
        name = "#" + $(this).attr('id').substring(0,$(this).attr('id').length-1) + "n";
        $(name).css("opacity", 1);

    }, function() {
        $(this).css("opacity", 0);
        name = "#" + $(this).attr('id').substring(0,$(this).attr('id').length-1) + "n";
        $(name).css("opacity", 0);
    });

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
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }
            }

            if($(this).is("div")) {
                if(state) {
                    $(this).css("display", "block");
                    $(this).parent().css("display", "block");
                } else {
                    $(this).css("display", "none");
                    $(this).parent().css("display", "inline-block");
                }

                
            }
        });
    });

});