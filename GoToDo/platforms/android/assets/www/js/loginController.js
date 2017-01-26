app.controller('loginController', function ($scope, $http,$state) {
    $scope.login = function(){
        var data = {
            username: $scope.email,
            password: $scope.password,
            grant_type: 'password'
        }
        var username = $scope.email;
        var password = $scope.password
        Object.toparams = function ObjecttoParams(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
        };

        var req = {
            method: 'POST',
            url: 'http://gotoappservice.com/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: Object.toparams(data)
        }
        $http(req)
        .then(
            function (response) {
                $state.go("menu.home");
            },
            function (error) {

                var e = error;
                console.log(error);
            }
            );
    }
    
});