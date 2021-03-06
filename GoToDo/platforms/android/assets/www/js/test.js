﻿angular.module('ionicApp', ['ionic'])

.run(function ($state, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (evt, toState) {
        console.log('stateChangeSuccess');
        if (toState.headerChangeColor) {
            $rootScope.headerChangeColor = true;
        } else {
            $rootScope.headerChangeColor = false;
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('eventmenu', {
          url: "/event",
          abstract: true,
          templateUrl: "templates/event-menu.html"
      })
      .state('eventmenu.home', {
          url: "/home",
          views: {
              'menuContent': {
                  templateUrl: "templates/home.html"
              }
          }
      })
    .state('eventmenu.home2', {
        url: "/home2",
        views: {
            'menuContent': {
                templateUrl: "templates/home2.html"
            }
        },
        headerChangeColor: true
    })
      .state('eventmenu.checkin', {
          url: "/check-in",
          views: {
              'menuContent': {
                  templateUrl: "templates/check-in.html",
                  controller: "CheckinCtrl"
              }
          }
      })
      .state('eventmenu.attendees', {
          url: "/attendees",
          views: {
              'menuContent': {
                  templateUrl: "templates/attendees.html",
                  controller: "AttendeesCtrl"
              }
          },
          headerChangeColor: true
      })

    $urlRouterProvider.otherwise("/event/home");
})

.controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {
    $scope.attendees = [
      { firstname: 'Nicolas', lastname: 'Cage' },
      { firstname: 'Jean-Claude', lastname: 'Van Damme' },
      { firstname: 'Keanu', lastname: 'Reeves' },
      { firstname: 'Steven', lastname: 'Seagal' }
    ];

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
})

.controller('CheckinCtrl', function ($scope) {
    $scope.showForm = true;

    $scope.shirtSizes = [
      { text: 'Large', value: 'L' },
      { text: 'Medium', value: 'M' },
      { text: 'Small', value: 'S' }
    ];

    $scope.attendee = {};
    $scope.submit = function () {
        if (!$scope.attendee.firstname) {
            alert('Info required');
            return;
        }
        $scope.showForm = false;
        $scope.attendees.push($scope.attendee);
    };

})

.controller('AttendeesCtrl', function ($scope) {

    $scope.activity = [];
    $scope.arrivedChange = function (attendee) {
        var msg = attendee.firstname + ' ' + attendee.lastname;
        msg += (!attendee.arrived ? ' has arrived, ' : ' just left, ');
        msg += new Date().getMilliseconds();
        $scope.activity.push(msg);
        if ($scope.activity.length > 3) {
            $scope.activity.splice(0, 1);
        }
    };

});