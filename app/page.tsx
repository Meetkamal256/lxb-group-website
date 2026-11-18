import AboutPreview from "./components/home/About-preview";
import Hero from "./components/home/Hero";
import LeadershipPreview from "./components/home/Leadership-preview";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <LeadershipPreview />
    </main>
  );
}
