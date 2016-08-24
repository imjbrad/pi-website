export function PhilosophyCtrl($scope){
  'ngInject';

  var citations = [
    'http://campusmindworks.org/students/self_care/sleep.asp',
    'http://www.hbs.edu/news/articles/Pages/mental-health-workplace.aspx?cid=sm-fb-sf46164966-sf46164966',
    'https://cew.georgetown.edu/wp-content/uploads/Working-Learners-Report.pdf',
    'http://www.ey.com/US/en/About-us/Our-people-and-culture/EY-study-highlights-why-people-are-quitting-their-jobs',
    'http://www.ey.com/Publication/vwLUAssets/EY-rise-of-gen-znew-challenge-for-retailers/$FILE/EY-rise-of-gen-znew-challenge-for-retailers.pdf'
  ];

  function cite(url){
    return '<a class="cite" target="_blank" href="'+url+'">'+(citations.indexOf(url)+1)+'</a>';
  }

  $scope.stats = [
    {
      title: 'Students have trouble sleeping.',
      details: '73% of students report sleep problems'+cite(citations[0])+' When wellness suffers, productivity is bound to suffer as a result. By keeping wellness indicators at the forefront of our daily planning app, Pi aims to prevent burnout and encourage balance.'
    },
    {
      title: "Achieving balance is tough for students.",
      details: "$27b worth of work days are lost to mental-health-related absences each year"+cite(citations[1])+". Considering that fact that 70% of college students work"+cite(citations[2])+", and &frac12; of the top reasons workers are unhappy involve work-life balance"+cite(citations[3])+", it's clear that the challenge of achieving balance doesn't stop when class is dismissed."
    },
    {
      title: 'Burnout will hold students back.',
      details: '62% of Generation Z would like to start their own companies'+cite(citations[4])+'. They have big dreams and ambition, but burnout will prevent achievement. Pi creates solutions at the nexus of wellness, productivity, and personal drive. We call this <i>holistic productivity</i>.'
    }
  ];

  $scope.selectStat = function(i) {
    $scope.currentStatIndex = i;
    $scope.currentStat = $scope.stats[$scope.currentStatIndex];
    console.log($scope.currentStat);
  };

  $scope.selectStat(0);

}
