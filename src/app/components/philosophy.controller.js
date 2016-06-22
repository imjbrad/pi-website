export function PhilosophyCtrl($scope){
  'ngInject';

  $scope.stats = [
    {
      title: '73% of students probably say something',
      details: "72%"
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

  $scope.selectStat = function($event, i) {
    $scope.currentStat = $scope.stats[i];
    console.log($scope.currentStat);
    $event.stopPropagation();
  };

  $scope.currentStat = $scope.stats[0];

}
