import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { supabase } from "../lib/supabase";
import { useRouter } from "expo-router";

export default function LoginEmail() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const sendMagicLink = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: "argeplatformu://" },
    });
    if (error) Alert.alert("Hata", error.message);
    else Alert.alert("Gönderildi", "E-postandaki bağlantı ile giriş yapabilirsin.");
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text style={{ fontFamily: "Inter_600SemiBold" }} className="text-2xl text-slate-900 mb-6">
        E-posta ile Giriş
      </Text>
      <TextInput
        className="border border-gray-200 rounded-xl p-4 mb-4"
        placeholder="ornek@firma.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity className="bg-blue-500 rounded-xl py-4 items-center" onPress={sendMagicLink}>
        <Text style={{ fontFamily: "Inter_600SemiBold" }} className="text-white">
          Bağlantı Gönder
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="mt-4 items-center" onPress={() => router.back()}>
        <Text className="text-blue-500">Geri</Text>
      </TouchableOpacity>
    </View>
  );
}
