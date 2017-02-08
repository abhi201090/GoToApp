app.controller('sideMenuController', function ($scope, $state) {
    $scope.signOut = function () {
        localStorage.setItem("tokenValue", null)
        console.log("SignOut");
        $state.go("login");
    }

});