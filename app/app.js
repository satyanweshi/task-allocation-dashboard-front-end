
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngMessages', 'ngStorage', 'ngMockE2E', 'core', 'home', 'login', 'kpi', 'ui.bootstrap'])
        .config(['$locationProvider' ,'$routeProvider',
                 function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
              when('/', {
                template: '<home></home>'
              }).
              when('/login', {
                template: '<login></login>'
              }).
              otherwise('/');
          }
        ])
        .run(run);


    function run($rootScope, $http, $location, $localStorage) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }

        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
        });
    }