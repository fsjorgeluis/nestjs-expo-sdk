import { Provider } from '@nestjs/common';
import { ExpoClientOptions } from 'expo-server-sdk';
import { EXPO_NOTIFICATIONS_OPTIONS } from 'src/constants';
import { createClient } from 'src/helpers';

export function createServices(options?: ExpoClientOptions): Provider {
  return {
    provide: EXPO_NOTIFICATIONS_OPTIONS,
    useValue: createClient(options),
  };
}
