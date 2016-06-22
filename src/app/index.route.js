export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider

    .state('home', {
      url: '/'
    })

    //.state('about', {
    //  //url: '/about',
    //  data: {
    //    sectionSelector: ".about",
    //    sectionDisplayName: "About"
    //  },
    //  params: {
    //    scroll: null
    //  }
    //})

    .state('philosophy', {
      //url: '/philosophy',
      data: {
        sectionSelector: ".philosophy",
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
        sectionDisplayName: "Product"
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
