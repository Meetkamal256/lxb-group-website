import DigitalSolutionsServices from "@/app/components/digital-solutions/Digital-solutions-services";
import DigitalSolutionsHero from "../../components/digital-solutions/Digital-solutions-hero";
import DigitalSolutionsValues from "@/app/components/digital-solutions/Digital-solutions-values";

export default function DigitalSolutionsPage() {
  return (
    <main>
      <DigitalSolutionsHero />
      <DigitalSolutionsServices />
      <DigitalSolutionsValues />
    </main>
  );
}
