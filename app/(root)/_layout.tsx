import { Stack } from "expo-router";


export default function RootLayout() {
  return (
		<Stack>
			<Stack.Screen name='signIn' options={{ headerShown: false }} />
		</Stack>
	)
} 