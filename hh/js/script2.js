$(document).ready(function(){
    $('#settings').click(function() {
        $('#drop-down').fadeIn();
    });
    
    $(window).click(function() {
        $('#drop-down').fadeOut();
    });

    $('#settings').click(function(event){
        event.stopPropagation();
    });
    
     $('#drop-down').click(function(event){
        event.stopPropagation();
    });
    
    $('#injury-report').click(function(event){
        window.location.href = "injury.html";
    });
    
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
        if (getUrlVars()["submitted"]=="true") {
            $('.ma-card-2').css("display", "block");
            $('.ma-card-1').css("display", "none");
            $('.confirm-card').css("height", "490px");
            $('.confirm-card').css("margin-top", "-80px");
        }
    });
});