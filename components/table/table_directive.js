tableApp.directive('tableDirective', function(homeService){
  return{
    restrict: 'E',
    templateUrl : '/components/table/table-template.html',
    scope: {tableProfit : '@', amounts : '@', tableStartInvestment : '='},
    link: function(scope, element, attrs){
      scope.amounts = [1000, 5000, 10000, 20000, 50000];
      scope.tableStartInvestment = function(amount){
        return amount/homeService.USDrate * homeService.startingAmount;
      };
      scope.tableProfit =  function(amount){
        return (amount/homeService.USDrate * homeService.startingAmount) - homeService.startingAmount;
      }
    }
  };
});
