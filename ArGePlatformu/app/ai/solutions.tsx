import { View, Text } from "react-native";

const MOCK_SOLUTIONS = [
  "Çözüm 1: Literatürde X metodolojisi ile düşük maliyetli prototip.",
  "Çözüm 2: Tedarik zincirinde veri odaklı optimizasyon (Zustand ile POC).",
  "Çözüm 3: Üniversite iş birliğiyle TRL 4→6 geçiş planı.",
];

export default function AiSolutionsScreen() {
  return (
    <View className="flex-1 bg-white px-5 pt-10">
      <Text style={{ fontFamily: "Inter_600SemiBold" }} className="text-2xl text-slate-900 mb-4">AI Önerileri</Text>
      <View>
        {MOCK_SOLUTIONS.map((s, i) => (
          <View key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm mb-3">
            <Text className="text-slate-800">{s}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
