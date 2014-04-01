/**
 * 
 */
var adminModule = angular.module('admin', []);
adminModule.controller('AdministratorController', AdministratorController);

function AdministratorController ($scope, $http) {
	var projects = [{name:"ING", code:"ING"}, {name:"IBM", code:"IBM"}];
	
	$scope.projects = projects;
	$scope.user = {email : "username@timesheet.com"};
	
	$scope.submit= function() {
		$scope.addUser($scope, $http);
	};
	
	$scope.addUser=function($scope, $http) {
		
		var employee = new Object();
		employee.email = $scope.user.email;
		employee.project = null;
		employee.firstName = 'testFN';
		employee.lastName = 'testLN';
		
		var employeeJSON = angular.toJson(employee);
		alert(employeeJSON);
		
		var addUserRequest = //$http.post("rest/admin/addUser");
		
		$http({
		      method: 'POST',
		      data: employeeJSON,
		      url:'rest/admin/users/add',
		      headers: {'Content-Type':'application/json;'}
		    });
		
		addUserRequest.success(function(data, status, headers, config) {
			alert("AJAX succeded!");
        });
		addUserRequest.error(function(data, status, headers, config) {
            alert("AJAX failed!");
        });

	};
}


var userModule=angular.module('user',[]);
userModule.controller('UserController', UserController);

function UserController($scope) {
	
}