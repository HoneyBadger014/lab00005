import { Stack } from "expo-router";

import '../global.css';
import Header from "@/components/Header";

export default function RootLayout() {
	return <Stack
		screenOptions={{
			header: (props) => <Header {...props} />
		}}
	/>;
}
