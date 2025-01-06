import Image from "next/image";
import { motion } from 'framer-motion';

export default function WorklowStep({img, alt, title, description, header}) {
  return (
    <motion.div
      className="flex flex-col items-center max-w-sm gap-paragraph"
      variants={{
        hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5 } },
      }}  
    >
      <div className="flex items-center justify-center lg:h-[300px] order-2 lg:order-1">
        {header || <Image src={img} alt={alt} height={300} />}
      </div>
      <div className="order-1 lg:order-2 text-center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  )
}