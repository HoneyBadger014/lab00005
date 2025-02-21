import { Image, Text, View } from "react-native";

export default function Index() {
	return (
		<View className="flex h-[100vh] w-[100-vw] justify-center items-center align-middle dark:bg-background-dark bg-background color-text dark:color-text-dark">
			<Image
				style={{ width: 256, height: 320 }}
				source={require('../assets/images/face.png')}
				alt="a."></Image>
			<Text className="color-text dark:color-text-dark font-bold">name. last name.</Text>
			<Text className="color-text dark:color-text-dark mb-18">CS-304</Text>
			<View className="mt-24 mb-2">
				<View className="flex flex-row items-center">
					<Image
						style={{ height: 32, width: 32 }}
						source={require('../assets/images/phone.png')}
					></Image>
					<Text className="ml-2 color-text dark:color-text-dark">+00000000000</Text>
				</View>
				<View className="flex flex-row items-center">
					<Image
						style={{ height: 32, width: 32 }}
						source={require('../assets/images/gmail.png')}
					></Image>
					<Text className="ml-2 color-text dark:color-text-dark">kibermuzhick@gmail.com</Text>
				</View>
				<View className="flex flex-row items-center">
					<Image
						style={{ height: 32, width: 32 }}
						source={require('../assets/images/geopin.png')}
					></Image>
					<Text className="ml-2 color-text dark:color-text-dark">Rapidly approaching</Text>
				</View>
			</View>
		</View>
	);
}
