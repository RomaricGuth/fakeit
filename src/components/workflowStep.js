import Image from "next/image";

export default function WorklowStep({img, alt, title, description, header}) {
  return (
    <div className="flex flex-col items-center max-w-sm">
      <div className="flex items-center justify-center h-[300px]">
        {header || <Image src={img} alt={alt} />}
      </div>
      <h3 className="mt-image">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  )
}