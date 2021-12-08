import { DynamicModule, Module } from '@nestjs/common';
import { ExpoClientOptions } from 'expo-server-sdk';
import { ExpoSdkCoreModule } from './expo-sdk-core.module';

@Module({})
export class ExpoSdkModule {
  public static forRoot(
    options?: ExpoClientOptions,
    isGlobal?: boolean,
  ): DynamicModule {
    return {
      module: ExpoSdkModule,
      imports: [ExpoSdkCoreModule.forRoot(options, isGlobal)],
    };
  }
}
