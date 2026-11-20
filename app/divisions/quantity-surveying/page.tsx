import QuantitySurveyingApproach from "@/app/components/quantity-surveying/Quantity-surveying-approach";
import QuantitySurveyingExpertise from "@/app/components/quantity-surveying/Quantity-surveying-expertise";
import QuantitySurveyingHero from "@/app/components/quantity-surveying/Quantity-surveying-hero";
import QuantitySurveyingLeadership from "@/app/components/quantity-surveying/Quantity-surveying-leadership";
import QuantitySurveyingServices from "@/app/components/quantity-surveying/Quantity-surveying-services";
import DivisionEnquiry from "@/app/components/shared/Division-enquiry";
import { quantitySurveyingEnquiry } from "@/app/data/data";

export default function QuantitySurveyingPage() {
  return (
    <main>
      <QuantitySurveyingHero />
      <QuantitySurveyingServices />
      <QuantitySurveyingExpertise />
      <QuantitySurveyingApproach />
      <QuantitySurveyingLeadership />
      <DivisionEnquiry {...quantitySurveyingEnquiry} />
    </main>
  );
}
