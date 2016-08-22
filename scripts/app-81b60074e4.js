/******/!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}// webpackBootstrap
/******/
var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";var n=o(1),r=o(2),l=(o(3),o(4)),i=o(5),c=o(6),s=o(8),a=o(9),u=o(10);angular.module("websiteV2",["ui.router"]).config(n.config).config(r.routerConfig).directive("rootScroll",l.RootScrollDirective).directive("scrollSref",s.ScrollSrefDirective).directive("makeSquare",u.SquareDirective).controller("MenuController",i.MenuController).controller("FormController",c.FormController).controller("PhilosophyCtrl",a.PhilosophyCtrl)},function(e,t){"use strict";function o(){}Object.defineProperty(t,"__esModule",{value:!0}),t.config=o},function(e,t){"use strict";function o(e,t){"ngInject";e.state("home",{url:"/"}).state("philosophy",{data:{sectionSelector:".van.photo",sectionDisplayName:"Philosophy"},params:{scroll:null}}).state("product",{data:{sectionSelector:".product",sectionDisplayName:"Our App"},params:{scroll:null}}).state("company",{data:{sectionSelector:".company",sectionDisplayName:"Company"},params:{scroll:null}}).state("contact",{data:{sectionSelector:".contact",sectionDisplayName:"Contact"},params:{scroll:null}}),t.otherwise("/")}o.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=o},function(e,t){"use strict";function o(e){}Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=o},function(e,t){"use strict";function o(e){angular.element("html, body").animate({scrollTop:$(e).offset().top-65},0)}function n(e,t,n){"ngInject";return{restrict:"A",link:function(n,r,l){var i,c=".about";angular.element(r).scroll(function(){t.scrolling=!0,e.cancel(i),i=e(function(){t.scrolling=!1},250),t.$apply()}),t.scrollingNearTop=!0,new Waypoint({element:$(c)[0],handler:function(){t.scrollingNearTop=!t.scrollingNearTop,t.$apply()}}),t.$on("$stateChangeSuccess",function(e,n,r){t.currentState=n,n.data&&n.data.sectionSelector&&0!=r.scroll&&o(n.data.sectionSelector)})}}}n.$inject=["$timeout","$rootScope","$state"],Object.defineProperty(t,"__esModule",{value:!0}),t.RootScrollDirective=n},function(e,t){"use strict";function o(e,t,o){"ngInject";e.section_states=o.get().filter(function(e,t,o){return e.data&&e.data.sectionSelector}),t.$watchCollection("currentState",function(){t.currentState&&(e.selected_state=t.currentState)}),e.stateNameSelected=function(){o.go(e.selected_state.name),$("select").trigger("blur")};var n=$(".menu-block"),r=$("select"),l=n.offset().top;r.on("touchstart",function(){function e(e){e.preventDefault()}function t(){console.log("Reset"),n[0].style.position="",n[0].style.top="",n[0].style.zIndex="",n[0].style.bottom="",$(document).off("touchmove",e)}var o=$(window).scrollTop(),i=o-l-1;n[0].style.position="absolute",n[0].style.top="auto",n[0].style.zIndex="100",n[0].style.bottom="-"+i+"px",r.on("focus",function(t){t.preventDefault(),$(window).scrollTop(o),$(document).on("touchmove",e)}),r.on("blur",t)})}o.$inject=["$scope","$rootScope","$state"],Object.defineProperty(t,"__esModule",{value:!0}),t.MenuController=o},function(e,t,o){"use strict";function n(e){"ngInject";e.contactFormModel={},e.submitContactForm=function(t){t.preventDefault();var o=(e.form1,e.form1.$valid);return o?($("#contactForm").submit(),alert("Thanks for reaching out. Jordan will follow up with you shortly."),e.contactFormModel=null,void(0,r.sendGAPageView)("user-submitted-contact-form")):(alert("Please complete the name, title, and email fields correctly."),!1)}}n.$inject=["$scope"],Object.defineProperty(t,"__esModule",{value:!0}),t.FormController=n;var r=o(7)},function(e,t){"use strict";function o(e){console.log("sending ga pageview for",e),ga("send","pageview",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAPageView=o},function(e,t,o){"use strict";function n(e){var t=$(e),o=$(window),n=t.offset().top+t.height()/2,r=o.scrollTop(),l=r+o.height();return n>r&&l>n}function r(e,t){"ngInject";return{restrict:"A",scope:!0,link:function(o,r,i){o.configureWayPoint=function(){console.log(i.scrollSref),o.stateName=i.scrollSref,o.state_reference=t.get(o.stateName),o.sectionEl=r,o.stateName&&(o.downOffset=function(){return angular.element(window).height()-o.sectionEl.height()/2},o.upOffset=function(){return-o.sectionEl.height()/2},o.scrollHandler=function(r){e.cancel(o.tm),o.tm=e(function(){n(o.sectionEl)&&(t.go(o.stateName,{scroll:!1}),console.log(("up"==r?"Up":"Down")+" Scroll State Change for "+o.stateName),(0,l.sendGAPageView)(o.stateName))},500)},o.downWaypoint=new Waypoint({element:o.sectionEl[0],offset:o.downOffset,handler:function(e){"down"==e&&o.scrollHandler(e)}}),o.upWaypoint=new Waypoint({element:o.sectionEl[0],offset:o.upOffset,handler:function(e){"up"==e&&o.scrollHandler(e)}}))},e(function(){console.log("Setting Up the Waypoint"),o.configureWayPoint()})}}}r.$inject=["$timeout","$state"],Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollSrefDirective=r;var l=o(7)},function(e,t){"use strict";function o(e){"ngInject";e.stats=[{title:"73% of students report sleep problems.",details:"When wellness suffers, productivity is bound to suffer as a result. By keeping wellness indicators at the forefront, Pi aims to ensure student success."},{title:"Achieving balance is tough for students.",details:"The problem doesn't stop when class is dismissed. As 70% of college students work, $27b was lost in 2015 to mental health related work absences. Additionally, 3/6 of the top reasons melinials are unhappy at work have to do with work life balance."},{title:"72% of Gen Z wants to start their own businesses.",details:"Gen Z has big dreams, but we believe burn out will keep them from reaching their full potential. Pi creates solutions at the nexus of wellness, productivity, and students' personal mission. We call this holistic productivity."}],e.selectStat=function(t){e.currentStatIndex=t,e.currentStat=e.stats[e.currentStatIndex],console.log(e.currentStat)},e.selectStat(0)}o.$inject=["$scope"],Object.defineProperty(t,"__esModule",{value:!0}),t.PhilosophyCtrl=o},function(e,t){"use strict";function o(){return{restrict:"A",link:function(e,t,o){function n(){t.height(t.width())}$(document).on("ready",n),$(window).on("resize",n)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.SquareDirective=o}]);
//# sourceMappingURL=../maps/scripts/app-81b60074e4.js.map
