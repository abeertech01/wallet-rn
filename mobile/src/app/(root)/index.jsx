import { View, Text } from "react-native"
import { useUser, Show } from "@clerk/expo"
import { SignOutButton } from "../../components/SignOutButton"
import { Link } from "expo-router"

const RootPage = () => {
  const { user } = useUser()

  return (
    <View>
      <Show when={"signed-in"}>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <SignOutButton />
      </Show>
      <Show when={"signed-out"}>
        <Link href={"/(auth)/sign-in"}>
          <Text>Sign in</Text>
        </Link>
        <Link href={"/(auth)/sign-up"}>
          <Text>Sign up</Text>
        </Link>
      </Show>
    </View>
  )
}

export default RootPage
