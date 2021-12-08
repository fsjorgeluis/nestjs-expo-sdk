import { Provider } from '@nestjs/common';
import { ExpoClientOptions } from 'expo-server-sdk';
import { IExpoClientAsyncOptions } from 'src';
import { EXPO_NOTIFICATIONS_OPTIONS } from 'src/constants';
import { createClient, createAsyncClient } from 'src/helpers';

export function createServices(options?: ExpoClientOptions): Provider {
  return {
    provide: EXPO_NOTIFICATIONS_OPTIONS,
    useValue: createClient(options),
  };
}

export function createAsyncServices(
  options: IExpoClientAsyncOptions,
): Provider {
  return {
    provide: EXPO_NOTIFICATIONS_OPTIONS,
    useValue: createAsyncClient(options),
  };
}
