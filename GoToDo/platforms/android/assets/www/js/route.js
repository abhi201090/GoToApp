app.config(function ($stateProvider, $urlRouterProvider) {
    console.log('Was here!');
    $stateProvider.state('menu', {
        cache: false,
        url: '/menu',
        abstract: true,
        templateUrl: 'templates/sideMenu.html'
    })
       .state('menu.home', {
           cache:false,
           url: "/home",
           views: {
               'menuContent': {
                   templateUrl: "templates/dashboard.html"
               }
           }
       })
        .state('login', {
            cache:false,
            url: '/login',
            templateUrl: 'templates/login.html'
        })
     .state('signUp',
        {
            cache:false,
            url: '/signUp',
            templateUrl: 'templates/signUp.html'
        })
     .state('menu.addTask',
        {
            cache:false,
            url: '/addTask',
            views: {
                'menuContent': {
                    templateUrl: 'templates/addTask.html'
                }
            }
        })
    .state('forgotPwd',
        {
            cache:false,
            url: '/forgotPwd',
            templateUrl: 'templates/forgotPwd.html'
        });

    if (localStorage.getItem("tokenValue") === 'undefined' || localStorage.getItem("tokenValue") === null) {
        $urlRouterProvider.otherwise('/login');
        console.log(localStorage.getItem("tokenValue"));
    }
    else {
        console.log(localStorage.getItem("tokenValue"));
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

    //$urlRouterProvider.otherwise('/login');
    console.log(window.location.href);
});