angular.module('todolistapp').directive('helloWorld', function() {
    return {
        template: "This is a hello world directive!",
        restrict: "A"
    };
});
