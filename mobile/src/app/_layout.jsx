import { Slot } from "expo-router"
import SafeScreen from "../components/SafeScreen"
import { ClerkProvider } from "@clerk/expo"
import { tokenCache } from "@clerk/expo/token-cache"
import { KeyboardProvider } from "react-native-keyboard-controller"

export default function RootLayout() {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <KeyboardProvider>
        <SafeScreen>
          <Slot />
        </SafeScreen>
      </KeyboardProvider>
    </ClerkProvider>
  )
}
