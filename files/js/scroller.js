/*
    One of the most notorious features on the website.
    Scroll hijacking.

    I'm a nerd for fancy animations, I can't just teleport you to the content. I have to slowly scroll the entire webpage until you reach the content.
*/
var showPage = (id) => {
    $('section').hide();
    $(`${id}`).show();
}

var initScroller = () => {
    $(window).scroll(function() {
        var scroll = $(document).scrollTop();
        /*if (scroll > $('body').height() - 50) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }*/
    
        if (scroll > 150) {
            $('.backToTop').fadeIn();
    
        } else {
            $('.backToTop').fadeOut();
    
        }
    });
    
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            var target = `${event.target.hash}`;
            console.log(`${event.target.hash}`);
            event.preventDefault();
            showPage(target);
        });
}

$(document).ready(() => {
    initScroller();
    var hash = window.location.hash.substr(1);
    console.log(hash);
    if(hash)
        showPage(`#${hash}`);
})
