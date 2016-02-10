(function() {
  var app = angular.module('quizApp', []);

  app.controller('MainController', function($scope, $http){
    $scope.key = "j6rxWE7dx4";
    $scope.termList = testTerms;
    console.log('REACHED GETQUIadsfasfdZLET')
    $http.get('/getQuizlet', function(err, data){
        console.log('REACHED GET')
        $scope.terms = data;
        console.log(data);
     });
  
  });


 
 


  var testTerms = [
    {
        "id": 64594058,
        "term": "audeo, ere, ausus sum",
        "definition": "dare",
        "image": null,
        "rank": 0
    },
    {
        "id": 64594059,
        "term": "cesso, are, avi, atum",
        "definition": "pause, hesitate",
        "image": null,
        "rank": 1
    },
    {
        "id": 64594060,
        "term": "cogo, ere, coegi, coactum",
        "definition": "collect",
        "image": null,
        "rank": 2
    },
    {
        "id": 64594061,
        "term": "doleo, ere, ui, itum",
        "definition": "suffer pain, cause pain, lament",
        "image": null,
        "rank": 3
    },
    {
        "id": 64594062,
        "term": "dubito, are, avi, atum",
        "definition": "doubt, hesitate",
        "image": null,
        "rank": 4
    },
    {
        "id": 64594456,
        "term": "iubeo, ere, iussi, iussum",
        "definition": "bid, order",
        "image": null,
        "rank": 5
    },
    {
        "id": 64594457,
        "term": "iuro, are, avi, atum",
        "definition": "swear",
        "image": null,
        "rank": 6
    },
    {
        "id": 64594458,
        "term": "soleo, ere, solitus sum",
        "definition": "be accustomed",
        "image": null,
        "rank": 7
    },
    {
        "id": 64594459,
        "term": "spero, are, avi, atum",
        "definition": "expect, hope, hope for",
        "image": null,
        "rank": 8
    },
    {
        "id": 64594460,
        "term": "valeo, ere, ui, itum",
        "definition": "be strong",
        "image": null,
        "rank": 9
    }
];

})();
