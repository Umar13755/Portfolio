import Image from "next/image";

export default function Expertise() {

  const icons = [
    {id: "1", alt: "react", src: "/react.svg"}
  ]
  return (
    <section className="">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white/80 text-center text-lg mb-12">
          Technologies I Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          <Image
            src="/react.svg"
            alt="react"
            width={150}
            height={50}
            className="text-white bg-white rounded-3xl p-2 "
          />
        </div>
      </div>
    </section>
  );
}
