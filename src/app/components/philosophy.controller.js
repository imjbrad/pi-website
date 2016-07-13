export function PhilosophyCtrl($scope){
  'ngInject';

  $scope.stats = [
    {
      title: "72% perfect of college students",
      details: "72% percent of college students act and then say something that is about this long"
    },
    {
      title: '33% of students probably say something',
      details: '72%'
    },
    {
      title: '83% of students probably say something',
      details: '72%'
    }
  ];

  $scope.selectStat = function(i) {
    $scope.currentStatIndex = i;
    $scope.currentStat = $scope.stats[$scope.currentStatIndex];

    console.log($scope.currentStat);
  };

  $scope.selectStat(0);

}
