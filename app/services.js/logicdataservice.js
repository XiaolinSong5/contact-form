(function(){
    'use strict';

    angular
        .module('anwbServices')
        .service('logicDataService', logicDataService);

    function logicDataService(){
        this.logicData = {};

        this.saveLogicData = function(data) {
            this.logicData = data;
        };

        this.getLogicData = function() {
            return this.logicData;
        };
    }
}());