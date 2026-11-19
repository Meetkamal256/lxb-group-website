import DivisionCards from "../components/divisions/Division-cards";
import DivisionEnquiry from "../components/divisions/Division-enquiry";
import DivisionsHero from "../components/divisions/Divisions-hero";
import IntegratedExpertise from "../components/divisions/Integrated-expertise";

export default function DivisionsPage() {
  return (
    <main>
      <DivisionsHero />
      <DivisionCards />
          <IntegratedExpertise />
          <DivisionEnquiry />
    </main>
  );
}
