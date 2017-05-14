(function(){
    'use strict';

    angular
        .module('anwbFactories')
        .factory('webService', webService);

    webService.$inject = ['$http'];

    function webService ( $http ) {
        return {
            getConfig: function () {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8080/contactform/form/config',
                    ssoAuthorizationRequired: false
                });
            }
       
        };
    }

}());


