import { DynamicModule, Global, Module } from '@nestjs/common';
import { ExpoClientOptions } from 'expo-server-sdk';
import { createServices } from './services';

@Global()
@Module({})
export class ExpoSdkCoreModule {
  public static forRoot(
    options?: ExpoClientOptions,
    isGlobal = true,
  ): DynamicModule {
    const services = createServices(options);

    return {
      global: isGlobal,
      module: ExpoSdkCoreModule,
      providers: [services],
      exports: [services],
    };
  }
}
