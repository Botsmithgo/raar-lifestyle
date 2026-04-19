import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Manifesto from "@/components/sections/Manifesto";
import ServicesHorizontal from "@/components/sections/ServicesHorizontal";
import SignatureExperiences from "@/components/sections/SignatureExperiences";
import Founder from "@/components/sections/Founder";
import Quotes from "@/components/sections/Quotes";
import Marquee from "@/components/sections/Marquee";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Welcome />
      <Manifesto />
      <ServicesHorizontal />
      <SignatureExperiences />
      <Founder />
      <Quotes />
      <Marquee />
      <Contact />
      <Footer />
    </>
  );
}
