import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { colorScheme } from "nativewind";
import { useState } from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";

export default function Header({ options }: NativeStackHeaderProps | BottomTabHeaderProps) {
	const [currentColourscheme, setCurrentColourscheme] = useState(colorScheme.get());

	const onThemeButtonPress = () => {
		const newTheme = colorScheme.get() === 'dark' ? 'light' : 'dark';
		colorScheme.set(newTheme);
		setCurrentColourscheme(newTheme);
	}

	return (
		<View className="flex flex-row h-16 content-center items-center bg-primary/80 dark:bg-primary-dark/80 justify-between">
			<TouchableOpacity
				className="p-1 m-2 size-12 rounded-md bg-background/80 dark:bg-background-dark/40 self-end justify-center content-center mr-2 ml-auto border-solid border-[1px] border-accent dark:border-primary-dark"
				onPress={() => onThemeButtonPress()}
			>
				{
					currentColourscheme === 'dark'
						? <Image
							source={require('../assets/images/moon.png')}
							resizeMode="contain"
							resizeMethod="scale"
							style={{ height: 32, width: 32 }}
						></Image>
						: <Image
							source={require('../assets/images/sun.png')}
							resizeMode="contain"
							resizeMethod="scale"
							style={{ height: 32, width: 32 }}
						></Image>
				}
			</TouchableOpacity>
		</View>
	);
}
