<p align="center">
    <img src="https://user-images.githubusercontent.com/20530235/145147022-769c8020-a92b-4e63-b964-f8fc3aebb09e.png">
</p>
<p align="center">
    <img alt="Lines of code" src="https://img.shields.io/tokei/lines/github/fsjorgeluis/nestjs-expo-sdk">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/nestjs-expo-sdk">
    <img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/fsjorgeluis/nestjs-expo-sdk/dev/typescript">
    <img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/fsjorgeluis/nestjs-expo-sdk/dev/jest">
    <img alt="GitHub" src="https://img.shields.io/github/license/fsjorgeluis/nestjs-expo-sdk">
    <a href="https://twitter.com/intent/follow?screen_name=fsjorgeluis">
        <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/fsjorgeluis?logo=twitter&logoColor=blue&style=social">
    </a>
</p>

# NestJs + Expo push notifications

A little module to make push notifications with react native in nestjs a bit easier work, hand by hand with `expo-server-sdk`.

Feel free to use it, if you like it! :D

## Ready to use

Just `npm install nestjs-expo-sdk` this package use `expo-server-sdk` under the hood, then

```
import { ExpoSdkModule } from 'nestjs-expo-sdk';

@Module()
imports: [
  // Create a new Expo SDK client
  // optionally providing an access token if you have
  enabled push security
  // second optional arg boolean to define if
  // this module is global or not. True by default
  ExpoSdkModule.forRoot(
    {
      accessToken: process.env.EXPO_ACCESS_TOKEN,
    },
    true,
  ),
],
```

now it's time to use it in your provider

```
@Injectable()
export class AppService {
  // You can inject expo now and use as any or
  // Expo if you have previously installed expo-server-sdk
  // just to get types, declarations or another functions :D
  constructor(@InjectExpo() private expo: any) {}

  async sendPush(somePushTokens): Promise<any> {
    let messages = [];
    for (let pushToken of somePushTokens) {
      // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]

      // Check that all your push tokens appear to be valid Expo push tokens
      if (!Expo.isExpoPushToken(pushToken)) {
        console.error(`Push token ${pushToken} is not a valid Expo push token`);
        continue;
      }

      // Construct a message
      messages.push({
        to: pushToken,
        sound: 'default',
        body: 'This is a test notification',
        data: { withSome: 'data' },
      });
    }

    let chunks = this.expo.chunkPushNotifications(messages);
    let tickets = [];

    for (let chunk of chunks) {
      try {
        let ticketChunk = await this.expo.sendPushNotificationsAsync(messages);
        console.log(ticketChunk);
        console.log(ticketChunk);
        tickets.push(...ticketChunk);
        // NOTE: If a ticket contains an error code in ticket.details.error, you
        // must handle it appropriately. The error codes are listed in the Expo
        // documentation
      } catch (error) {
        console.error(error);
      }
    }
  }
}
```

and you are ready to go.

_Note:_ if you need more info feel free to read [Expo Docs](https://docs.expo.dev/push-notifications/sending-notifications/)

### TODO

- Add maybe more fuctionality.
- Add test

### DONE

- Make this module an npm package just for fun, and educative purposes.
- Added more documentation.
