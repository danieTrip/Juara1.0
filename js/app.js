// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.controller('ExampleController', function($scope, $http) {
 
    $scope.getData = function() {
        $http.get("https://www.juaratravel.com.my/function/api/api.php")
            .success(function(data) {
				//alert("hahahahahaha");
				console.log(data);
                $scope.firstname 	= data.firstName;
                $scope.name 		= data.name;
            })
            .error(function(data) {
                alert("ERROR");
            });
    }
 
})

/*exampleApp.controller("ExampleController",function($scope,$http){
	

$scope.getData =  function(){
	
	var link = 'http://192.168.0.5/function/api/api.php';
	
	$http.get(link,{params:{}})
	.success(function(data){
		
		$scope.departure = $data.departure
		
		})
	.error(function(){
		alert("gagagaga")
		})	
	}
})*/

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
		  controller: 'browse_category'
        }
      }
    })
	.state('app.browse_umrah', {
      url: '/browse_umrah',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse_umrah.html',
		  controller: 'browse_departure'
        }
      }
    })
	.state('app.browse_departure_date', {
      url: '/browse_departure_date',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse_departure_date.html',
		  controller: 'browse_departure_date'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
