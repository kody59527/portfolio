//used for 1s fade in animation on page load

$(function() {
    $('body').removeClass('fade-out');
});

//autoscroll when link is clicked

function scroll_to() {
    $(".navLink-contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $(".navLink-projects").click(function() {
        $('html, body').animate({
            scrollTop: $("#projectsTitle").offset().top
        }, 1000);
    });
}

$(scroll_to);