export function FormController($scope){
  'ngInject';

  $scope.submitContactForm = function($event){

    var isValid = $scope.form1.$valid;

    if(!isValid){
      alert("Please complete the name, title, and email fields correctly.");
      $event.preventDefault();
    }

  }

}
