var app = angular.module("mod", ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
.controller("ctrl", function($scope) {
	$scope.clientDetails = [
		{"name": "John", "company":"TCS", "contact": "6261236743"},
		{"name": "Patrick", "company":"Wipro", "contact": "4243459456"},
		{"name": "David", "company":"TechM", "contact": "4247438789"},
		{"name": "Yen", "company":"Infosys", "contact": "6264538845"}
	];

	$scope.val = false;
	$scope.addC = function() {
		$scope.val = true;
	}

	$scope.saveClient = function() {
		if($scope.cName != null && $scope.cCompany != null && $scope.cPhone != null) {
			$scope.clientDetails.push({
				name: $scope.cName,
				company: $scope.cCompany,
				contact: $scope.cPhone
			});
		}
        if($scope.cName != null && $scope.cCompany != null && $scope.cPhone != null){
            $scope.cName = null;
			$scope.cCompany = null;
			 $scope.cPhone = null;
            $scope.val = false;
        }
	}

    $scope.userDetails = [
		{"name": "Sky", "contact": "3234657123"},
		{"name": "Dexter", "contact": "2345558456"},
		{"name": "Jenny", "contact": "4246748789"},
		{"name": "Smith", "contact": "7563293945"}
	];

	$scope.valuser = false;
	$scope.add = function() {
		$scope.valuser = true;
	}

	$scope.save = function() {
		if($scope.name != null && $scope.phone != null) {
			$scope.userDetails.push({
				name: $scope.name,
				contact: $scope.phone
			});
		}
        if($scope.name != null && $scope.phone != null){
            $scope.name = null;
			 $scope.phone = null;
            $scope.valuser = false;
        }
	}
});
