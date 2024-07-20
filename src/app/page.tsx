import MainContent from "@/components/main/MainContent";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="container m-16 mt-[100px] flex items-stretch justify-center gap-6">
      <aside className="sticky top-16 z-10 h-full max-h-max rounded-md bg-slate-800 px-7 pb-8 pt-16">
        <Sidebar />
      </aside>
      <MainContent />
    </main>
  );
}
