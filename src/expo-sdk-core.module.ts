import { DynamicModule, Global, Module } from '@nestjs/common';
import { ExpoClientOptions } from 'expo-server-sdk';
import { IExpoClientAsyncOptions } from 'src';
import { createServices, createAsyncServices } from './services';

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

  public static forRootAsync(
    options: IExpoClientAsyncOptions,
    isGlobal = true,
  ): DynamicModule {
    const services = createAsyncServices(options);

    return {
      global: isGlobal,
      module: ExpoSdkCoreModule,
      providers: [services],
      exports: [services],
    };
  }

  private static async callTheFunction(options: any) {
    const result = await options.useFactory(options.inject[0]);
    return result;
  }
}
