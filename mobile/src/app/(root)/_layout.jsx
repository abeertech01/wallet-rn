import { useUser } from "@clerk/expo"
import { Redirect, Stack } from "expo-router"

const RootLayout = () => {
  const { isSignedIn } = useUser()

  if (!isSignedIn) return <Redirect href={"/sign-in"} />

  return <Stack screenOptions={{ headerShown: false }} />
}

export default RootLayout
