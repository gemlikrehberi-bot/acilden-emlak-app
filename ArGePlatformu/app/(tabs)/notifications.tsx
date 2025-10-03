import { View, Text } from "react-native";

export default function Notifications() {
  return (
    <View className="flex-1 bg-white px-5 pt-10">
      <Text className="text-slate-900 text-2xl" style={{ fontFamily: "Inter_600SemiBold" }}>Bildirimler</Text>
      <Text className="text-slate-600 mt-2">Yakında...</Text>
    </View>
  );
}
