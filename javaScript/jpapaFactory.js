(function () {
    'use strict';

    angular
        .module('jPapa')
        .factory('jpapaFactory', jpapaFactory);

    jpapaFactory.$inject = [''];

    /* @ngInject */
    function jpapaFactory() {
        var service = {
    save:save
    };

    return service;

    ////////////////

    function save() {
    }
}
})();


