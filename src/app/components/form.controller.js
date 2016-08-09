export function FormController($scope){
  'ngInject';

  $scope.contactFormModel = {};

  $scope.submitContactForm = function($event){

    $event.preventDefault();

    var form = $scope.form1,
        isValid = $scope.form1.$valid;

    if(!isValid){
      alert("Please complete the name, title, and email fields correctly.");
      return false;
    }

    $("#contactForm").submit();
    alert("Thanks for reaching out. Jordan will follow up with you shortly.");
    $scope.contactFormModel = null;

  }

}
