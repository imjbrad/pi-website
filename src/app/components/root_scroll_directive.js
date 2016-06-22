/**
 * Created by jordanbradley on 6/22/16.
 */

function smoothScroll(selector){
  angular.element('html, body').animate({
    scrollTop: $(selector).offset().top - 65
  }, 0);
}

export function RootScrollDirective ($timeout, $rootScope, $state) {
  'ngInject';

  return {
    restrict: 'A',
    link: function($scope, $rootEl, $attr){

      var scrollTimer,
        EL_NEAR_TOP = ".about";

      //Know when the user is scrolling
      angular.element($rootEl).scroll(function() {
        $rootScope.scrolling = true;
        $timeout.cancel(scrollTimer);
        scrollTimer = $timeout(function() {
          $rootScope.scrolling = false;
        }, 250);
        $rootScope.$apply();
      });

      //Know when the user is scrolling near the top
      $rootScope.scrollingNearTop = true;

      new Waypoint({
        element: $(EL_NEAR_TOP)[0],
        handler: function() {
          $rootScope.scrollingNearTop = !$rootScope.scrollingNearTop;
          $rootScope.$apply();
        }
      });

      //Anchor scroll on state change
      $rootScope.$on("$stateChangeSuccess", function(e, to, toParams){
        $rootScope.currentState = to;
        if(to.data && to.data.sectionSelector && (toParams.scroll != false))
          smoothScroll(to.data.sectionSelector);
      })

    }
  };

}
