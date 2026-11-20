import DivisionCards from "../components/divisions/Division-cards";
import DivisionsHero from "../components/divisions/Divisions-hero";
import IntegratedExpertise from "../components/divisions/Integrated-expertise";
import DivisionEnquiry from "../components/shared/Division-enquiry";
import { divisionEnquiry } from "../data/data";

export default function DivisionsPage() {
  return (
    <main>
      <DivisionsHero />
      <DivisionCards />
      <IntegratedExpertise />
      <DivisionEnquiry {...divisionEnquiry} />
    </main>
  );
}
