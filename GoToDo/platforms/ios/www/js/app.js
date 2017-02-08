// ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'ngCordova'])
    .run(function ($ionicPlatform, $cordovaPushV5, $rootScope, $cordovaLocalNotification) {
    $ionicPlatform.ready(function () {
        // hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            window.StatusBar.styleLightContent();
        }
        var notificationOpenedCallback = function (jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };
        window.plugins.OneSignal
            .startInit("d5a6f42b-c389-463a-a233-6d52bb415608")
            .handleNotificationOpened(notificationOpenedCallback)
            .endInit();
        window.plugins.OneSignal.getIds(function (ids) {
            console.log('getIds: ' + JSON.stringify(ids));
            alert("userId = " + ids.userId + ", pushToken = " + ids.pushToken);
        });
        //console.log('app.js');
        //var options = {
        //    android: {
        //        senderID: "981686413111"
        //    },
        //    ios: {
        //        alert: "true",
        //        badge: "true",
        //        sound: "true"
        //    },
        //    windows: {}
        //};
        //$cordovaPushV5.initialize(options).then(function (result:any) {
        //    // start listening for new notifications
        //    $cordovaPushV5.onNotification();
        //    // start listening for errors
        //    $cordovaPushV5.onError();
        //    // register to get registrationId
        //    $cordovaPushV5.register().then(function (registrationId:any) {
        //        // save `registrationId` somewhere;
        //        console.log(registrationId);
        //        localStorage.setItem('deviceID', registrationId);
        //    }, function (err:any) {
        //        console.log(err);
        //    });
        //});
        //$rootScope.$on('$cordovaPushV5:notificationReceived', function (event: any, data: any) {  // use two variables here, event and data !!!
        //    console.log(data);
        //});
        //$rootScope.$on('$cordovaPushV5:errorOccurred', function (event:any, error:any) {
        //    console.log("notification error occured");
        //    console.log("event object: ", event);
        //    console.log("error object: ", error);
        //});
        //$cordovaPushV5.finish().then(function (result:any) {
        //    // OK finished - works only with the dev-next version of pushV5.js in ngCordova as of February 8, 2016
        //}, function (err:any) {
        //    // handle error
        //    console.log('finish error');
        //});
        //$cordovaPushV5.unregister();
    });
});

//# sourceMappingURL=app.js.map
