app.controller('InputController', function($scope, BitcoinFactory, homeService){
  $scope.homeService = homeService;

  $scope.startingInvestment = 0;

  $scope.getRates = function(){
    BitcoinFactory.get('https://bitpay.com/api/rates')
    .then(function(response){

      console.log(response.data);
      // console.log(response.data[0]);
      returnedArray = response.data.filter(
          function(object){
            return object.code === 'USD';
          }
        );

      console.log(returnedArray);

      homeService.USDrate = returnedArray[0].rate;

      console.log(homeService.USDrate);

    });
  };

});
