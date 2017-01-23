app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        Url: '/',
        templateUrl: 'templates/login.html'
    });
    $urlRouterProvider.otherwise('/');
});