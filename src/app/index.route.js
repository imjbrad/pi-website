export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider

    .state('home', {
      url: '/'
    })

    .state('philosophy', {
      //url: '/philosophy',
      data: {
        sectionSelector: ".van.photo",
        sectionDisplayName: "Philosophy"
      },
      params: {
        scroll: null
      }
    })

    .state('product', {
      //url: '/product',
      data: {
        sectionSelector: ".product",
        sectionDisplayName: "Our App"
      },
      params: {
        scroll: null
      }
    })

    .state('company', {
      //url: '/company',
      data: {
        sectionSelector: ".company",
        sectionDisplayName: "Company"
      },
      params: {
        scroll: null
      }
    })

    .state('contact', {
      //url: '/contact',
      data: {
        sectionSelector: ".contact",
        sectionDisplayName: "Contact"
      },
      params: {
        scroll: null
      }
    });

  $urlRouterProvider.otherwise('/');

}
