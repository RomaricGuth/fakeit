"use client";

import { motion } from 'framer-motion';
import WorklowStep from './workflowStep';
import AnimatedCircularProgressBar from './ui/animated-circular-progress-bar';
import editor from "/public/assets/editor.png";
import email_dialog from "/public/assets/email_dialog.png";
import { useState } from 'react';

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Delays between child animations
        },
    },
  };

  const [visitors, setVisitors] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);

  return (

        <motion.div
          className="flex flex-col flex-wrap lg:flex-row justify-center gap-16"
          initial="hidden"
          whileInView="visible"
          delayChildren={1}
          viewport={{ once: true }}
          variants={containerVariants}
          onAnimationStart={() => {
            setVisitors(180);
            setConversionRate(20);
          }}
        >
          <WorklowStep
            img={editor}
            alt="No code landing page editor"
            title="1. Build your fake landing page"
            description="Showcase your product, we setup everything else."
          />
          <WorklowStep
            header={(
              <div className="flex flex-col xs:flex-row items-center gap-image">
                <AnimatedCircularProgressBar value={visitors} max={1000} gaugePrimaryColor={'orange'} number={visitors} description="daily visitors" />
                <AnimatedCircularProgressBar value={conversionRate} max={35} gaugePrimaryColor={'green'} number={`${conversionRate}%`} description="conversion rate" />
              </div>
            )}
            title="2. Analyze your product potential"
            description="See if people connect to your site and try to buy."
          />
          <WorklowStep
            img={email_dialog}
            alt="form with email address input"
            title="3. Start building your community"
            description="Invite your early customers to leave their email and get to know them."
          />
        </motion.div>
  )
}