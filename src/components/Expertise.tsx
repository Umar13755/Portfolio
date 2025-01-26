"use client"
import Image from "next/image"
import { motion } from "framer-motion"

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
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-white/90 mb-4"
          >
            Technologies I Work With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base"
          >
            A curated stack of modern technologies that I use to build powerful and scalable applications
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
        >
          {icons.map((icon) => (
            <motion.div key={icon.id} variants={item} className="relative group">
              <div
                className="bg-black/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 
                transform transition-all duration-300 
                hover:scale-105 hover:bg-black/90 hover:shadow-xl hover:shadow-purple-500/20
                group-hover:translate-y-[-5px]"
              >
                <Image
                  src={icon.src || "/placeholder.svg"}
                  alt={icon.alt}
                  width={120}
                  height={50}
                  className="w-full h-auto object-contain filter brightness-90 group-hover:brightness-100
                    transition-all duration-300"
                />

                {/* Improved Tooltip */}
                <div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full 
                  bg-black/90 backdrop-blur-sm text-white text-xs sm:text-sm
                  py-1.5 px-3 rounded-full opacity-0 group-hover:opacity-100 
                  transition-all duration-300 z-50 whitespace-nowrap
                  shadow-lg shadow-purple-500/20"
                >
                  {icon.alt}
                  {/* Tooltip Arrow */}
                  <div
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 
                    border-4 border-transparent border-b-black/90"
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Add a subtle gradient overlay at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
      </div>
    </section>
  )
}

