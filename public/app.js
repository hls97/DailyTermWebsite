(function() {
  var app = angular.module('quizApp', []);

  app.controller('MainController', function($scope, $http, $location){
        $http.get('/getQuizlet').then(
            function successCallback(response){
                if(response['data'] != 'error'){
                    $scope.terms = response['data'];
                    $scope.rand = Math.floor(Math.random() * 4);
                    $scope.letters = ['a','b','c','d'];
                    $scope.showAnswer= false;
                }
                else{
                    console.log('RELOADING');
                    location.reload();
                }
            },
            function errorCallback(response){
                console.log('Error Callback');
                console.log(response);
        });
        $scope.checkAnswer = function(id){
            console.log(id);

            //check if index passed in matches the rand selected
            if (id === $scope.rand){
                
                $scope.answer = 'correct';

            }
            else{
                $scope.answer = 'wrong';
            }
            $scope.showAnswer = true;

            setTimeout(function() {
                location.reload(true);
            }, 4000);

        };
});


})();
