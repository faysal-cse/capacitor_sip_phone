export interface SipPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
