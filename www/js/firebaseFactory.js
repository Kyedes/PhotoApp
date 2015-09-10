/**
 * Created by nielshansen on 07/09/15.
 */

/*
This is our factory for controlling our Firebase connection


 */
angular.module('starter.firebaseFactory', ['firebase'])
.factory("Items", function($firebaseArray) {
                              // YOU WILL HAVE TO CHANGE THIS URL TO YOUR OWN,
                              // WHICH IS FOUND BY SIGNING IN TO YOUR FIREBASE ACCOUNT AND COPY/PASTE YOUR UNIQUE URL
                              // RIGHT HERE :
  var itemsRef = new Firebase("https://<INSERT-YOU--UNIQUE-URL-HERE>.firebaseio.com/todos");
  return $firebaseArray(itemsRef);
})
