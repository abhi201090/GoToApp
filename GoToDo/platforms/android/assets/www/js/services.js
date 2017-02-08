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

app.factory(("ionPlatform"), function ($q) {
    var ready = $q.defer();

    ionic.Platform.ready(function (device) {
        ready.resolve(device);
    });

    return {
        ready: ready.promise
    }
});