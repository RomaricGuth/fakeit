import PriceBox from "./priceBox";

export default function Pricing() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <PriceBox
        title="Free"
        price="$0"
        description="Test features and prepare before deployment"
        cta="Sign up"
        checks={[
          "Landing page editor",
          "Analytics preview with fake data",
          "Community playground with fake data",
        ]}
      />
      <PriceBox
        title="Basic"
        price="$20 / month"
        description="Validate your first business idea"
        cta="Sign up"
        checks={[
          "Landing page editor",
          "Analytics",
          "Community",
          "Custom domain",
          "1 deployment",
        ]}
      />
      <PriceBox
        title="Pro"
        price="$50 / month"
        description="Validate multiple business ideas and pick the best one"
        cta="Sign up"
        checks={[
          "Landing page editor",
          "Analytics",
          "Community",
          "Custom domain",
          "5 deployments",
        ]}
      />
    </div>
  )
}