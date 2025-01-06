"use client"

import PriceBox from "./priceBox";
import { motion } from 'framer-motion';

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Delays between child animations
        },
    },
  };
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-2"
      initial="hidden"
      whileInView="visible"
      delayChildren={1}
      viewport={{ once: true }}
      variants={containerVariants}
    >
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
    </motion.div>
  )
}