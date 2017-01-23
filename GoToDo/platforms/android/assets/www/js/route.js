app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        Url: '/',
        templateUrl: 'templates/login.html'
    })
        .state('signUp',
        {
            Url:'/signUp',
            templateUrl:'templates/signUp.html'
        });
    $urlRouterProvider.otherwise('/');
});