import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/masuk");

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-4">
        <div className="max-w-4xl mx-auto h-14 flex items-center justify-between">
          <Link href="/dasbor" className="font-bold text-laju-900 text-lg">
            LAJU
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <Link href="/mimpi" className="hover:text-laju-500">Mimpi</Link>
            <Link href="/blueprint" className="hover:text-laju-500">Blueprint</Link>
            <Link href="/check-in" className="hover:text-laju-500">Check-in</Link>
            <Link href="/profil" className="hover:text-laju-500">Profil</Link>
          </div>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
