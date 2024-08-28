import { app } from '../../scripts/app.js';
import { setupSidebar } from './setup-sidebar.js';

app.registerExtension({
  name: 'Comfy.Storage',

  init() {},

  async setup() {
    setupSidebar();
  },
});
