(function(){
    'use strict';

    angular
        .module('anwbServices')
        .service('dataService', dataService);

    function dataService(){
        this.formData = {};

        this.saveFormData = function(data) {
            this.formData = data;
        };

        this.getFormData = function() {
            return this.formData;
        };
    }
}());