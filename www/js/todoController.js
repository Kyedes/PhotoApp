/**
 * Created by nielshansen on 03/09/15.
 */

/*
The same as explained in loginController
 */
angular.module('starter.todoController', [])
  /*
   The same as explained in loginController & accessing our Items factory
   */
      .controller('TodoCtrl', function ($scope, $http , Items) {

        /*
         here we used the $scope to create an array with objects
         We got 3 objects which we use in the todo.html
         */

    //setting our todos object equal to Items firebaseArray
        $scope.todos = Items;

    // Adding data to our firebase database
    $scope.addItem = function() {
      var title = prompt("What do you need to buy?");
      if (title) {
        $scope.todos.$add({
          "title": title
        });
      }
    };
    /*$http.get('data/todos.json').success(function (result) {
          console.log('data success')
          $scope.todos = result;

        })
          .error(function (error) {
            console.log(error);
          })*/


    /*
    The function to remove an object from the array, when you swipe and click the "Done" button.
    And our function takes and argument which is passed from the "Done" button.
     */
    $scope.deleteTodo = function (todo) {
      /*
      this is uses splice(a,b) it takes two arguments fx a and b
       The first argument is the index of the todos with we get from our passed value.
       the second argument tells that it is only this one we want to delete.
       */
      $scope.todos.splice($scope.todos.indexOf(todo) ,1)
    }
  })
