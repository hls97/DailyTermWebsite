
(function() {
  var app = angular.module('terms', []);
	app.controller('GetController', function($scope, $http){
        this.termList = webTerms;
        this.id = id;
   });


  function getID(){
  	return Math.floor(Math.random() * (20000000 - 1000000)) + 1000000;
  }

  $http.get('/getQuestion', function(err, data){
  	$scope.question = data;
  })
  
 
  
  	
  // handling the response here
})();