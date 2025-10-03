import { Tabs } from "expo-router";
import { Brain, BarChart2, Bell } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3B82F6",
        tabBarStyle: { borderTopColor: "#eee" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "ArGe Asistanı",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => <Brain color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Raporlarım",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => <BarChart2 color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Bildirimler",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => <Bell color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
