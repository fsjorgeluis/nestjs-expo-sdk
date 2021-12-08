import Expo, { ExpoClientOptions } from 'expo-server-sdk';
import { IExpoSdkClient, IExpoClientAsyncOptions } from '../interfaces';

export function createClient(options?: ExpoClientOptions): IExpoSdkClient {
  return new Expo(options);
}

export function createAsyncClient(
  options: IExpoClientAsyncOptions,
): IExpoSdkClient {
  return new Expo({ ...options.useFactory });
}
