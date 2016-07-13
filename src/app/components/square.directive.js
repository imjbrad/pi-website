export function SquareDirective() {

  return {
    restrict: 'A',
    link: function($scope, $el, $attr){

      function makeSquare(){
        $el.height($el.width());
      }

      $(document).on('ready', makeSquare);
      $(window).on('resize', makeSquare);

    }
  }

}
