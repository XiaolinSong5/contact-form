(function(){
    'use strict';

    angular
        .module('anwbFactories')
        .factory('webService', webService);

    webService.$inject = ['$http', 'apigeeConfig', 'formDataObject'];

    function webService ( $http, apigeeConfig, formDataObject ) {
        return {
            getConfig: function () {
                return $http({
                    method: 'GET',
                    url: apigeeConfig.api_urls.config,
                    ssoAuthorizationRequired: false
                });
            },
            submitForm: function (postData) {
                return $http({
                    method: 'POST',
                    url: 'locahost:8080/contactform/form',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: postData,
                    transformRequest: formDataObject,
                    ssoAuthorizationRequired: false
                })
            },
            getMemberType: function() {
                return $http({
                    method: 'GET',
                    url: apigeeConfig.api_urls.memberType.replace('%host%', apigeeConfig.host),
                    ssoAuthorizationRequired: true
                });
            },
            getMembership: function() {
                return $http({
                    method: 'GET',
                    url: apigeeConfig.api_urls.membership.replace('%host%', apigeeConfig.host),
                    ssoAuthorizationRequired: true
                });
            },
            getAdres: function() {
                return $http({
                    method: 'GET',
                    url: apigeeConfig.api_urls.contact.replace('%host%', apigeeConfig.host),
                    ssoAuthorizationRequired: true
                });
            },
            getEmailadres: function() {
                return $http({
                    method: 'GET',
                    url: apigeeConfig.api_urls.emailadres.replace('%host%', apigeeConfig.host),
                    ssoAuthorizationRequired: true
                });
            },
            getPersonal: function() {
                return $http({
                    method: 'GET',
                    url: apigeeConfig.api_urls.personal.replace('%host%', apigeeConfig.host),
                    ssoAuthorizationRequired: true
                });
            }
        }
    }

}());


