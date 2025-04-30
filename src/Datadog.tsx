import { DdSdkReactNativeConfiguration, SdkVerbosity } from "expo-datadog";
import { SessionReplay } from "@datadog/mobile-react-native-session-replay";

export const config = new DdSdkReactNativeConfiguration(
  "CLIENT_TOKEN",
  "ENV_NAME",
  "SESSION_ID",
  true, // track User interactions (e.g.: Tap on buttons. You can use 'accessibilityLabel' element property to give tap action the name, otherwise element type will be reported)
  true, // track XHR Resources
  true // track Errors
);

config.site = "US5"; // Select your Datadog website (one of "US1", "EU1", "US3", "US5", "AP1" or "GOV")e
config.version = "1.0.0";
config.verbosity = SdkVerbosity.DEBUG;
config.nativeCrashReportEnabled = true;

export async function onSDKInitialized() {
  try {
    console.log("Initializing SessionReplay");
    await SessionReplay.enable({ replaySampleRate: 100 });
    console.log("SessionReplay initialized");
  } catch (error) {
    console.log("Error initializing SessionReplay", error);
  }
}
