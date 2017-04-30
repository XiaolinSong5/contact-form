(function(){
    'use strict';

    angular
        .module('anwbServices')
        .service('iris', iris);

    function iris () {
        this.active = false;

        this.initIris = function () {
            if (!this.active) {
                // CODE BY CX FOR IRIS COMPONENT
                (function (d, t) {
                    var g = d.createElement(t), s = d.getElementsByTagName(t)[0],
                        t = new Date().getTime();
                    g.src = '//projects.elitechnology.com/jsprojects/anwb/init.js';
                    g.async = true;
                    s.parentNode.insertBefore(g, s);
                }(document, "script"));
                // END CODE BY CX FOR IRIS COMPONENT
                this.active = true;
            }
        };

        this.isActive = function (irisRules, questions) {

            if (questions.contactsoort && questions.categorie && questions.categorie.naam && questions.onderwerp) {
                var questionsToCompare = {
                    type: questions.contactsoort,
                    rubriek: questions.categorie.naam,
                    onderwerp: questions.onderwerp
                };
                var result = false;

                for (var i = 0; i < irisRules.length; i++) {
                    result = angular.equals(irisRules[i], questionsToCompare);
                    if (result) {
                        break;
                    }
                }
                return result;
            }
        };
    }
}());