export function MenuController($scope, $rootScope, $state){
  'ngInject';

  $scope.section_states = $state.get().filter(function(e, i, a){
    return e.data && e.data.sectionSelector;
  });

  $rootScope.$watchCollection('currentState', function(){
    if(!$rootScope.currentState)
      return;
    $scope.selected_state = $rootScope.currentState;
  });

  $scope.stateNameSelected = function(){
    $state.go($scope.selected_state.name);
    $('select').trigger('blur');
  };

  /*
  * Hacky iOS fix. the window will scroll when a fixed
  * input element is selected. you have to quickly
  * position the element absolutely, then return it
  * to fixed positioning on blur
  * **/
  var menu_block = $('.menu-block'),
      select_el = $('select'),
      originalPosition = menu_block.offset().top;

  select_el.on('touchstart', function() {

    var currentScrollPosition = $(window).scrollTop();
    var difference = currentScrollPosition - originalPosition - 1;

    menu_block[0].style.position = 'absolute';
    menu_block[0].style.top = 'auto';
    menu_block[0].style.zIndex = '100';
    menu_block[0].style.bottom = '-'+difference+'px';

    select_el.on('focus', function(e){
      e.preventDefault();
      $(window).scrollTop(currentScrollPosition);
      $(document).on('touchmove', preventUserFromScrollingDuringFocus);
    });

    function preventUserFromScrollingDuringFocus(e){
      e.preventDefault();
    }

    function reset() {
      console.log("Reset");
      menu_block[0].style.position = '';
      menu_block[0].style.top = '';
      menu_block[0].style.zIndex = '';
      menu_block[0].style.bottom = '';
      $(document).off('touchmove', preventUserFromScrollingDuringFocus);
    }

    select_el.on('blur', reset);

  });

}
