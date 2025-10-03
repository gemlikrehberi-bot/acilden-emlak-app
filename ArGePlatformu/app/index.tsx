import { Redirect } from "expo-router";
import { useAuthStore } from "../lib/authStore";

export default function Index() {
  const session = useAuthStore((s: any) => s.session);
  if (!session) return <Redirect href="/login" />;
  return <Redirect href="/(tabs)" />;
}
