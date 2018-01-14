
var app = angular.module('toDoModule', []);

app.controller('toDoController', function($scope) {
	$scope.chores = [' Mow Lawn', ' Laundry', ' Walk the dog', ' Do the dishes'];
		$scope.onclick = function (choreToAdd) {
		$scope.chores.push(choreToAdd);
		$scope.choreToAdd="";
	};
		$scope.removeChore = function(chore) {
			var index = $scope.chores.indexOf(chore);
			$scope.chores.splice(index, 1);
		};

});


