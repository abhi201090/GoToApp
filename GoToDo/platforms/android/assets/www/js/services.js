app.service('tokenValidity', function ($http) {
    this.check = function () {

        $http.get('http://gotoappservice.com/token', {
            headers: { "Authorization": localStorage.getItem("tokenValue") }
        })
            .then(function (response) {
                return true;
            },
            function (error) {
                return false;
            });
    }
});