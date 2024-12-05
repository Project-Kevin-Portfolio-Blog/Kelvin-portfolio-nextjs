import SideBar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100    dark:bg-[#081825]">
      <SideBar />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}

