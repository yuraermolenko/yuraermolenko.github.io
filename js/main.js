var module = angular.module('myProject', ['duScroll', 'ngRoute'])
module.controller('mainCtrl', function ($scope, $document, $interval, $timeout, $http, $location) {

    $scope.showTemplate = function (path) {
        $location.path(path);
        if (path == '/') $scope.show('news');
        if (path != '/') $scope.show('newsTemplate');
        console.log('watchers', $scope.$$watchers);
    }

    //$scope.user.name = $cookies.get('name');
    //$scope.user.email = $cookies.get('email');
    //form
    //$scope.showMsg = function () {
    //    $cookies.put('name', $scope.user.name);
    //    $cookies.put('email', $scope.user.email);
    //}



    $http.get("Libraries/news.json").success(function (response) {
        $scope.newsArr = response;
    })
    $scope.showError = function (err) {
        if (angular.isDefined(err)) {
            if (err.required) {
                return 'no data entered!'
            }
            else if (err.email) {
                return "Use only english letters, numbers, '_' and '@'";
            }
            else if (err.name) {
                return "Use only english letters and numbers";
            }
            else if (err.message) {
                return "Should use minimum 20 symbols!";
            }
        }
    };
    $scope.errorMsgName = 'Use only english letters and numbers';
    $scope.errorMsgMsg = 'Should use minimum 20 symbols!';
    $scope.nameRegex = /^\w/;
    $scope.mailRegex = /^\w@_$/;
    $scope.messageRegex = /^.{20,}$/;
    $scope.teamAbout = [
        { name: 'Jon Doe', work: 'Graphic Designer', inner: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'George Washington', work: 'Father', inner: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
{ name: 'Abraham Lincoln', work: 'President', inner: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
{ name: 'Henry Ford', work: 'Price maker', inner: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    ]
    $document.on('scroll', function () {
        var completedProjects = document.getElementById("completed projects");
        var coords = completedProjects.getBoundingClientRect();
        var isVisibleTop = coords.top > 0 && coords.top < document.documentElement.clientHeight;
        var isVisibleBottom = coords.bottom < document.documentElement.clientHeight && coords.bottom > 0;
        if (isVisibleTop || isVisibleBottom) {
            elem1 = document.getElementById($scope.counterItems[0].name);
            elem2 = document.getElementById($scope.counterItems[1].name);
            elem3 = document.getElementById($scope.counterItems[2].name);
            elem4 = document.getElementById($scope.counterItems[3].name);
            if ($scope.counterItems[0].factValue >= $scope.counterItems[0].value) { }
            else {
                var timer1 = $interval(function () {
                    if ($scope.counterItems[0].factValue >= $scope.counterItems[0].value) return;
                    $scope.counterItems[0].factValue = Math.round(+$scope.counterItems[0].factValue + $scope.counterItems[0].value / 30);
                }, 100);

            };
            if ($scope.counterItems[1].factValue >= $scope.counterItems[1].value) { }
            else {
                var timer2 = $interval(function () {
                    if ($scope.counterItems[1].factValue >= $scope.counterItems[1].value) return;
                    $scope.counterItems[1].factValue = Math.round(+$scope.counterItems[1].factValue + $scope.counterItems[1].value / 30);
                }, 100);

            };
            if ($scope.counterItems[2].factValue >= $scope.counterItems[2].value) { }
            else {
                var timer3 = $interval(function () {
                    if ($scope.counterItems[2].factValue >= $scope.counterItems[2].value) return;
                    $scope.counterItems[2].factValue = Math.round(+$scope.counterItems[2].factValue + $scope.counterItems[2].value / 30);
                }, 100);

            };
            if ($scope.counterItems[3].factValue >= $scope.counterItems[3].value) { }
            else {
                var timer4 = $interval(function () {
                    if ($scope.counterItems[3].factValue >= $scope.counterItems[3].value) return;
                    $scope.counterItems[3].factValue = Math.round(+$scope.counterItems[3].factValue + $scope.counterItems[3].value / 30);
                }, 100);

            }
        }
    })

    $scope.counterItems = [

        { name: 'completed projects', factValue: 0, value: 3054, scr: 'images/count1.png' },
        { name: 'click presed', factValue: 0, value: 7234873, scr: 'images/count2.png' },
        { name: 'mails sented & received', factValue: 0, value: 4670, scr: 'images/count3.png' },
        { name: 'jokes tolds', factValue: 0, value: 939, scr: 'images/count4.png' }
    ]
    $scope.nameOfService = 'Web Design'
    $scope.switchService = function (name) {
        $scope.nameOfService = name;
    }
    $scope.serviceArr = [
        { name: 'Web Design', src: 'images/Icon1.png' },
        { name: 'Graphic Design', src: 'images/icon2.png' },
        { name: 'Programming', src: 'images/icon3.png' },
        { name: 'Photography', src: 'images/Icon4.png' }
    ]
    $scope.show = function (id) {
        var element = document.getElementById(id);
        $document.scrollToElement(element, 50, 1000);
    };
    $document.on('mouseover', function (e) {
        var target = e.target;
        //icons
        if (target.getAttribute('data-src') == 'f') target.src = 'images/f2.png';
        if (target.getAttribute('data-src') == 'g') target.src = 'images/g2.png';
        if (target.getAttribute('data-src') == 't') target.src = 'images/t2.png';
        if (target.getAttribute('data-src') == 'i') target.src = 'images/i2.png';
        //photos
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
    });
    $document.on('mouseout', function (e) {
        var target = e.target;
        //icons
        if (target.getAttribute('data-src') == 'f') target.src = 'images/f1.png';
        if (target.getAttribute('data-src') == 'g') target.src = 'images/g1.png';
        if (target.getAttribute('data-src') == 't') target.src = 'images/t1.png';
        if (target.getAttribute('data-src') == 'i') target.src = 'images/i1.png';
        //photos
        var currentDiv = document.getElementsByClassName("hoverPhotoDivs")[0];
        if (target == currentDiv) document.body.removeChild(div);
    })

    $scope.photosCategory = 'ALL';
    $scope.toggleCategory = function (category) {
        $scope.photosCategory = category;
    };
    $scope.pictures = [{ src: "images/1.jpg", group: "WEB DESIGN" },
        { src: "images/2.jpg", group: "GRAPHIC DESIGN" },
            { src: "images/3.jpg", group: "PHOTOGRAPHY" },
            { src: "images/1.jpg", group: "WEB DESIGN" },
            { src: "images/1.jpg", group: "WEB DESIGN" },
            { src: "images/1.jpg", group: "WEB DESIGN" },
            { src: "images/2.jpg", group: "GRAPHIC DESIGN" },
            { src: "images/2.jpg", group: "GRAPHIC DESIGN" },
            { src: "images/2.jpg", group: "GRAPHIC DESIGN" },
             { src: "images/3.jpg", group: "PHOTOGRAPHY" },
              { src: "images/3.jpg", group: "PHOTOGRAPHY" },
               { src: "images/3.jpg", group: "PHOTOGRAPHY" }
    ]
    $scope.sortPhotos = function (item) {

        if (item.group == $scope.photosCategory) return item;
        if ($scope.photosCategory == 'ALL') return item;
    }
});
module.directive('createProudIcons', function () {
    return {
        restrict: 'AECM',
        template: function () {
            return angular.element(document.querySelector("#customTemplate")).html();
        },
        link: function (scope, elem, attrs) {

        }
    }
});
module.directive('creatAboutUsBlock', function () {
    return {
        restrict: 'AECM',
        link: function (scope, element, attrs) {
            var about = angular.element('<div id="about" class="container">');
            element.append(about);
            var row1 = angular.element('<div class="row">');
            about.append(row1);
            var col1 = angular.element('<div class="col-xs-6 col-xs-offset-3 col-md-6 col-md-offset-3">');
            row1.append(col1);
            col1.append(angular.element('<h1 class="text-center">We are the one</h1><hr /><p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'));
            var row2 = angular.element('<div class="row">');
            about.append(row2);
            var div = angular.element('<div class="col-xs-8 col-xs-offset-2 col-md-8 col-md-offset-2">');
            row2.append(div);
            var items = scope.teamAbout;
            for (var i = 0; i < items.length; i++) {
                var divCol = angular.element('<div class="col-xs-3 col-md-3">');
                div.append(divCol);
                var divdiscr = angular.element('<div class="divdiscr">');
                divCol.append(divdiscr);
                var pict = document.createElement('img');
                pict.classList.add("teamPhotos");
                pict.src = 'images/anonim.jpg';
                divdiscr.append(pict);
                var coords = pict.getBoundingClientRect();
                var height = coords.height * 0.3;
                var divUnderPhoto = document.createElement('div');
                divUnderPhoto.classList.add('divUnderPhoto');
                divUnderPhoto.style.top = coords.bottom - height + pageYOffset + "px";
                divUnderPhoto.style.height = height + "px";
                divUnderPhoto.style.width = coords.width + "px";
                divUnderPhoto.style.left = coords.left + pageXOffset + "px";
                divUnderPhoto.innerHTML = '<span class="span">' + items[i].name + '</span><p>' + items[i].work + '';
                element.append(divUnderPhoto);
                var teamText = angular.element('<div class="teamText">').text(items[i].inner)
                divdiscr.append(teamText);
                var img1 = angular.element('<img src="images/f1.png" data-src="f" class="f1"/>');

                var img2 = angular.element('<img src="images/t1.png" data-src="t" class="f1"/>');

                var img3 = angular.element('<img src="images/g1.png" data-src="g" class="f1"/>');

                var img4 = angular.element('<img src="images/i1.png" data-src="i" class="f1"/>');

                divdiscr.append(img1);
                divdiscr.append(img2);
                divdiscr.append(img3);
                divdiscr.append(img4);
            }

        }
    }
})
module.config(function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'index.html',
        })
        .when('/news1', {
            templateUrl: 'templates/news1.html',
        })
       .when('/news2', {
           templateUrl: 'templates/news2.html',
       })
        .when('/news3', {
            templateUrl: 'templates/news3.html',
        })
        .when('/news4', {
            templateUrl: 'templates/news4.html',
        })
        .otherwise({
            redirectTo: '/'
        })


})
