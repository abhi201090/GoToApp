app.controller('addTaskController', function ($scope, $state, $cordovaDatePicker, $ionicPlatform, $cordovaSQLite) {

    //$scope.backButton = function () {
    //  console.log('back');
    //$ionicHistory.goBack();
    //};
    $scope.datetimeValue = 'Select a date';

    $scope.insertTask = function () {

        var task_title = $scope.task_title;
        var task_desc = $scope.task_desc;
        var task_priority = $scope.priority.name;
        var task_date = $scope.datetimeValue;
        var query = "INSERT INTO task (task_title, task_desc, task_priority, task_date) VALUES (?, ?, ?, ?)";
        $cordovaSQLite.execute(db, query, [task_title, task_desc, task_priority, task_date]).then(function (res) {
            console.log("INSERT ID -> " + res.insertId);
        }, function (err) {
            console.error(err);
        });
        $state.go('menu.home');
    }

    //$scope.selectedDate = "Add a date"
    //$ionicPlatform.ready(function () {
    //    $scope.showDatePicker = function () {
    //        var options = {
    //            date: new Date(),
    //            mode: 'datetime', // or 'time'
    //            minDate: new Date() - 10000,
    //            allowOldDates: false,
    //            allowFutureDates: true,
    //            doneButtonLabel: 'DONE',
    //            doneButtonColor: '#F2F3F4',
    //            cancelButtonLabel: 'CANCEL',
    //            cancelButtonColor: '#000000'
    //        };

    //        $cordovaDatePicker.show(options).then(function (date) {

    //        });
    //    };
    //});
    $scope.selectedPriority = {}
    $scope.priorities = [{
        name: "High Priority"
    }, {
        name: "Medium Priority"
    }, {
        name: "Low Priority"
    }]



});