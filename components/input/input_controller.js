app.controller('InputController', function($scope, BitcoinFactory, homeService){
  $scope.homeService = homeService;


  $scope.$watch('startingInvestment', function handleChange(newValue, oldValue){
    homeService.totalBitcoins = newValue/homeService.USDrate;
    homeService.startingAmount = newValue;
    console.log(homeService.startingAmount);
  });

  $scope.getRates = function(){
    BitcoinFactory.get('https://bitpay.com/api/rates')
    .then(function(response){
      returnedArray = response.data.filter(
          function(object){
            return object.code === 'USD';
          }
        );
      homeService.USDrate = returnedArray[0].rate;
    });
  };

  $scope.getRates();


});
