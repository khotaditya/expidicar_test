var app = angular.module("akcApp", ['ngMessages']);
app.controller('userCtrl', function($scope){
	
	$scope.sendData = function() {
		var fname = $scope.fname;
		var lname = $scope.lname;
		var email = $scope.email;
		var phone = $scope.phone;
		var num = $scope.num;
		var rue = $scope.rue;
		var city = $scope.city;
		var code = $scope.code;
		var bdate = $scope.birthdate;
		
//Error messages		
		var errMsgPhone = "Hey there, you forgot to enter Phone number";
		var errMsgEmail = "Hey there, you forgot to enter Email";
		var errMsgBdate = "Hey there, you forgot to enter Birthdate";
		
//form validation condition		
		if (phone == null){
			document.getElementById('credsMsg').innerHTML='<div class="alert alert-danger center-block text-center">'+errMsgPhone+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';	
		}
		
		if (email == null){
			document.getElementById('credsMsg').innerHTML='<div class="alert alert-danger center-block text-center">'+errMsgEmail+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';	
		}
		
		if (bdate == null){
			document.getElementById('credsMsg').innerHTML='<div class="alert alert-danger center-block text-center">'+errMsgBdate+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';	
		}
	};	

});
