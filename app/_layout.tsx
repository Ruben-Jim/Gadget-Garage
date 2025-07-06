
import React from "react";
import { SplashScreen, Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

const RootLayout: React.FC = (): React.ReactElement => {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: true,
          title: "Home"
        }} 
      />
    </Stack>
  );
};

export default RootLayout;
