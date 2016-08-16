angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $ionicLoading) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  
	
  // Form data for the login modal
  $scope.data = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // custom login file
  $scope.submit = function(){
	  
	  $ionicLoading.show({template: 'Loading...'});
	  
        var link = 'https://www.juaratravel.com.my/function/api/api.php';

        $http.post(link, {email : $scope.data.email,password : $scope.data.password}).then(function (res){
            $scope.response = res.data;
			$ionicLoading.hide();
        });
    };
	
  // Perform the login action when the user submits the login form
 // $scope.doLogin = function() {
  //  console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
   // $timeout(function() {
   //   $scope.closeLogin();
   // }, 1000);
 // };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

/*.controller("umrahPackages",function($scope,$http){
	
	var link = 'http://192.168.0.5/function/api/api.php';
	
	$scope.getUmrahData = function(){
		$http.get(link,{params:{}})	
		 .success(function(data){
			 
			 $scope.departure	= data.departure;
			 
		})
		.error(function(data){
			
			alert('gagagag')
		})
		 
	}	
});*/

.controller('browse_category', function($scope,$http,$ionicLoading) {

  var link = 'https://www.juaratravel.com.my/function/api/browse_umrah.php';
  $ionicLoading.show({template: 'Loading...'})
  
  $scope.result = "";
  $http.get(link,{params:{action:'view_category'}})
  
    .success(function(data, status, headers,config){
	  
      //console.log('data success');
      console.log(data); 
	  $scope.result = data;	  
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){
		$ionicLoading.hide();
      //things = result.data.categoryName;
	  //$scope.result = data;
    });
})

.controller('browse_departure', function($scope,$http,$ionicLoading) {

  var link = 'https://www.juaratravel.com.my/function/api/browse_umrah.php';
  $ionicLoading.show({template: 'Loading...'})
  $scope.result = "";
  $http.get(link,{params:{action:'view_category_departure'}})
    .success(function(data, status, headers,config){
	$ionicLoading.hide;
      //console.log('data success');
      console.log(data); 
	  $scope.result = data;	  
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){
		$ionicLoading.hide();
      //things = result.data.categoryName;
	  //$scope.result = data;
    });
})

.controller('browse_departure_date', function($scope,$http,$ionicLoading) {

  var link = 'https://www.juaratravel.com.my/function/api/browse_umrah.php';
  $ionicLoading.show({template: 'Loading...'})
  $scope.result = "";
  $http.get(link,{params:{action:'view_departure_date'}})
    .success(function(data, status, headers,config){
		$ionicLoading.hide;
      //console.log('data success');
      console.log(data); 
	  $scope.result = data;	  
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){
		$ionicLoading.hide();
      //things = result.data.categoryName;
	  //$scope.result = data;
    });
})

