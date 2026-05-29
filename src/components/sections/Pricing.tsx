import SectionHeading from "../ui/SectionHeading";
import PricingCard from "../cards/PricingCard";
import { pricingPlans } from "@/data/pricing";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          title="Premium Pricing Plans"
          subtitle="Choose the ideal digital experience package for your brand."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;