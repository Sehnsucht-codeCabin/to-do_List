
	angular.module('hallOfIdeas').config(function($routeProvider) {

		$routeProvider.when("/tasks", {

			templateUrl: "_views/tasks-list.html",
			controller: "toDoListController"
		});

		$routeProvider.when("/completed", {

			templateUrl: "_views/completed-tasks.html",
			controller: "toDoListController"

		});

		$routeProvider.when("/active", {

			templateUrl: "_views/active-tasks.html",
			controller: "toDoListController"

		});

		$routeProvider.otherwise({

			redirectTo: "/tasks"

		});

	});