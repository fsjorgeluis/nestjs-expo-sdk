import { Inject } from '@nestjs/common';
import { EXPO_NOTIFICATIONS_OPTIONS } from '../constants';
import { IExpoSdkDecorator } from '../interfaces';

export function InjectExpo(): IExpoSdkDecorator {
  return Inject(EXPO_NOTIFICATIONS_OPTIONS);
}
