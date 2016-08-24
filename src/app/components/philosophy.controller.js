export function PhilosophyCtrl($scope){
  'ngInject';

  $scope.stats = [
    {
      title: 'Students have trouble sleeping.',
      details: '73% of students report sleep problems. When wellness suffers, productivity is bound to suffer as a result. By keeping wellness indicators at the forefront of our daily planning app, Pi aims to prevent burnout and encourage balance.'
    },
    {
      title: "Achieving balance is tough for students.",
      details: "$27b was lost in 2015 to mental-health-related absences from work. Considering that fact that 70% of college students work, and 3/6 of the top reasons millennials are unhappy at work have to do with work-life balance, it is clear that the problem doesn’t stop when class is dismissed."
    },
    {
      title: 'Generation Z has big dreams.',
      details: '72% of Gen Z wants to start businesses. Gen Z has big dreams, but we believe burnout will keep them from reaching their full potential. Pi creates solutions at the nexus of wellness, productivity, and students\' personal mission. We call this holistic productivity.'
    }
  ];

  $scope.selectStat = function(i) {
    $scope.currentStatIndex = i;
    $scope.currentStat = $scope.stats[$scope.currentStatIndex];
    console.log($scope.currentStat);
  };

  $scope.selectStat(0);

}
