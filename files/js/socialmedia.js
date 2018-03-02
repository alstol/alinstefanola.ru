var SocialMedia = {
    Init: function() {
        var count = 1;
        $.ajax({
            dataType: "json",
            url: 'files/data/socialmedia.json',
            success: function(result) {
                $.each(result, function(a, b) {
                    var icon = $("<div>").attr({
                        'class': 'social-media ' + result[a].cname,
                        'title': a
                    });
                    var link = $('<a>').attr({
                        'href': result[a].url,
                        'target': result[a].target
                    }).append(icon);
                    var el = $('<li>').append(link);
                    $('.social-links').append(el);
                    count++;
                })
            }
          });
    }
}