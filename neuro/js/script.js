$(document).ready(function(){
    $(".weeklink").click(function(e) {
        e.preventDefault();
        var weeknum = $(this).attr("href");
        $(".zaweek").css("display", "none");
        $(weeknum).css("display", "block");
    });
});