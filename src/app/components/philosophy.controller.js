export function PhilosophyCtrl($scope){
  'ngInject';

  $scope.stats = [
    {
      title: 'Students have trouble sleeping.',
      details: '73% of students report sleep problems. When wellness suffers, productivity is bound to suffer as a result. By keeping wellness indicators at the forefront, Pi aims to ensure student success.'
    },
    {
      title: "Achieving balance is tough for students.",
      details: "The problem doesn't stop when class is dismissed. As 70% of college students work, $27b was lost in 2015 to mental health related work absences. Additionally, 3/6 of the top reasons melinials are unhappy at work have to do with work life balance."
    },
    {
      title: 'Gen Z has big dreams.',
      details: '72% of Gen Z wants to start businesses. Gen Z has big dreams, but we believe burn out will keep them from reaching their full potential. Pi creates solutions at the nexus of wellness, productivity, and students\' personal mission. We call this holistic productivity.'
    }
  ];

  $scope.selectStat = function(i) {
    $scope.currentStatIndex = i;
    $scope.currentStat = $scope.stats[$scope.currentStatIndex];
    console.log($scope.currentStat);
  };

  $scope.selectStat(0);

}
