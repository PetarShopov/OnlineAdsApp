'use strict';
// The LoginController is responsible for the "Login" screen

app.controller('LoginController', [
    '$scope',
    '$rootScope',
    '$location',
    'authService',
    'notifyService',
    function ($scope, $rootScope, $location, authService, notifyService) {
        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    notifyService.showInfo("Login successful");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Login failed", err);
                }
            );
        };
    }]);