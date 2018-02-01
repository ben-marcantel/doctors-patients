"use strict";
angular.module("DoctorApp")
.factory("DoctorFactory", function($q,$http){
  let  getDoctors = ()=> {
    return $q((resolve, reject) => {
      $http
        .get(`https://cohort23-exercises.firebaseio.com/doctors.json`)
        .then(doctors => {
          resolve(doctors.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  return{getDoctors};
})
