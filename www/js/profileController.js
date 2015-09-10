/**
 * Created by nielshansen on 10/09/15.
 */
angular.module('starter.profileController', [])

.controller('ProfileCtrl', function ($scope, Camera) {

    $scope.getPhoto = function() {
      Camera.getPicture().then(function(imageURI) {
        $scope.photo = imageURI;
      }, function(err) {
        console.err(err);
      })

  }
  })

  .factory('Camera', ['$q', function($q) {

    return {
      getPicture: function(options) {
        var q = $q.defer();

        navigator.camera.getPicture(function(result) {
          // Do any magic you need
          q.resolve(result);
        }, function(err) {
          q.reject(err);
        }, options);

        return q.promise;
      }
    }
  }]);
