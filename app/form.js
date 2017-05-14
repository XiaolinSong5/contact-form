(function () {
    angular
        .module('contactform')
        .controller('FormCtrl', formCtrl);
    formCtrl.$inject = ['$scope', '$state', 'iris', 'dataService', 'logicDataService', 'webService'];

    function formCtrl($scope, $state, iris, dataService, logicDataService, webService) {
        // function to change ui state to next page
        $scope.nextStep = function (location) {


            // check if valid to eather block the form if validation fails or let is go trough
            $state.go(location);

        };

        $scope.checkIris = function () {
            if (iris.isActive($scope.formLogic.config.irisRegels, $scope.formFields)) {
                // init iris
                iris.initIris();
                $scope.formLogic.irisActive = true;
            }

        };
        function init() {

            $scope.formFields = {};
            $scope.formLogic = {};
            // get formdata that already exists
            $scope.formFields = dataService.getFormData();
            $scope.formLogic = logicDataService.getLogicData();

            // fill other dropdowns
            if (!$scope.formLogic.config) {
                webService.getConfig().then(function (response) {
                    $scope.formLogic.config = response.data;
                });
            }
        }
        init();
    }
  
}());
