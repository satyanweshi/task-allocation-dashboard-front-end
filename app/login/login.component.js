'use strict';

angular.
module('login').
component('login', {
  templateUrl: 'login/login.template.html',
  controller: ['$location','AuthenticationService', 
    function($location, AuthenticationService){
	   var self = this;
	   
	   self.initController = function initController(){
		   AuthenticationService.Logout();
	   };
	   
	   self.initController();
	   
	   self.login = function login(){
		   AuthenticationService.Login(self.username, self.password, function (result) {
               if (result === true) {
                   $location.path('/');
               } else {
                   self.error = 'Username or password is incorrect';
                   self.loading = false;
               }
           });
	   };
    }]
});