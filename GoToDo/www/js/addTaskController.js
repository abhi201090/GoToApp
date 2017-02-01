app.controller('addTaskController', function ($scope, $cordovaDatePicker,$ionicPlatform) {
    $scope.selectedDate = "Add a date"
    $ionicPlatform.ready(function () {
        $scope.showDatePicker = function () {
            var options = {
                date: new Date(),
                mode: 'datetime', // or 'time'
                minDate: new Date() - 10000,
                allowOldDates: false,
                allowFutureDates: true,
                doneButtonLabel: 'DONE',
                doneButtonColor: '#F2F3F4',
                cancelButtonLabel: 'CANCEL',
                cancelButtonColor: '#000000'
            };

            $cordovaDatePicker.show(options).then(function (date) {
                
            });
        };
    });

});