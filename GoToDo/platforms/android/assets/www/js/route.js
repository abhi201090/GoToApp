app.config(function ($stateProvider, $urlRouterProvider) {
    console.log('Was here!');
    $stateProvider.state('menu', {
        url: '/menu',
        abstract:true,
        templateUrl: 'templates/sideMenu.html'
    })
       .state('menu.home', {
           url: "/home",
           views: {
               'menuContent': {
                   templateUrl: "templates/dashboard.html"
               }
           }
       })
        .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html'
    })
     .state('signUp',
        {
            url: '/signUp',
            templateUrl: 'templates/signUp.html'
        })
    .state('forgotPwd',
        {
            url: '/forgotPwd',
            templateUrl: 'templates/forgotPwd.html'
        });

    if (localStorage.getItem("tokenValue") == null) {
        $urlRouterProvider.otherwise('/login');
    }
    else {

        var req = {
            method: 'GET',
            url: 'http://gotoappservice.com/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: Object.toparams(data)
        }
        $http(req)
        .then(
            function (response) {
                localStorage.setItem("tokenValue", response.access_token);
                $state.go("menu.home");
            },
            function (error) {

                var e = error;
                console.log(error);
            }
            );

    }
    //$urlRouterProvider.otherwise('/menu/home');
    console.log(window.location.href);
});