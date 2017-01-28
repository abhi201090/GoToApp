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
        var validity = function (tokenValidity) {
            return tokenValidity.check();
        }
        if (validity) {
            $urlRouterProvider.otherwise('/menu/home');
        }
        else {
            $urlRouterProvider.otherwise('/login');
        }
    }

    //$urlRouterProvider.otherwise('/menu/home');
    console.log(window.location.href);
});