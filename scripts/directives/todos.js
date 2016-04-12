"use strict";

angular.module('todolistapp')
.directive('todos', function() {
    return {
        templateUrl: 'templates/todos.html',
        controller: 'mainCtrl'
    };
});
