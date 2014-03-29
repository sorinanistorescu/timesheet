/**
 * 
 */

var projects = {"projects":[{"name":"ING"}, {"name":"IBM"}]};


function AdministratorController($scope) {
	$scope.user = {email : "username@timesheet.com"};
	$scope.projects = projects;
}