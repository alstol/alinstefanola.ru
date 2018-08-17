/*
    One of the most notorious features on the website.
    Scroll hijacking.

    I'm a nerd for fancy animations, I can't just teleport you to the content. I have to slowly scroll the entire webpage until you reach the content.
*/

var initScroller = () => {
    $(window).scroll(function() {
        var scroll = $(document).scrollTop();
        if (scroll > $('body').height() - 50) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    
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
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 40
                    }, 1000, function() {
    
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });
}

$(document).ready(() => {
    initScroller();
})
