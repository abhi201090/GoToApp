app.controller('loginController', function ($scope, $http,$state) {
    $scope.login = function(){
        var data = {
            username:$scope.email,
            password:$scope.password,
            grant_type:'password'
        };
        var req = {
            method: 'POST',
            url: 'http://localhost:5000/AppService/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data:data
        }
        $http(req)
        .then(
            function (response) {
                $state.go("dashboard");
            },
            function () {

            }
            );
    }
    
});