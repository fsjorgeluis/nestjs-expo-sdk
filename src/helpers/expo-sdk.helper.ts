import Expo, { ExpoClientOptions } from 'expo-server-sdk';
import { IExpoSdkClient } from 'src/interfaces';

export function createClient(options?: ExpoClientOptions): IExpoSdkClient {
  return new Expo(options);
}
