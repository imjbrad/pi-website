/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { RootScrollDirective } from './components/root_scroll_directive';
import { MenuController } from './components/menu.controller';
import { ScrollSrefDirective } from './components/scroll_sref.directive';
import { PhilosophyCtrl } from './components/philosophy.controller';

angular.module('websiteV2', ['ui.router'])
  .config(config)
  .config(routerConfig)

  .directive("rootScroll", RootScrollDirective)
  .directive("scrollSref", ScrollSrefDirective)
  .controller("MenuController", MenuController)
  .controller("PhilosophyCtrl", PhilosophyCtrl);
