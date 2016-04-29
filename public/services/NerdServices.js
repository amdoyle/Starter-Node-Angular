angular.module('NerdServices', []).factory('Nerd', ['$http', function($http) {

  return {
    // call to get all the nerds from the node backend api
    get : function() {
      return $http.get('/api/nerds');
    },

// the routes below will work once more API are defined and listed on the Node server

    // call to Post and create a new nerd
    create : function(nerdData) {
      return $http.post('/api/nerds', nerdData);
    },

    // call to DELETE a nerd 
    delete : function(id) {
      return $http.delete('/api/nerds/' + id);
    }
  }
}]);
