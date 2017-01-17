angular.module('quoteApp')
.controller('mainController', function($scope, mainService){
   
   $scope.getQuotes = function(){
      $scope.quotes = mainService.getQuotes();
   }

   $scope.addQuote = function(text, author){
      mainService.addQuote(text, author);
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';
   }

   $scope.removeQuote = function(){
      mainService.removeQuote(this.quote);
   }

   $scope.getQuotes();

});