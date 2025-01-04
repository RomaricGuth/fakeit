import Image from "next/image";

export default function WorklowStep({img, alt, title, description, header}) {
  return (
    <div className="flex flex-col items-center max-w-sm gap-paragraph">
      <div className="flex items-center justify-center lg:h-[300px] order-2 lg:order-1">
        {header || <Image src={img} alt={alt} height={300} />}
      </div>
      <div className="order-1 lg:order-2 text-center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}