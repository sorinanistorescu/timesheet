/**
 * 
 */
var adminModule = angular.module('admin', []);
adminModule.controller('AdministratorController', AdministratorController);

function AdministratorController ($scope) {
	var projects = [{name:"ING", code:"ING"}, {name:"IBM", code:"IBM"}];
	
	$scope.projects = projects;
	$scope.user = {email : "username@timesheet.com"};
	
	$scope.submit= function() {
		alert('Submitting');
	};
}


var userModule=angular.module('user',[]);
userModule.controller('UserController', UserController);

function UserController($scope) {
	
}