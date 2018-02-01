"use strict";

angular.module("DoctorApp")
  .controller("DoctorListCtrl", function($scope, DoctorFactory, $routeParams) {
    DoctorFactory.getDoctors()
    .then((DoctorData)=>{

      let docsObj = Object.values(DoctorData.doctors);
      
      docsObj.forEach(element => {
        $scope.doctors = Object.entries(element);
        console.log(Object.entries(element));
      });
      
      
    });
    
  });

