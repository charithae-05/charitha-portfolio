import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/SkillsMarquee";
import Belief from "@/components/Belief";
import FeaturedWork from "@/components/FeaturedWork";
import WhyMe from "@/components/WhyMe";
import Experience from "@/components/Experience";
import EducationCerts from "@/components/EducationCerts";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SkillsMarquee />
        <Belief />
        <FeaturedWork />
        <WhyMe />
        <Experience />
        <EducationCerts />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
