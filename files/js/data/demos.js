var demos = new Vue({
    el: "#demos",
    data: {
        slider: new Slider(3),
        selected: 0
    },
    methods: {
        next: function () {
            this.slider.next();
            this.selected = this.slider.getCurrentData();
        },
        prev: function () {
            this.slider.prev();
            this.selected = this.slider.getCurrentData();
        }
    }
})