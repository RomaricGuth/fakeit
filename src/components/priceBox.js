import { CheckoutButton } from "./checkoutButton";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { motion } from 'framer-motion';

export default function PriceBox({ title, price, description, checks, cta = "Sign up" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5 } },
      }}  
    >
      <Card className="w-[260px] max-w-full min-h-[420px] flex flex-col justify-between gap-paragraph" asChild>
        <div>
          <CardHeader>
            <CardTitle className="text-gray-600">{title}</CardTitle>
            <div className="mt-paragraph text-2xl font-bold text-center">{price}</div>
          </CardHeader>
          <CardContent>
            <CardDescription className="h-20 mt-paragraph">{description}</CardDescription>
            <ul className="list-image-check ms-6 space-y-2">
              {checks.map((check, i) => (
                <li key={i} className="text-foreground">{check}</li>
              ))}
            </ul>
          </CardContent>
        </div>
        <CardFooter className="flex justify-center">
          <CheckoutButton className="rounded" ctaLabel={title}>{cta}</CheckoutButton>
        </CardFooter>
      </Card>
    </motion.div>
  );
}