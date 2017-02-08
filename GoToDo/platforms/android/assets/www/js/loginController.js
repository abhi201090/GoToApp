app.controller('loginController', function ($scope, $http, $state, $ionicPopup, $cordovaLocalNotification, $cordovaPush, $ionicPlatform) {

    $scope.login = function () {
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
                var alarmTime = new Date();
                alarmTime.setMinutes(alarmTime.getMinutes() + 2);
                localStorage.setItem("tokenValue", response.data.access_token);
                $cordovaLocalNotification.add({
                    id:'1234',
                    date: alarmTime,
                    message: 'Sample Message',
                    title: 'Sample Title'
                }).then(function () {
                    console.log('Added Notification');
                });
                $state.go("menu.home");
            },
            function (error) {

                $ionicPopup.alert(
                    {
                        template:'Invalid email/password'
                    })
            }
            );
    }
    
});