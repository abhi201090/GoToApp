app.config(function ($stateProvider, $urlRouterProvider) {
    console.log('Was here!');
    $stateProvider.state('login', {
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