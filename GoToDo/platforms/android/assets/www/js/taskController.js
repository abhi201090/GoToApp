app.controller('taskController', function ($scope, $cordovaSQLite, $ionicPlatform) {
    $scope.allSessions = [];
    var flag = false;
    var getTasks = function () {
        var query = "SELECT * FROM task";
        $cordovaSQLite.execute(db, query).then(function (res) {
            //console.log(res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    console.log("SELECTED -> " + res.rows.item(i).task_desc);
                    var dateTime = res.rows.item(i).task_date;
                    dateTime = moment(dateTime).format("dddd, MMMM Do, h:mm a");
                    $scope.allSessions.push({
                        desc: res.rows.item(i).task_desc,
                        title: res.rows.item(i).task_title,
                        priority: res.rows.item(i).task_priority,
                        date: dateTime
                    });
                }
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }
    $ionicPlatform.ready(function () {
        flag = true;
        getTasks();
        //console.log(db);
    });
    if (flag) {
        getTasks();
    }

});