function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function () {
    $('#html').click(function () {
        $(".hiding1").toggle();
    });
    $('#js').click(function () {
        $(".hiding2").toggle();
    });
    $('#java').click(function () {
        $(".hiding3").toggle();
    });
    $('#android').click(function () {
        $(".hiding4").toggle();
    });
    $('#nasa').click(function () {
        $(".hiding5").toggle();
    });
//    $('.grid-item').hover(function () {
            //        $("#first").toggleClass('.overlay');
            //    });

});

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}