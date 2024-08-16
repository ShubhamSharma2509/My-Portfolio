
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";
import Thoughts from "@/components/Thoughts";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid/>
        <Certificates />
        <RecentProjects />
        <Thoughts />
        <Footer />
      </div>
    </main>
  );
}
