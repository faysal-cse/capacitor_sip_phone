import { WebPlugin } from '@capacitor/core';

import type { SipPluginPlugin } from './definitions';

export class SipPluginWeb extends WebPlugin implements SipPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
