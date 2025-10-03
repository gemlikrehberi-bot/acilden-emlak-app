# ArGePlatformu (Expo + Supabase)

Bu uygulama; firmalar, uzmanlar ve yenilikçileri bir araya getirir. Kullanıcılar giriş yapar, sektörünü seçer, Ar-Ge problemlerini bildirir, AI önerileri görür ve VIP projelerini yönetir.

## Teknolojiler
- Expo (React Native, Expo Router)
- Supabase (Auth, DB, Storage)
- NativeWind (Tailwind RN)
- Zustand (state)
- Lucide (ikonlar)
- TypeScript
- Inter fontu

## Kurulum
```bash
cd ArGePlatformu
npm install
```

Env değişkenleri (örnek):
```bash
cp .env.example .env
# .env içine kendi değerlerinizi ekleyin
EXPO_PUBLIC_SUPABASE_URL=...
EXPO_PUBLIC_SUPABASE_ANON_KEY=...
```

Geliştirme:
```bash
npm run dev
# veya
npx expo start
```

## Supabase
- Tablolar: `supabase/schema.sql`
- Storage: `problem-files` adında bir bucket oluşturun
- Google OAuth yönlendirme: `argeplatformu://`

## Navigasyon
- Giriş yoksa: `/login`
- Giriş varsa: `/(tabs)`

## Ekranlar
- LoginScreen: Google veya e-posta ile giriş
- HomeScreen: karşılama metni + 3 ana buton
- ProblemFormScreen: başlık, açıklama, bütçe/öncelik, dosya yükleme
- AiSolutionsScreen: mock AI önerileri
- Tabs: ArGe Asistanı, Raporlarım, Bildirimler

## Tema
- Beyaz/mavi, gradyanlar (#E0F2FE → #FFFFFF, butonlarda #3B82F6 → #60A5FA)
- `rounded-xl`, yumuşak gölgeler, `p-4` aralıklar

## Notlar
- Inter fontu: `@expo-google-fonts/inter`
- Auth state: Zustand ile `lib/authStore.ts`
- Supabase istemcisi: `lib/supabase.ts`
- Dosya yükleme: `lib/storage.ts` + `expo-document-picker`
- OpenRouter entegrasyonu için `app/ai/solutions.tsx` içindeki mock listeyi değiştirin
