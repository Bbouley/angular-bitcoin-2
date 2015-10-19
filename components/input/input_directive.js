inputApp.directive('inputDirective', function(homeService){

  return{
    restrict: 'E',
    scope : false,
    //   link : function(scope, element, attrs){
    //     console.log(scope.startingInvestment);
    //     console.log(attrs);
    //   element.on('input', function(){
    //     homeService.startingAmount = scope.startingInvestment;
    //     homeService.totalBitcoins = scope.startingAmount/homeService.USDrate;

    //   });
    // },
    templateUrl: '/components/input/input-template.html'
  };
});
