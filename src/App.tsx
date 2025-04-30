import "react-native-gesture-handler";
import { DatadogProvider } from "expo-datadog";
import { DdRumReactNavigationTracking } from "@datadog/mobile-react-navigation";

import { onSDKInitialized, config } from "./Datadog";

import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

import "./Datadog";
import { RootStack } from "./RootStack";

export function App() {
  const navigationRef = useNavigationContainerRef();

  return (
    <DatadogProvider configuration={config} onInitialization={onSDKInitialized}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          DdRumReactNavigationTracking.startTrackingViews(
            navigationRef.current
          );
        }}
      >
        <RootStack />
      </NavigationContainer>
    </DatadogProvider>
  );
}
