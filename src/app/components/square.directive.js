export function SquareDirective() {

  return {
    restrict: 'A',
    link: function($scope, $el, $attr) {

      function makeSquare() {
        $el.height($el.width());

      }
        $(window).on('resize', makeSquare);
        makeSquare();

      }

    }
}

