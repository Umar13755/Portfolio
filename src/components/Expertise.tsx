import Image from "next/image";

export default function Expertise() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white/80 text-center text-lg mb-12">
          Technologies I Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <Image
            src="/public/icons/react.svg"
            alt="React Js"
            width={120}
            height={40}
            className="h-8 w-auto object-contain brightness-0 invert"
          />
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Luminous"
            width={120}
            height={40}
            className="h-8 w-auto object-contain brightness-0 invert"
          />
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Savannah"
            width={120}
            height={40}
            className="h-8 w-auto object-contain brightness-0 invert"
          />
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Amsterdam"
            width={120}
            height={40}
            className="h-8 w-auto object-contain brightness-0 invert"
          />
        </div>
      </div>
    </section>
  );
}
