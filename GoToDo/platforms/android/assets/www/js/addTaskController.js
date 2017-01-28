app.controller('addTaskController', function ($scope, $cordovaDatePicker) {

    $scope.datePickerShow = function () {
        var options = {
            date: new Date(),
            mode: 'datetime', // 'date' or 'time'
            minDate: new Date(),
            allowOldDates: false,
            allowFutureDates: true,
            doneButtonLabel: 'DONE',
            doneButtonColor: '#F2F3F4',
            cancelButtonLabel: 'CANCEL',
            cancelButtonColor: '#000000'
        };
        $cordovaDatePicker.show(options).then(function (date) {
            $modelValue[$options.key] = date;
        });
    }


});