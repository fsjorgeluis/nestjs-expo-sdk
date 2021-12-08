import { ExpoClientOptions } from 'expo-server-sdk';

export interface IExpoClientFactory {
  createExpoClientOptions(): Promise<ExpoClientOptions> | ExpoClientOptions;
}
