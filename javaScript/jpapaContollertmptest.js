(function () {
    'use strict';

    angular
        .module('jPapa ')
        .controller('jpapaContollertmptest', jpapaContollertmptest);

    jpapaContollertmptest.$inject = [''];

    /* @ngInject */
    function jpapaContollertmptest() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'jpapaContollertmptest';

        activate();

        ////////////////

        function activate() {
        }
    }
})();