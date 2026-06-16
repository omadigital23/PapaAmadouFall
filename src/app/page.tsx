import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignalStrip from "@/components/SignalStrip";
import Profile from "@/components/Profile";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";
import Evidence from "@/components/Evidence";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
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
        <Languages />
        <Projects />
        <Evidence />
        <Experience />
        <Education />
        <Certifications />
        <TargetRoles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
