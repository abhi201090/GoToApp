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
    $urlRouterProvider.otherwise('/login');
    console.log(window.location.href);
});