function MainCtrl($scope,$rootScope,$http,$window){
	console.log("Entered the controller");
	var storage=$window.localStorage;
	$scope.populateOffers = function(){
		localStorage.clear();
		console.log("Entered the function!");
		console.log($scope.searchText);
	$http.get('http://ec2-54-202-72-108.us-west-2.compute.amazonaws.com/api/v1/offers').success(function(data, status) {
		$scope.offers = JSON.parse(data.info);
		$scope.showOffers = 'true';
		var i;
		var offers = [];

		for(i=0;i<$scope.offers.length;i++)
		{
			offers[i]=$scope.offers[i];
			if(i===10)
				break;
		}
		console.log(JSON.stringify(offers));
		localStorage["offers"]=JSON.stringify(offers);
		//console.log(JSON.parse(localStorage["offers"]));
		console.log("We use internet fetching here");
		console.log("Here, the data length is " + $scope.offers.length);

	}).error(function(data, status, headers, config) {
		console.log(data);
	});

	
	}

	$scope.getFromLocal = function(){
		$scope.offers =JSON.parse( localStorage["offers"]);
		console.log("We use localStorage here");
		console.log("Here, the data length is " + localStorage["offers"].length);
	}
	   
	 $scope.checkConnectionAndGetData=function(){
            var networkState = navigator.network.connection.type;
            console.log("Network State is" + networkState);
            if (networkState === Connection.UNKNOWN || networkState === Connection.NONE) {
                    /*navigator.notification.alert(
            'Sorry, you dont have network connectivity. We will not be able to show you any offers at this time.', 
            function() {},
            'Network unavailable',            // title
            'Continue'                  // buttonName
        );*/
            $scope.getFromLocal();
            //$scope.offers=$window.localStorage;
            //navigator.notification.vibrate(2000);   
            }
            else
            {
                $scope.populateOffers();
            }
        }
}