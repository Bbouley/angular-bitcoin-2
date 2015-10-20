inputApp.directive('inputDirective', function(homeService){

  return{
    restrict: 'E',
    // scope : {val:'@'},
    //   link : function(scope, element, attrs){
    //     console.log(scope.startingInvestment);
    //     console.log(attrs);
    //   element.bind('keydown', function(){
    //     console.log(scope.startingInvestment);
    //     homeService.startingAmount = scope.startingInvestment;
    //     homeService.totalBitcoins = scope.startingInvestment/homeService.USDrate;
    //   });
    // },
    templateUrl: '/components/input/input-template.html'
  };
});
