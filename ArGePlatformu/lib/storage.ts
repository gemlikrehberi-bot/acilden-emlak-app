import { supabase } from "./supabase";

export async function uploadFileToBucket(
  bucket: string,
  path: string,
  uri: string,
  contentType?: string
) {
  const res = await fetch(uri);
  const blob = await res.blob();
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, blob, { contentType, upsert: true });
  if (error) throw error;
  return data?.path ?? path;
}
