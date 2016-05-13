angular.module('showList',[]);
angular.module('showList')
.factory('showFactory', function(){
  var showList = {
   seeds: [
          {venue:'Jimbos', artist:'big cee', music:'hip hop', date:'August 11', price:'free' },
          {venue:'Crossroads', artist:'crosstones', music:'rock', date:'May 12', price:'5' },
          {venue:'Starbucks', artist:'singer songwriter', music:'jazz', date:'July 11', price:'free' },
     {venue:'Artes Americas', artist:'latin deluxe', music:'hip hop', date:'September 15', price:'free' },
          {venue:'Veni Vidi Vici', artist:'NOPE', music:'jazz', date:'October 29', price:'$20' },
             ]
  };
  
  return showList.seeds

})

    .controller("show.list",['$scope','showFactory',function($scope, showFactory){    
  $scope.title="Looking for Local Shows";
  $scope.alpha="vocab";
  $scope.list=showFactory;
}]);