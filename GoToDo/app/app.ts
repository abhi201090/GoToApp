// ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var db: any;
var app = angular.module('starter', ['ionic', 'ngCordova', 'ion-datetime-picker'])
    .run(($ionicPlatform: ionic.platform.IonicPlatformService, $cordovaSQLite: any, $ionicPickerI18n: any) => {
        $ionicPlatform.ready(() => {
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
            var notificationOpenedCallback = function (jsonData:any) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            };

            if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                db = window.sqlitePlugin.openDatabase({ name: "todo.db", location: 2, createFromLocation: 1 });
            }
            else {
                db = $cordovaSQLite.openDB({ name: "todo.db", iosDatabaseLocation: 'default' });
                console.log('android sqlite');
            }

            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS task (task_id integer primary key autoincrement, task_title varchar(20), task_desc varchar(20), task_priority varchar(20), task_date varchar(20))");
            //localStorage.setItem("tokenValue", response.access_token);
            //localStorage.setItem("todoDb", db);
            $ionicPickerI18n.okClass = "button button-dark";
            $ionicPickerI18n.cancelClass = "button-stable";
            console.log('end of app.js');

            window.plugins.OneSignal
                .startInit("d5a6f42b-c389-463a-a233-6d52bb415608")
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();

            window.plugins.OneSignal.getIds(function (ids:any) {
                console.log('getIds: ' + JSON.stringify(ids));
                //alert("userId = " + ids.userId + ", pushToken = " + ids.pushToken);
            });
            
        })
    });