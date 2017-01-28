app.controller('taskController', function ($scope, $ionicModal, $ionicPopup) {

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('new-task.html', function (modal) {
        $scope.taskModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Open our new task modal
    $scope.newTask = function () {
        $scope.taskModal.show();
    };

    // Close the new task modal
    $scope.closeNewTask = function () {
        $scope.taskModal.hide();
    };

    $scope.selectedPriority = {}
    $scope.priorities = [{
        name: "High Priority"
    }, {
        name: "Medium Priority"
    }, {
        name: "Low Priority"
    }]

});
