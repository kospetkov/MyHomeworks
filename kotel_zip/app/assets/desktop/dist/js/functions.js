document.addEventListener("DOMContentLoaded", function () {
    new stickySidebar(document.getElementById('sidebar'));
});

let stickySidebar = function ($element) {
    this.element = $element;
    this.topPoint = this.element.getBoundingClientRect().top;
    this.scrollInit();
};

stickySidebar.prototype.scrollInit = function () {
    document.addEventListener('scroll', this.scrollHandler.bind(this));
};

stickySidebar.prototype.scrollHandler = function () {
    this.scrollHeight = window.pageYOffset;
    if (this.topPoint <= this.scrollHeight) {
        this.element.classList.add('fixed');
    }
    if (this.topPoint > this.scrollHeight + 1) {
        this.element.classList.remove('fixed');
    }
};
