

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
    slide1.style.backgroundImage = "url('images/1.jpg')"; slide1.style.width = "100%"; slide1.style.height = "300px"
    slide2.style.backgroundImage = "url('images/2.jpg')"; slide2.style.width = "100%"; slide2.style.height = "300px"
    slide3.style.backgroundImage = "url('images/3.jpg')"; slide3.style.width = "100%"; slide3.style.height = "300px"
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
},true);
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
},true);
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
//PhotoAlbum+Slider2
window.addEventListener("load", function () {
    photos = document.getElementsByClassName("photos");
    clone = {};
    for (var key in photos) {
        clone[key] = photos[key];
    };
    secondSlider = document.getElementById("container1");
    setInterval(function () {
        secondSlider.style.left =-750 + "px";
    }, 10000);
    setTimeout(function () {
        setInterval(function () {
            secondSlider.style.left = 0 + "px";
        }, 10000)
    }, 15000);
},true);
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
//Hover Photos
 document.addEventListener("mouseover", function (e) {
    var target = e.target;
    var currentDiv = document.getElementsByClassName("hoverPhotoDivs")[0];
    if (!target.hasAttribute("data-value")) return;
    if (currentDiv) document.body.removeChild(div);
    var value = target.getAttribute("data-value");
    var coords = target.getBoundingClientRect();
    div = document.createElement('div');
    div.className = "hoverPhotoDivs";
    div.style.top = coords.top + pageYOffset + "px";
    div.style.left = coords.left + pageXOffset + "px";
    div.style.width = target.clientWidth + "px";
    div.style.height = target.clientHeight + "px";
    div.innerHTML = value;
    document.body.appendChild(div);
}, true);
document.addEventListener("mouseout", function (e) {
    var target = e.target;
    var currentDiv = document.getElementsByClassName("hoverPhotoDivs")[0];
    if (target == currentDiv) document.body.removeChild(div);
}, true);

//ThirdSlider
document.addEventListener('click', function (e) {
    var target = e.target;
    if (!target.hasAttribute("data-position")) return;
    var container = document.getElementById("container2");
    container.style.left = target.getAttribute("data-position");
}, true);
// Send Form

window.onload = function () {


    document.forms[0].addEventListener("submit", function (e) {
        if (document.getElementsByClassName("errorMessage")) {
            while (document.getElementsByClassName("errorMessage")[0])
                document.body.removeChild(document.getElementsByClassName("errorMessage")[0]);
        }

        var name = document.getElementsByClassName("formsSpace")[0];
        var email = document.getElementsByClassName("formsSpace")[1];
        var sub = document.getElementsByClassName("formsSpace")[2];
        if (name.value.length == 0 || name.value.match(/\W/) !== null) {

            e.preventDefault();
            var nameError = document.createElement("div");
            nameError.innerHTML = "Please use only english letters";
            var coordName = name.getBoundingClientRect();
            nameError.style.top = coordName.bottom + pageYOffset + 5 + "px";
            nameError.style.left = coordName.left + pageXOffset + "px";
            nameError.style.width = name.clientWidth + "px";
            nameError.style.height = name.clientHeight + "px";
            nameError.className = "errorMessage";
            document.body.appendChild(nameError);

        }
        if (email.value.length == 0 || email.value.match(/[^\d\w_@]/) !== null) {

            e.preventDefault();
            var emailError = document.createElement("p");
            emailError.innerHTML = "Please use only english letters,<br> numbers and '@' '_'";
            var coordEmail = email.getBoundingClientRect();
            emailError.style.top = coordEmail.bottom + pageYOffset + 5 + "px";
            emailError.style.left = coordEmail.left + pageXOffset + "px";
            emailError.style.width = email.clientWidth + "px";
            emailError.style.height = email.clientHeight + "px";
            emailError.className = "errorMessage";
            document.body.appendChild(emailError);
        }
        if (sub.value.length == 0 || sub.value.match(/[^\d\w]/) !== null) {

            e.preventDefault();
            var subError = document.createElement("p");
            subError.innerHTML = "Please use only english letters and numbers";
            var coordSub = sub.getBoundingClientRect();
            subError.style.top = coordSub.bottom + pageYOffset + 5 + "px";
            subError.style.left = coordSub.left + pageXOffset + "px";
            subError.style.width = sub.clientWidth + "px";
            subError.style.height = sub.clientHeight + "px";
            subError.className = "errorMessage";
            document.body.appendChild(subError);

        }
        e.preventDefault();

    }, true);
}
