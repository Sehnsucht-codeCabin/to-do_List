
	angular.module('hallOfIdeas').factory("tasksService", function($http) {

		// get ideas from json file
		function _getTasksList() {

			return $http.get('to-do_list_data.json');

		}

		// post ideas to json file
		function _updateTasksList(formData) {

			return $http.post('save.php', formData);

		}

		// return all in the end as an object literal
		return {

			getTasksList: _getTasksList,
			updateTasksList: _updateTasksList

		}

	});