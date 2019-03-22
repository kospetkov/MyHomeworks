document.addEventListener("DOMContentLoaded", function () {
    new scrollSidebar();
    new mainSlider();
});


let mainSlider = function () {
    this.imgDataArray = [];
    this.imgContainer = document.querySelectorAll('.slider-img');
    this.imgDataHandler();
    this.arrayImgLength = this.imgDataArray.length;
    this.currentImgId = this.imgDataArray[0].id;
    this.sliderInit();
};

mainSlider.prototype.setSrcImg = function () {
  for (let item of this.imgDataArray) {
      if (item.id === this.currentImgId) {
          console.log('item src => ' + item.src);
          return item.src;
      }
  }
};

mainSlider.prototype.sliderInit = function () {
    this.sliderWrapper = document.querySelectorAll('.slider__wrapper');
    console.log('img => ' + this.imgContainer);
    setInterval(function () {
        if (this.currentImgId >= (this.arrayImgLength - 1)) {
            this.currentImgId = -1;
        }
        this.currentImgId++;
        //this.imgContainer[0].setAttribute('src', this.setSrcImg());

        this.sliderWrapper[0].style.marginLeft = '-' + this.currentImgId + '00%';
    }.bind(this), 2000);
};

mainSlider.prototype.imgDataHandler = function () {
    for (let [index, item] of this.imgContainer.entries()) {
        this.imgDataArray.push({
            width: item.clientWidth,
            src: item.attributes.src.value,
            id: index
        });
    }
/*
    for (let item of this.imgDataArray) {
        console.log('item width => ' + item.width);
        console.log('item src => ' + item.src);
        console.log('item id => ' + item.id);
    }*/
};


// scrollSidebar - secure the sidebar at the top of the window when scrolling

let scrollSidebar = function () {
    this.sidebar = document.getElementById('sidebar');
    this.sidebarTop = this.sidebar.offsetTop;
    this.rightColumn = document.getElementById('right_column');
    this.parentElement = this.rightColumn.parentNode;
    this.topLeftColumnWidth = document.querySelectorAll('.top__left-column')[0].clientWidth;
    this.sidebar.style.width = this.topLeftColumnWidth + 'px';
    this.init();
};

scrollSidebar.prototype.isBuffer = function () {
    return document.getElementById('buffer');
};

scrollSidebar.prototype.addElement = function () {
    this.bufferElement = document.createElement('div');
    this.bufferElement.setAttribute('id', 'buffer');
    this.parentElement.insertBefore(this.bufferElement, this.rightColumn);
};

scrollSidebar.prototype.init = function () {
    document.addEventListener('scroll', this.scrollInit.bind(this));
};

scrollSidebar.prototype.addClassFixed = function () {
    this.sidebar.classList.add('fixed__sidebar');
};

scrollSidebar.prototype.removeClassFixed = function () {
    this.sidebar.classList.remove('fixed__sidebar');
};

scrollSidebar.prototype.scrollInit = function () {
    this.windowTop = window.pageYOffset;
    if (this.windowTop >= this.sidebarTop) {
        this.addClassFixed();
        if (!this.isBuffer()) {
            this.addElement();
        }
    } else {
        this.removeClassFixed();
        if (this.isBuffer()) {
            this.bufferElement.remove();
        }
    }
};