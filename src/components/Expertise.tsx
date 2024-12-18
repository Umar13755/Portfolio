import Image from "next/image";

export default function Expertise() {
  const icons = [
    { id: "1", alt: "React JS", src: "/react.svg" },
    { id: "2", alt: "Next Js", src: "/next.svg" },
    { id: "3", alt: "Tailwind CSS", src: "/tailwind.svg" },
    { id: "4", alt: "Node.js", src: "/node.svg" },
    { id: "4", alt: "Three JS", src: "/threejs.svg" },
    { id: "5", alt: "JavaScript", src: "/javascript.svg" },
    { id: "7", alt: "TypeScript", src: "/typescript.svg" },
    { id: "8", alt: "MySQL", src: "/sql.svg" },
    { id: "9", alt: "MongoDB", src: "/mongodb.svg" },
    { id: "10", alt: "Php", src: "/php.svg" },

  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto my-5">
        <h2 className="text-white/80 text-center text-lg mb-12">
          Technologies I Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {icons.map((icon) => (
            <div key={icon.id} className="relative group">
              {/* Icon */}
              <Image
                src={icon.src}
                alt={icon.alt}
                width={110}
                height={50}
                className="text-green bg-[#000000] rounded-3xl p-5 transform transition duration-300 hover:scale-125 hover:cursor-pointer"
              />

              {/* Tooltip */}
              <div
                className="text-nowrap absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full 
                  bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 z-50"
              >
                {icon.alt}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
