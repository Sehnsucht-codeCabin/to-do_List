
	angular.module('hallOfIdeas').controller('toDoListController', function($scope, tasksService) {

			// import previously loaded data from json file
			tasksService.getTasksList().success(function(data)  {
			
				$scope.tasks = data;

			}); 

			$scope.counting = function() {

				if($('.task-wrapper').length !== 0) {

					return true;

				} else {

					return false;

				}

			};
			

			//update data to json file
			$scope.updateData = function() {

				tasksService.updateTasksList($scope.tasks).then(function(data) {

					console.log(data);

				});

			}

			// submit form to add new task
			$scope.addTask = function(newTask) {

				// add in the meantime
				$scope.tasks.unshift({description: newTask.description, completed: false});

				// empty added task
				$scope.newTask.description = '';

			    // update json file with new data
				$scope.updateData();

				
			}

			//console.log($scope.showFilteringOptions);

			$scope.editTask = function(index) {

				// update value
				$scope.tasks[index].description = $('.edit-description')[index].value;
				// cloak editing again
				$scope.activateEditing = false;

				//hide editing form
				$scope.selectedIndex = '';

				// update json file with new data
				$scope.updateData();

			}

			$scope.removeTask = function(index) {

				$scope.tasks.splice(index, 1);

				// update json file with new data
				$scope.updateData();

				$scope.counting();

			}

			$scope.showEditingField = function(index) {

				$scope.selectedIndex = index;

			}

			

			/*$scope.countTasks = function(length) {

				if(length == 0) {

					return false;

				} else {

					return true;

				}

			}*/


		});