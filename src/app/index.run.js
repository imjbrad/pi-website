export function runBlock ($timeout, $rootScope) {
  'ngInject';

  var scrollTimer;

  //Scroll helper
  angular.element(window).scroll(function() {

    var scrollTop = $(this).scrollTop();

    //$rootScope.scrollingNearTop = (scrollTop < 300);

    $rootScope.$apply(function(){
      $rootScope.scrolling = true;
    });

    $timeout.cancel(scrollTimer);

    scrollTimer = $timeout(function() {
      $rootScope.scrolling = false;
      console.log($rootScope.scrolling);
    }, 250);

  });

  var menuBlock = $(".short-cuts");
  $rootScope.scrollingNearTop = true;

  new Waypoint({
    element: menuBlock[0],
    handler: function() {
      $rootScope.scrollingNearTop = !$rootScope.scrollingNearTop;
      $rootScope.$apply();
      console.log("passed");
    }
    //offset: function() {
    //  return -this.element.clientHeight
    //}
  })

}
