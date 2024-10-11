import { Stack } from "expo-router";


export default function RootLayout() {
  console.log('RootLayout')
  return (
		<Stack>
			<Stack.Screen name='signIn' options={{ headerShown: false }} />
		</Stack>
	)
} 