import DigitalSolutionsServices from "@/app/components/digital-solutions/Digital-solutions-services";
import DigitalSolutionsHero from "../../components/digital-solutions/Digital-solutions-hero";
import DigitalSolutionsValues from "@/app/components/digital-solutions/Digital-solutions-values";
import DigitalSolutionsApproach from "@/app/components/digital-solutions/Digital-solutions-approach";
import DigitalSolutionsLeadership from "@/app/components/digital-solutions/Digital-solutions-leadership";
import { digitalSolutionsEnquiry } from "@/app/data/data";
import DivisionEnquiry from "@/app/components/shared/Division-enquiry";

export default function DigitalSolutionsPage() {
  return (
    <main>
      <DigitalSolutionsHero />
      <DigitalSolutionsServices />
      <DigitalSolutionsValues />
      <DigitalSolutionsApproach />
      <DigitalSolutionsLeadership />
      <DivisionEnquiry {...digitalSolutionsEnquiry} />
    </main>
  );
}
