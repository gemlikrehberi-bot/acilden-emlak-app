import { useState } from "react";
import type { FC } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { supabase } from "../../lib/supabase";
import { uploadFileToBucket } from "../../lib/storage";
import { router } from "expo-router";

const budgetOptions = ["düşük", "orta", "yüksek"] as const;
const priorityOptions = ["düşük", "orta", "yüksek"] as const;

export default function ProblemFormScreen() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [budgetIdx, setBudgetIdx] = useState(1);
  const [priorityIdx, setPriorityIdx] = useState(1);
  const [filePath, setFilePath] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true });
    if (result.canceled) return;
    const file = result.assets[0];
    try {
      const ext = (file.name?.split(".").pop() ?? "dat").toLowerCase();
      const path = `uploads/${Date.now()}.${ext}`;
      const uploadedPath = await uploadFileToBucket("problem-files", path, file.uri, file.mimeType);
      setFilePath(uploadedPath);
      Alert.alert("Dosya yüklendi", uploadedPath);
    } catch (e: any) {
      Alert.alert("Yükleme hatası", e.message);
    }
  };

  const submit = async () => {
    try {
      if (!title || !desc) {
        Alert.alert("Zorunlu", "Başlık ve açıklama gereklidir.");
        return;
      }
      setSubmitting(true);
      const { data: { user } } = await supabase.auth.getUser();
      const { error } = await supabase.from("problems").insert({
        user_id: user?.id ?? null,
        title,
        description: desc,
        budget: budgetOptions[budgetIdx],
        priority: priorityOptions[priorityIdx],
        status: "new",
        file_url: filePath,
      });
      if (error) throw error;
      router.push("/ai/solutions");
    } catch (e: any) {
      Alert.alert("Hata", e.message);
    } finally {
      setSubmitting(false);
    }
  };

  const Chip: FC<{ label: string; active: boolean; onPress: () => void }> = ({ label, active, onPress }) => (
    <TouchableOpacity onPress={onPress} className={`px-3 py-2 rounded-full border ${active ? "bg-blue-500 border-blue-500" : "bg-white border-gray-200"}`}>
      <Text className={active ? "text-white" : "text-slate-700"}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white px-5 pt-10">
      <Text style={{ fontFamily: "Inter_600SemiBold" }} className="text-2xl text-slate-900 mb-6">Problem Bildir</Text>

      <Text className="text-slate-700 mb-2">Başlık</Text>
      <TextInput className="border border-gray-200 rounded-xl p-4 mb-4" value={title} onChangeText={setTitle} placeholder="Kısa başlık" />

      <Text className="text-slate-700 mb-2">Açıklama</Text>
      <TextInput className="border border-gray-200 rounded-xl p-4 mb-4" value={desc} onChangeText={setDesc} placeholder="Detaylı açıklama" multiline numberOfLines={5} textAlignVertical="top" />

      <Text className="text-slate-700 mb-2">Bütçe</Text>
      <View className="flex-row gap-2 mb-4">
        {budgetOptions.map((b, i) => (
          <Chip key={b} label={b} active={i === budgetIdx} onPress={() => setBudgetIdx(i)} />
        ))}
      </View>

      <Text className="text-slate-700 mb-2">Öncelik</Text>
      <View className="flex-row gap-2 mb-4">
        {priorityOptions.map((p, i) => (
          <Chip key={p} label={p} active={i === priorityIdx} onPress={() => setPriorityIdx(i)} />
        ))}
      </View>

      <TouchableOpacity onPress={pickFile} className="bg-white rounded-xl py-3 items-center border border-gray-200 mb-6">
        <Text className="text-blue-500">{filePath ? "Dosyayı Değiştir" : "Dosya Yükle"}</Text>
      </TouchableOpacity>

      <TouchableOpacity disabled={submitting} onPress={submit} className="bg-blue-500 rounded-xl py-4 items-center shadow">
        <Text style={{ fontFamily: "Inter_600SemiBold" }} className="text-white">{submitting ? "Gönderiliyor..." : "AI’den Çözüm Al"}</Text>
      </TouchableOpacity>
    </View>
  );
}
