import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MessageSquare, Search, Crown } from "lucide-react-native";
import { router } from "expo-router";
import type { ReactNode } from "react";

function GradientButton({ children, onPress }: { children: ReactNode; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} className="rounded-2xl overflow-hidden shadow">
      <LinearGradient
        colors={["#3B82F6", "#60A5FA"]}
        className="px-5 py-4 rounded-2xl"
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white px-5 pt-10">
      <Text style={{ fontFamily: "Inter_600SemiBold" }} className="text-2xl text-slate-900">
        Ar-Ge’yi canlandıran topluluğa hoş geldiniz.
      </Text>
      <Text className="text-slate-600 mt-2">
        Firmalar, uzmanlar ve yenilikçiler bir arada. Problemini paylaş, çözümünü AI ile bul.
      </Text>

      <View className="mt-8">
        <GradientButton onPress={() => router.push("/problem/form")}> 
          <View className="flex-row items-center">
            <MessageSquare color="#fff" size={22} />
            <Text style={{ fontFamily: "Inter_600SemiBold" }} className="text-white text-base ml-3">
              Problem Bildir
            </Text>
          </View>
        </GradientButton>

        <View className="h-3" />
        <GradientButton onPress={() => router.push("/ai/solutions")}>
          <View className="flex-row items-center">
            <Search color="#fff" size={22} />
            <Text style={{ fontFamily: "Inter_600SemiBold" }} className="text-white text-base ml-3">
              Çözüm Ara
            </Text>
          </View>
        </GradientButton>

        <View className="h-3" />
        <GradientButton onPress={() => router.push("/reports")}> 
          <View className="flex-row items-center">
            <Crown color="#fff" size={22} />
            <Text style={{ fontFamily: "Inter_600SemiBold" }} className="text-white text-base ml-3">
              VIP Alanım
            </Text>
          </View>
        </GradientButton>
      </View>
    </View>
  );
}
