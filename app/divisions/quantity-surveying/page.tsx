import QuantitySurveyingExpertise from "@/app/components/quantity-surveying/Quantity-surveying-expertise";
import QuantitySurveyingHero from "@/app/components/quantity-surveying/Quantity-surveying-hero";
import QuantitySurveyingServices from "@/app/components/quantity-surveying/Quantity-surveying-services";

export default function QuantitySurveyingPage() {
  return (
    <main>
          <QuantitySurveyingHero />
          <QuantitySurveyingServices />
          <QuantitySurveyingExpertise />
    </main>
  );
}
