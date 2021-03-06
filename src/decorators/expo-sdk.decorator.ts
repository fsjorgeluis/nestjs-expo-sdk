import { Inject } from '@nestjs/common';
import { EXPO_NOTIFICATIONS_OPTIONS } from 'src';
import { IExpoSdkDecorator } from 'src/interfaces';

export function InjectExpo(): IExpoSdkDecorator {
  return Inject(EXPO_NOTIFICATIONS_OPTIONS);
}
