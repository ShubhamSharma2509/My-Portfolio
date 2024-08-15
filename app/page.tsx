
import Certificates from "@/components/Certificates";
import Clients from "@/components/Clints";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid/>
        <Certificates />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
