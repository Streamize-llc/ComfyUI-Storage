import { app } from '../../scripts/app.js';
import { setupUI } from './ui/setup-ui.js';

app.registerExtension({
  name: 'Comfy.Storage',

  init() {},

  async setup() {
    setupUI();
  },
});
