import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { supabase } from "../lib/supabase";
import { Mail, LogIn } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "argeplatformu://", skipBrowserRedirect: false },
    });
  };

  const goEmail = () => router.push("/login-email");

  return (
    <LinearGradient colors={["#E0F2FE", "#FFFFFF"]} className="flex-1">
      <View className="flex-1 items-center justify-center px-6">
        <View className="items-center mb-10">
          <View className="w-16 h-16 rounded-2xl bg-blue-500/10 items-center justify-center mb-4">
            <LogIn color="#3B82F6" size={32} />
          </View>
          <Text style={{ fontFamily: "Inter_600SemiBold" }} className="text-3xl text-slate-900">
            ArGePlatformu
          </Text>
        </View>

        <View className="w-full">
          <TouchableOpacity
            className="bg-blue-500 rounded-xl py-4 items-center shadow mb-3"
            onPress={signInWithGoogle}
          >
            <Text style={{ fontFamily: "Inter_600SemiBold" }} className="text-white">
              Google ile Giriş Yap
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-white rounded-xl py-4 items-center shadow border border-gray-100"
            onPress={goEmail}
          >
            <Text style={{ fontFamily: "Inter_600SemiBold" }} className="text-slate-900">
              E-posta ile Giriş Yap
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
