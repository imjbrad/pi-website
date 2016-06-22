function elCenterInView(el){
  var element = $(el),
    $window = $(window),
    elVerticalCenter = element.offset().top + element.height()/2,
    viewportTop = $window.scrollTop(),
    viewportBottom = viewportTop + $window.height();
  return (elVerticalCenter > viewportTop) && (elVerticalCenter < viewportBottom);
}


/**
 * This directive sets a given state name
 * if the user is scrolling through
 * the section to which it is linked.
 */

export function ScrollSrefDirective($timeout, $state) {
  'ngInject';
  return {
    restrict: 'A',
    scope: true,
    link: function ($scope, $el, $attr) {

      $scope.configureWayPoint = function () {

        console.log($attr.scrollSref);

        $scope.stateName = $attr.scrollSref;
        $scope.state_reference = $state.get($scope.stateName);
        $scope.sectionEl = $el;

        if (!$scope.stateName)
          return;

        $scope.downOffset = function () {
          return angular.element(window).height() - ($scope.sectionEl.height() / 2);
        };

        $scope.upOffset = function () {
          return -$scope.sectionEl.height() / 2;
        };

        $scope.scrollHandler = function (direction) {
          $timeout.cancel($scope.tm);
          $scope.tm = $timeout(function () {
            if (elCenterInView($scope.sectionEl)) {
              $state.go($scope.stateName, {scroll: false});
              console.log(((direction == 'up' ? 'Up' : 'Down')) + " Scroll State Change for " + $scope.stateName);
            }
          }, 250);
        };

        $scope.downWaypoint = new Waypoint({
          element: $scope.sectionEl[0],
          offset: $scope.downOffset,
          handler: function (direction) {
            if (direction == "down") {
              $scope.scrollHandler(direction);
            }
          }
        });

        $scope.upWaypoint = new Waypoint({
          element: $scope.sectionEl[0],
          offset: $scope.upOffset,
          handler: function (direction) {
            if (direction == 'up') {
              $scope.scrollHandler(direction);
            }
          }
        });
      };

      $timeout(function () {
        console.log("Setting Up the Waypoint");
        $scope.configureWayPoint();
      });

    }
  }
}
