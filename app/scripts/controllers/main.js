'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    //use lsService and get the todo data
    var todosInStore = localStorageService.get('todos');
    //.todos is a split object or empty array
    $scope.todos = todosInStore && todosInStore.split('\n') || [];
    //watch for change in 'scope.todos' then update lsService
    $scope.$watch('todos', function(){
	localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);
    $scope.addTodo = function(){
	$scope.todos.push($scope.todo);
	$scope.todo = '';
    };
    $scope.removeTodo = function(index){
	$scope.todos.splice(index, 1);
    };
  });
