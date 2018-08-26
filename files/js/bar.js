/* 
    I guess I'm hacking my own tag here.
    Sorry if someone gets offended by the way I'm achieving this <3
*/

class Bar {
    constructor(el) {
        this.el = el;
    }

    getValues() {
        this.label = this.el.text();
        this.value = this.el.attr('value');
        this.max = this.el.attr('max');
    }

    initLabel() {
        var wrap = $("<div>").addClass('bar-wrap');
        this.el.wrap(wrap);
        var label = $("<label>").text(` ${this.label}`);
        this.el.after(label);
    }

    initFill() {
        var fill = $("<div>").css({
            width: `${this.value}%`
        }).text(`${this.value} / ${this.max}`).attr({
            title: `${this.label}: ${this.value} / ${this.max}`,
            'class': 'fill'
        });
        this.el.html(fill);
    }

    init() {
        this.getValues();
        this.initFill();
        this.initLabel();
    }
}



$(document).init(() => {
    $('bar').each(function(a, b) {
        var bar = new Bar($(this));
        bar.init();
    });
});

//TODO: Find a way to integrate this with Vue.JS