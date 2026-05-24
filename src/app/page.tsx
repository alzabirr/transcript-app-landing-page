import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import About from "@/components/About/About";
import UseCases from "@/components/UseCases";
import FeaturesGrid from "@/components/FeaturesGrid";


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container className="py-8 lg:py-16">
        <Benefits />

        <Section
          id="features"
          title="Everything You Need"
          description="Powerful tools to make transcription seamless and secure."
        >
          <FeaturesGrid />
        </Section>

        <Section
          id="use-cases"
          title="Who is it for?"
          description="Designed for professionals who need accurate transcripts."
        >
          <UseCases />
        </Section>

        <About />

        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
