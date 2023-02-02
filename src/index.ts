import { registerPlugin } from '@capacitor/core';

import type { SipPluginPlugin } from './definitions';

const SipPlugin = registerPlugin<SipPluginPlugin>('SipPlugin', {
  web: () => import('./web').then(m => new m.SipPluginWeb()),
});

export * from './definitions';
export { SipPlugin };
