export type PlanType = "Gold" | "Diamond" | "Emerald";

export type SubscriptionTier = {
  tier: PlanType;
  description: string;
  price: string;
  benefits: string[];
};

let subscriptionTiers: SubscriptionTier[] = [
  {
    tier: "Gold",
    description:
      "Embark on your travel adventures with the Gold Plan, designed for the smart traveler who values both quality and economy.",
    price: "$249",
    benefits: [
      "Priority Customer Support",
      "Complimentary access to biannual Jetset product releases",
      "Exclusive Discounts on Partner Services",
      "One-year extended warranty on all Jetset travel bags",
      "Free subscription to the Member-Only newsletter",
    ],
  },
  {
    tier: "Diamond",
    description:
      "Experience advanced benefits, including early access to new products and special promotions.",
    price: "$319",
    benefits: [
      "Unlimited access to Seasonal Jetset Collections",
      "Around-the-clock customer support assistance for travel arrangements",
      "Complimentary personalization of Jetset travel bags",
      "Priority invitations to Jetset product events",
      "Bonus Loyalty Points: Earn 3x points for all purchases",
    ],
  },
  {
    tier: "Emerald",
    description:
      "Enjoy exclusive collections of the finest travel bags, access to limited edition products, and personalized customer service.",
    price: "$499",
    benefits: [
      "First-class access to all Jetset releases",
      "Dedicated and personalized travel concierge",
      "Lifetime Jetset bag warranty",
      "Private showings and consultations of new Jetset products ",
      "Exclusive Jetset Emerald retreat invitations",
    ],
  },
];

export default subscriptionTiers;
