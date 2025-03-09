import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-gray-100"
    >
      <Text>Welcome!</Text>
      <Text className="text-lg font-semibold">This is the main page.</Text>
      <Text className="text-sm text-gray-600">Feel free to explore the app.</Text>
      <Text className="text-sm text-gray-600">Contact us for more information.</Text>
      <Text className="text-sm text-gray-600">We're here to help!</Text>
    </View>
  );
}
