var SocialMedia = {
        List: {
            GitHub: {
                url: "https://github.com/xShteff",
                cname: "github",
                target: "_blank"
            },
            LinkedIn: {
                url: "https://linkedin.com/in/alin-stefan-olaru-774164a3",
                cname: "linkedin",
                target: "_blank"
            },
            Facebook: {
                url: "https://www.facebook.com/omgitsallenmcp",
                cname: "facebook",
                target: "_blank"
            },
            Skype: {
                url: "skype:alin_shtefan?chat",
                cname: "skype",
                target: "_blank"
            },
            "E-Mail": {
                url: "mailto:hello@alinstefanola.ru",
                cname: "email",
                target: "_top"
            }
        },

        Init: function() {
            var count = 1;
            $.each(SocialMedia.List, function(a, b) {
                var icon = $("<div>").attr({
                    'class': 'social-media ' + SocialMedia.List[a].cname,
                    'title': a
                });
                var link = $('<a>').attr({
                    'href': SocialMedia.List[a].url,
                    'target': SocialMedia.List[a].target
                }).append(icon);
                var el = $('<li>').append(link).css({
                    'display': 'none'
                });
                $('.social-links').append(el);
                SocialMedia.Display(SocialMedia.List[a].cname, count, 250);
                count++;
            })
            
        },
        Display: function(name, delay, multiplier) {
            setTimeout(function() {
                $('.social-links .' + name).parent().parent().show('fast');
                if(delay === 5)
                    setTimeout(function() {
                            $('#extra').show('fast');
                    }, multiplier);
            }, delay * multiplier)
        }
    }

    $(document).ready(function() {
        $('.background').show('slow', function() {
            setTimeout(function() {
                $('.background').addClass('grayscale');
            }, 500);
            $('.content').addClass('active');
            $('#name').fadeIn().addClass('active');
            setTimeout(function() {
                SocialMedia.Init();
            }, 1000);
        });
    });