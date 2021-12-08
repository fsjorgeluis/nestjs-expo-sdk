import { ModuleMetadata, Type } from '@nestjs/common';
import Expo, { ExpoClientOptions } from 'expo-server-sdk';
import { IExpoClientFactory } from './';

// eslint-disable-next-line
export interface IExpoSdkClient extends Expo {}

export interface IExpoClientAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<IExpoClientFactory>;
  useExisting?: Type<IExpoClientFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<ExpoClientOptions> | ExpoClientOptions;
}
