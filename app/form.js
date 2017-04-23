(function () {
    angular
        .module('contactform')
        .controller('FormCtrl', formCtrl);
    formCtrl.$inject = ['$scope', '$state'];

    function formCtrl($scope, $state) {
        // function to change ui state to next page
        $scope.nextStep = function (location) {


            // check if valid to eather block the form if validation fails or let is go trough
            $state.go(location);

        };

        $scope.checkIris = function () {
            window.alert("checkIrisCalled");

        };
    }
  
}());
