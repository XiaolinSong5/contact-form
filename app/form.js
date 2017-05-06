(function () {
    angular
        .module('contactform')
        .controller('FormCtrl', formCtrl);
    formCtrl.$inject = ['$scope', '$state', 'iris'];

    function formCtrl($scope, $state, iris) {
        // function to change ui state to next page
        $scope.nextStep = function (location) {


            // check if valid to eather block the form if validation fails or let is go trough
            $state.go(location);

        };

        $scope.checkIris = function () {
            iris.initIris();
            $scope.formLogic.irisActive = true;
          //  window.alert("checkIrisCalled");

        };
        function init() {

            $scope.formFields = {};
            $scope.formLogic = {};
        }
        init();
    }
  
}());
