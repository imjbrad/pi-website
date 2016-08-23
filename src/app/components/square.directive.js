export function SquareDirective() {

  return {
    restrict: 'A',
    link: function($scope, $el, $attr) {

      function makeSquare() {
        var computedWidth = $el.css("width");
        $el.css("height", computedWidth);
      }

      $(document).ready(makeSquare);
      $(window).on('resize', makeSquare);

      }

    }

}

