import { Twitter, Github } from "lucide-react";
import { Button } from "./ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="absolute bottom-auto left-auto right-50 top-0 h-[400px] w-[400px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(160,160,160,0.5)] opacity-30 blur-[80px]"></div>
      <div className="absolute bottom-auto left-auto right-10 top-0 h-[400px] w-[400px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(160,160,160,0.5)]  opacity-30 blur-[80px]"></div>

      <div className="lg:flex grid items-center justify-center my-10 gap-5 text-white">
        {/* Profile Card */}
        <div className="bg-black p-8 w-full rounded-[3rem] grid grid-cols lg:sapce-y-0 space-y-6 ">
          <div className="lg:flex lg:justify-between lg:space-y-0 space-y-4">
            {/* left Section */}
            <div className="flex flex-row gap-4">
              <img
                src="/profile.svg"
                className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
              />
              <div>
                <h2 className="font-medium">Hey, I'm Umar.</h2>
                <p className="font-medium text-sm text-[#9b9b9b]">
                  Software Engineer
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-row gap-2">
              <Twitter className="icon" />
              <Github className="icon" />
              <Button className="" variant="outline" size="small">
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-5 text-balance">
            <h2 className="font-medium lg:text-4xl text-3xl">
              Passionate about crafting seamless, modern interfaces with
              innovative tech.
            </h2>
            <p className="text-md font-normal text-pretty opacity-65">
              Hey, I'm <b><i>Khayyam</i></b>, welcome to my world. I love building
              beautiful, timeless websites & digital experiences with modern technologies.
            </p>
          </div>
        </div>

        {/* Picture  */}
        <div className="bg-black/30 rounded-[3rem] overflow-hidden w-full max-w-xs mx-auto">
          <div className="relative aspect-square">
            <Image
              src="/dp.png"
              alt="Profile picture"
              fill
              sizes="(max-width: 24rem) 100vw, 24rem"
              className="object-cover transition-transform duration-500 ease-in-out hover:scale-110 opacity-75"
            />
          </div>
        </div>
      </div>
    </>
  );
}

