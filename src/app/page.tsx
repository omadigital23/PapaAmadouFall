import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignalStrip from "@/components/SignalStrip";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TargetRoles from "@/components/TargetRoles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="overflow-hidden">
        <Hero />
        <SignalStrip />
        <Profile />
        <Projects />
        <Experience />
        <TargetRoles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
