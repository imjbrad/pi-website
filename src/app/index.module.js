/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

angular.module('websiteV2', ['ui.router'])
  .config(config)
  .config(routerConfig)
  .run(runBlock);
