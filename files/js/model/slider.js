class Slider {
    /*
        data can be both an array and a number showing the limit of pages
    */
    constructor(data) {
        this.data = data;
        this.currentSelectedId = 0;
    }

    next() {
        if(Array.isArray(this.data)) {
            if(this.currentSelectedId < this.data.length - 1)
                this.currentSelectedId++;
        } else  {
            if(this.currentSelectedId < this.data - 1)
                this.currentSelectedId++;
        }
        
    }

    prev() {
        if(this.currentSelectedId > 0)
            this.currentSelectedId--;
    }

    getCurrentData() {
        if(Array.isArray(this.data)) 
            return this.data[this.currentSelectedId];
        else 
            return this.currentSelectedId;
        
    }

    isOnLastPage() {
        if(Array.isArray(this.data)) 
            return this.currentSelectedId == this.data.length - 1;
         else 
            return this.currentSelectedId == this.data - 1;
    }

    isOnFirstPage() {
        return this.currentSelectedId == 0;
    }

    imOnPage(number) {
        return this.currentSelectedId == number;
    }
}