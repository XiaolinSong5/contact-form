(function () {
    angular
        .module('contactform')
        .controller('FormCtrl', function($scope) {
            $scope.firstName= "Xiaolin";
            $scope.lastName= "Song";

            // function to change ui state to next page
            $scope.nextStep = function (location) {
               
                // check if valid to eather block the form if validation fails or let is go trough
                $state.go(location); // go to next step
               
            };

            $scope.submitForm = function () {
                // check if valid to eather block the form if validation fails or let is go trough
                if ($scope.contactForm.$valid) {
                    $scope.formLogic.submittingData = true;
                    var postData = cleanFormPost($scope.formFields);
                    webService.submitForm(postData).success(function (data) {
                        data.status === 200 ? _submitSucces() : _submitFail();
                    }).error(function (data, status) {
                        if (status === 400) {
                            $scope.formLogic.submittingData = false;
                            $scope.formLogic.backendFieldErrors = errorHandler.getErrorMessages(data);
                            $scope.applyBackendValidation(data.fieldErrors);
                        }
                        else {
                            _submitFail();
                        }
                    });
                }
            };


        });
  
}());
