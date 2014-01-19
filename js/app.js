var MainModule = angular.module("Main", []);

MainModule.factory ('IdeSize', function() {
		var IdeSize = { 
				windowWidth: 200,
				windowHeight: 400,
				headerHeight: 20,
				viewWidth: 200,
				viewHeight: 400,
				listeners: []
		};
		
		IdeSize.addListener = function (listener) {
			IdeSize.listeners.push(listener);
		};
		
		IdeSize.initialize = function () {
			window.onresize = function() {
				IdeSize.windowResized(true);
			};
			
			IdeSize.windowResized(true);
		};
		
		IdeSize.windowResized = function (applyRibbonScope) {
			IdeSize.windowWidth = window.innerWidth;
			IdeSize.windowHeight = window.innerHeight;
			IdeSize.viewWidth = IdeSize.windowWidth;
			IdeSize.viewHeight = IdeSize.windowHeight - IdeSize.headerHeight;
			
			for (var i in IdeSize.listeners) {
				try {
					IdeSize.listeners[i].windowResized();
					if (applyRibbonScope) {
						IdeSize.listeners[i].$apply();
					}
				}
				catch (err) {
					alert('failed calling windowResized() on listener ' + i + ': ' + err);
				}
			}
		}

		return IdeSize;
});


MainModule.controller("RibbonCtrl", function ($scope, IdeSize) {
	
	$scope.viewWidth = 200;
	$scope.viewHeight = 400;
	$scope.windowResized = function () {
		$scope.viewHeight = IdeSize.viewHeight;
		$scope.viewWidth = IdeSize.viewWidth;
		$scope.windowWidth= IdeSize.windowWidth;
		$scope.windowHeight = IdeSize.windowHeight;
	}
	
	$scope.init = function () {
		IdeSize.addListener($scope);
		IdeSize.initialize();
	}
	
	$scope.init();
});
