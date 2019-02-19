$(document).ready(function(){
    window.alert("updated 4:53PM on 10/26");
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
            
            var top = $(this).offset().top - 51;
            var bottom = $(this).offset().top + $(this).height() - 51;
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
                
                var top = $(this).offset().top - 51;
                var bottom = $(this).offset().top + $(this).height() - 51;
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

    $(".sliding-link").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top - 50},'slow');
    });

    if ($(window).width() > 640) {
        $(".mini-brain").click(function(e) {
            var aid = $(this).attr("href");
            $('html,body').animate({scrollTop: $(aid).offset().top - 50},'slow');
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
        "nicho" : ['Nicholas Hatsopoulos, Ph.D.', 'Principal Investigator', 'nicho@uchicago.edu', `Nicholas G. “Nicho”  Hatsopoulos, Ph.D. is currently a Professor at the University of Chicago. Dr. Hatsopoulos was also Chairman of the Computational Neuroscience graduate program from 2008-2015. He is currently running a laboratory with five graduate students, three postdoctoral fellows, and several technicians which is funded in part by the National Institutes of Health.  From January 1998 to December 2001, Dr. Hatsopoulos was an Assistant Professor of Research in the Department of Neuroscience at Brown University. Dr. Hatsopoulos completed two postdoctoral research fellowships, one in the Department of Neuroscience at Brown University and the other in the Computational Neuroscience Program at the California Institute of Technology. <br><br>

        Dr. Hatsopoulos completed his B.A. in Physics from Williams College in 1984, his M.S. in Psychology in 1991 and his Ph.D. in Cognitive Science from Brown University in 1992. <br><br>
        
        In 2001, he co-founded a company, Cyberkinetics Neurotechnology Systems, which took the basic scientific research he and his colleagues conducted to develop neural prosthesis technology to assist people with severe motor disabilities. <br><br>
        
        His research focuses on the neural basis of motor control and learning. He is investigating what features of motor behavior are encoded and how this information is represented in the collective activity of neuronal ensembles in the motor cortex. He is also interested in how these representations change as motor learning occurs.  To answer these questions, the electrical discharge of many motor cortical neurons is simultaneously recorded using multi-electrode arrays and correlated with motor behavior. The encoding properties of individual motor cortical neurons are being studied to determine how these single cell properties relate to higher-order representations involving groups of neurons. The possibility that changes in functional connectivity among neurons may occur during motor learning is also being explored.`, './img/people/nicho.jpg', '', ''],
        "rebecca" : ['Rebecca Junod, B.S.', 'Lab Manager', 'junodrm@uchicago.edu', 'bio', './img/people', '', ''],
        "karthikeyan" : ['Karthikeyan Balasubramanian, Ph.D.', 'Placeholder', 'karthikeyanb@uchicago.edu', 'bio', './img/people', '', ''],
        "jeff" : ['Jeff Walker, Ph.D.', 'Placeholder', 'walkerjd@uchicago.edu', 'Jeff defended his PhD in July 2018 after developing methods for studying the cortical contributions to motor control with marmosets engaging in unconstrained natural behaviors.', './img/people/jeff.jpg', '', ''],
        "vasileios" : ['Vasileios Papadourakis, Ph.D.', 'Postdoctoral Scholar', 'vpapadourakis@uchicago.edu', 'My interests are broadly in the field of motor control with a focus on the sensory capabilities of the motor system and its role in perception. My research is driven by two kinds of questions: First, how is visual and somatosensory information represented and utilized by the motor system to prepare, initiate, monitor and control movement. Second, what is the nature and significance of the motor system’s visual responses during action observation. My BSc is in Applied Mathematics and my M.S. in the Brain and Mind Sciences. For my PhD, I studied the functional properties of primate premotor cortex during execution and observation of grasping actions.', './img/people/vasileios.jpg', 'Google Scholar Profile', 'https://scholar.google.com/citations?user=vWdfch8AAAAJ&hl=en'],
        "alex" : ['Alex Lee, M.S.', 'Placeholder', 'leealex@uchicago.edu', 'bio', './img/people/alex.png', '', ''],
        "marina" : ['Marina Sundiang, B.S.', 'Placeholder', 'sundiang@uchicago.edu', 'Marina Sundiang is a PhD Candidate in computational neuroscience studying motor learning in marmosets.', './img/people/marina.jpg', '', ''],
        "wei" : ['Wei Liang, M.S.', 'Placeholder', 'weiliang@uchicago.edu', 'Wei Liang is a PhD Candidate at the University of Chicago.', './img/people/wei.jpg', '', ''],
        "dalton" : ['Dalton Moore, B.S.', 'Graduate Student', 'daltonm@uchicago.edu', 'Dalton is a PhD student in the Computational Neuroscience program. He completed a Bachelor\'s and a Master\'s Degree in Biomedical Engineering at Arizona State University. He is interested in the fundamental operations computed by motor cortical circuits, and particularly the functional connectivity patterns that produce these computations at the local and macro-scale.', './img/people/dalton.jpg', '', ''],
        "caleb" : ['Caleb Sponheim, B.S.', 'Graduate Student', 'calebsponheim@uchicago.edu', 'Caleb Sponheim is trying to understand how the brain learns, plans and executes movements. He leverages those findings to improve the experience of using brain-machine interfaces, which help restore function to people who have disabilities.', './img/people/caleb.jpg', 'Personal Site', 'http://www.calebsponheim.com/'],
        "george" : ['George Saieed', 'Undergrad Research Assistant', 'gs@georgesaieed.com', 'bio', './img/people/george.jpeg', 'Personal Site', 'http://georgesaieed.com']
    }

    $(".small-person").click(function(e) {
        $(".small-person").removeClass("chosen");
        $(this).addClass("chosen");

        $("#pname").html(people[$(this).attr("id")][0]);
        $("#title").html(people[$(this).attr("id")][1]);
        $("#email").html(people[$(this).attr("id")][2]);
        $("#email").attr("href", "mailto:" + people[$(this).attr("id")][2]);
        $(".bio").html(people[$(this).attr("id")][3]);
        $(".big-person").css("background-image", "url(" + people[$(this).attr("id")][4] + ")");
        $("#extra-link").html(people[$(this).attr("id")][5]);
        $("#extra-link").attr("href", people[$(this).attr("id")][6]);
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