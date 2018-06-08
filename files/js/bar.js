/* 
    I guess I'm hacking my own tag here.
*/

$(document).init(() => {
    $('bar').each(function(a, b) {
        var label = $(this).text();
        var value = $(this).attr('value');
        var max = $(this).attr('max');
        var fill = $("<div>").css({
            width: `${value}%`
        }).text(`${value} / ${max}`).attr({
            title: `${label}: ${value} / ${max}`,
            'class': 'fill'
        });
        $(this).html(fill)
        console.log($(this));
        console.log(`${label}: ${value}`);
    });
});