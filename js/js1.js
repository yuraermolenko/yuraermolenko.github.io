//Header-SlowScroll
document.addEventListener('click', function (e) {
    var target = e.target;
    if (!target.hasAttribute('data-click')) return;
    var dataValue = target.getAttribute('data-click');
    var elem = document.getElementById(dataValue);
    var header = document.getElementById("header");
    var coordHeader = header.getBoundingClientRect();
    var coord = elem.getBoundingClientRect();
    var r = setInterval(function () {
        coordHeader = header.getBoundingClientRect();
        coord = elem.getBoundingClientRect();
        if (coord.top < coordHeader.bottom) {
            window.scrollBy(0, -(coordHeader.bottom - coord.top) / 5 - 1);
        }
        if (coord.top > coordHeader.bottom) {
            window.scrollBy(0, (coord.top - coordHeader.bottom) / 5 + 1);
        }
        if (coord.top == coordHeader.bottom) {
            clearInterval(r);
        }
    }, 30);
}, true);
//Slider1
window.addEventListener('load', function () {
    var btnLeft = document.getElementById("leftBtn");
    var btnRight = document.getElementById("rightBtn");
    var firstSlider = document.getElementById("firstSlider");
    var slide1 = document.createElement("div");
    var slide1Div = document.createElement("div");
    slide1Div.className = "divInSlides";
    slide1Div.innerHTML = "<p class='textInSlides'>Some text</p>";
    var slide2 = document.createElement("div");
    var slide2Div = document.createElement("div");
    slide2Div.className = "divInSlides";
    slide2Div.innerHTML = "<p class='textInSlides'>Another text...</p>";
    var slide3 = document.createElement("div");
    var slide3Div = document.createElement("div");
    slide3Div.className = "divInSlides";
    slide3Div.innerHTML = "<p class='textInSlides'>Boring...</p>";
    slide1.appendChild(slide1Div);
    slide2.appendChild(slide2Div);
    slide3.appendChild(slide3Div);
    slide1.style.backgroundImage = "url('images/try.jpg')"; slide1.style.width = "100%"; slide1.style.height = "300px"
    slide2.style.backgroundImage = "url('images/Chrysanthemum.jpg')"; slide2.style.width = "100%"; slide2.style.height = "300px"
    slide3.style.backgroundImage = "url('images/Lighthouse.jpg')"; slide3.style.width = "100%"; slide3.style.height = "300px"
    var slider = {
        slides: [slide1, slide2, slide3],
        counter: 0,
        setSlide: function (obj) {
            while (firstSlider.firstChild) {
                firstSlider.removeChild(firstSlider.firstChild);
            }
            firstSlider.appendChild(obj);
        },
        left: function () {
            this.counter--;
            if (this.counter < 0) this.counter = this.slides.length - 1;
            this.setSlide(this.slides[this.counter])
        },
        right: function () {
            this.counter++;
            if (this.counter == this.slides.length) this.counter = 0;
            this.setSlide(this.slides[this.counter])
        },
        init: function () {
            firstSlider.appendChild(slide1);
        }
    };
    slider.init();
    var sliderInterval = setInterval(slider.right.bind(slider), 3000);
    var sliderTimeout;
    btnLeft.addEventListener("click", function () {
        clearTimeout(sliderTimeout);
        clearInterval(sliderInterval);
        slider.left.call(slider);
        sliderTimeout = setTimeout(function () {
            sliderInterval = setInterval(slider.right.bind(slider), 3000);
        }, 2000)
    });
    btnRight.addEventListener("click", function () {
        clearTimeout(sliderTimeout);
        clearInterval(sliderInterval);
        slider.right.call(slider);
        sliderTimeout = setTimeout(function () {
            sliderInterval = setInterval(slider.right.bind(slider), 3000);
        }, 2000)
    });
}, true);
//Slow increase/decrease icons
document.addEventListener('mouseover', function (e) {
    target = e.target;
    if (!target.hasAttribute('data-raised')) return;
    maxWidth = Math.round(target.clientWidth * 1.1);
    maxHeight = Math.round(target.clientHeight * 1.1);
    var raiseInterval = setInterval(function () {
        if (!target.hasAttribute('data-raised')) return;
        coords = this.target.getBoundingClientRect();
        this.target.style.top = Math.round(coords.top - (this.target.clientHeight * 0.1 / 2.5)) + "px";
        this.target.style.left = Math.round(coords.left - (this.target.clientWidth * 0.1 / 2.5)) + "px";
        this.target.style.width = Math.round(this.target.clientWidth + this.target.clientWidth * 0.1 / 5) + "px";
        this.target.style.height = Math.round(this.target.clientHeight + this.target.clientHeight * 0.1 / 5) + "px";
        if (parseInt(target.style.width) >= maxWidth) clearInterval(raiseInterval);
    }, 10);
    e.stopPropagation();
});
document.addEventListener('mouseout', function (e) {
    mytarget = e.target;
    if (!mytarget.hasAttribute('data-raised')) return;
    minWidth = Math.round(mytarget.clientWidth * 0.9);
    minHeight = Math.round(mytarget.clientHeight * 0.9);
    var decreaseInterval = setInterval(function () {
        if (!mytarget.hasAttribute('data-raised')) return;
        coords = this.mytarget.getBoundingClientRect();
        this.mytarget.style.top = Math.round(coords.top + (this.mytarget.clientHeight * 0.1 / 2.5)) + "px";
        this.mytarget.style.left = Math.round(coords.left + (this.mytarget.clientWidth * 0.1 / 2.5)) + "px";
        this.mytarget.style.width = Math.round(this.mytarget.clientWidth - this.mytarget.clientWidth * 0.1 / 5) + "px";
        this.mytarget.style.height = Math.round(this.mytarget.clientHeight - this.mytarget.clientHeight * 0.1 / 5) + "px";
        if (parseInt(mytarget.style.width) <= minWidth) clearInterval(decreaseInterval);
    }, 10);
    e.stopPropagation();
});
//dynamic numbers
document.addEventListener("scroll", function () {
    var happyClientscounter = document.getElementById("happyClientscounter");
    var happyClientscounterCoords = happyClientscounter.getBoundingClientRect();
    var isVisibleTop = happyClientscounterCoords.top > 0 && happyClientscounterCoords.top < document.documentElement.clientHeight;
    var isVisibleBottom = happyClientscounterCoords.bottom < document.documentElement.clientHeight && happyClientscounterCoords.bottom > 0;
    if (isVisibleTop || isVisibleBottom) {
        var valuehappyClientscounter = 1600;
        var timer = setInterval(function () {
            if (+happyClientscounter.innerHTML >= 1600) return;
            happyClientscounter.innerHTML = Math.round(+happyClientscounter.innerHTML + valuehappyClientscounter / 50);
        }, 60);
        setTimeout(function () {
            clearInterval(timer)
        }, 3000);
    }
    var completedProjects = document.getElementById("completedProjectscounter");
    var completedProjectsCoords = completedProjects.getBoundingClientRect();
    var isVisibleTopcompletedProjects = completedProjectsCoords.top > 0 && completedProjectsCoords.top < document.documentElement.clientHeight;
    var isVisibleBottomcompletedProjects = completedProjectsCoords.bottom < document.documentElement.clientHeight && completedProjectsCoords.bottom > 0;
    if (isVisibleTopcompletedProjects || isVisibleBottomcompletedProjects) {
        var valuecompletedProjects = 3200;
        var timercompletedProjects = setInterval(function () {
            if (+completedProjects.innerHTML >= 3200) return;
            completedProjects.innerHTML = +completedProjects.innerHTML + 3200 / 100;
        }, 30);
        setTimeout(function () {
            clearInterval(timercompletedProjects)
        }, 3000);
    }
    var awardscounter = document.getElementById("awardscounter");
    var awardscounterCoords = awardscounter.getBoundingClientRect();
    var isVisibleTopawardscounter = awardscounterCoords.top > 0 && awardscounterCoords.top < document.documentElement.clientHeight;
    var isVisibleBottomawardscounter = awardscounterCoords.bottom < document.documentElement.clientHeight && awardscounterCoords.bottom > 0;
    if (isVisibleTopawardscounter || isVisibleBottomawardscounter) {
        var valueawardscounter = 40;
        var timerawardscounter = setInterval(function () {
            if (+awardscounter.innerHTML >= 40) return;
            awardscounter.innerHTML = +awardscounter.innerHTML + valueawardscounter / 40;
        }, 75);
        setTimeout(function () {
            clearInterval(timerawardscounter)
        }, 3000);
    }
    var coffeeDrinks = document.getElementById("coffeeDrinkscounter");
    var coffeeDrinksCoords = coffeeDrinks.getBoundingClientRect();
    var isVisibleTopcoffeeDrinks = coffeeDrinksCoords.top > 0 && coffeeDrinksCoords.top < document.documentElement.clientHeight;
    var isVisibleBottomcoffeeDrinks = coffeeDrinksCoords.bottom < document.documentElement.clientHeight && coffeeDrinksCoords.bottom > 0;
    if (isVisibleTopcoffeeDrinks || isVisibleBottomcoffeeDrinks) {
        var valuecoffeeDrinks = 20000;
        var timercoffeeDrinks = setInterval(function () {
            if (+coffeeDrinks.innerHTML >= 20000) return;
            coffeeDrinks.innerHTML = +coffeeDrinks.innerHTML + valuecoffeeDrinks / 100;
        }, 30);
        setTimeout(function () {
            clearInterval(timercoffeeDrinks)
        }, 3000);
    }

}, true);
//PhotoAlbum
document.addEventListener("load", function () {
    photos = document.getElementsByClassName("photos");
    clone = {};
    for (var key in photos) {
        clone[key] = photos[key];
    }
}, true);
document.addEventListener("click", function (e) {
    var target = e.target;
    if (!target.hasAttribute("data-clickPhotos")) return;
     var a = document.getElementsByTagName("a");
    for (var count = 0; count < a.length; count++) {
        if (a[count].hasAttribute("data-clickPhotos")) a[count].style.color = "black";
    }
    target.style.color = "yellow";
    var filteredPhotos = [];
    for (var i = 0; i < clone.length; i++) {
        if (clone[i].getAttribute("data-value") == target.getAttribute("data-clickPhotos") || target.getAttribute("data-clickPhotos") == "ALL") filteredPhotos.push(clone[i]);
    }
    var divs = document.getElementsByClassName("album");
    for (var j = 0; j < divs.length; j++) {
        while (divs[j].firstChild) {
            divs[j].removeChild(divs[j].firstChild);
        }
    }
    var numberOfDiv = 0;
    for (var counter = 0; counter < filteredPhotos.length; counter++) {
        if (divs[numberOfDiv].childNodes.length >= 6) numberOfDiv++;
        divs[numberOfDiv].appendChild(filteredPhotos[counter]);
    }
}, true);
