import MainContent from "@/components/main/MainContent";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/sidebar/Topbar";

export default function Home() {
  return (
    <main className="container flex flex-col items-stretch justify-center gap-6 xl:mx-auto xl:flex-row">
      <Topbar />
      <Sidebar />
      <MainContent />
    </main>
  );
}
