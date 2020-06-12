$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    $("#signincontent").click(function(){
        $("#loginModal").modal('show');
    });

    $("#ReserveTable").click(function(){
        $("#ReserveTableModal").modal('show');
    });

    $('[class="close"]').click(function(){
        $("#loginModal").modal('hide');
        $("#ReserveTableModal").modal('hide');
    });

    $("#cancel1").click(function(){
        $("#loginModal").modal('hide');
    });

    $("#cancel2").click(function(){
        $("#ReserveTableModal").modal('hide');
    });

});