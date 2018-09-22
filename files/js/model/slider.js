class Slider {
    constructor(data) {
        this.data = data;
        this.currentSelectedId = 0;
    }

    next() {
        if(this.currentSelectedId < this.data.length - 1)
            this.currentSelectedId++;
    }

    prev() {
        if(this.currentSelectedId > 0)
            this.currentSelectedId--;
    }

    getCurrentData() {
        return this.data[this.currentSelectedId];
    }

    isOnLastPage() {
        return this.currentSelectedId == this.data.length - 1;
    }

    isOnFirstPage() {
        return this.currentSelectedId == 0;
    }
}