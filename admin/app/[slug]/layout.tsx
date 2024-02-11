import Sidebar from "@/components/Shared/Sidebar";

export default function PagesLayout({
  params,
  children, // will be a page or nested layout
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Sidebar activeTab={params.slug} />

      {children}
    </main>
  );
}
