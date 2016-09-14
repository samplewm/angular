(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

console.log("1");

CntItems.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.msg = "";
	$scope.cr = "red";
	$scope.sz = "1em";
console.log("11");
    $scope.sayFeedback = function () {
console.log("2");
	var count = 0;
	var indices = [];
	var x='';
	var y='';
	if (!($scope.name == undefined))
	{
console.log("size is: "+$scope.name.length);
       for (var i = 0; i < $scope.name.length; i++) {
		   if ($scope.name[i] != ' ')
	         x += $scope.name[i];
       }

console.log("no sps: " + x);
       for (var i = 0; i < x.length; i++) {
	   	   		   if ( (x[i] == ',') &&
	   	   		        (i+1 < x.length) &&
	   	   		        (x[i+1] != ',') )
	   	   	              y += x[i];
       }
console.log("no dups: : " + y);
        for (var i = 0; i < y.length; i++) {
			  if (y[i] == ',')
			     count++;
		}

console.log("commas : "  + count);
console.log("3");
	if (count == 0){
      $scope.msg = "Please enter data first, Need some food";
      $scope.cr = "red";
      $scope.sz = "5em";
    }
	else if (count <= 2){
	  $scope.msg =  "Enjoy!  Bon Appetit!";
      $scope.cr = "green";
      $scope.sz = "5em";
    }
	else if (count > 2){
	  $scope.msg =  "Too much! Pig:)";
      $scope.cr = "violet";
      $scope.sz = "10em";
    }
	return $scope.msg;
   }
   else {
      $scope.msg = "Please enter data first, Need some food";
      $scope.cr = "red";
      $scope.sz = "5em";
   }
	
  };
 }}
)();