import { Twitter, Github } from "lucide-react";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <>
      <div className="absolute bottom-auto left-auto right-50 top-0 h-[400px] w-[400px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(160,160,160,0.5)] opacity-30 blur-[80px]"></div>
      <div className="absolute bottom-auto left-auto right-10 top-0 h-[400px] w-[400px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(160,160,160,0.5)]  opacity-30 blur-[80px]"></div>

      <div className="grid lg:flex gird-cols-1 items-center justify-center my-10 gap-5">
        {/* Profile Card */}
        <div className="bg-black p-10 w-full rounded-[3rem]  grid grid-cols lg:sapce-y-0 space-y-3 ">
          <div className="lg:flex lg:justify-between lg:space-y-0 space-y-4">
            {/* left Section */}
            <div className="flex flex-row gap-4">
              <img
                src="/profile.svg"
                className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
              />
              <div>
                <h2 className="font-medium">Hey, I'm Khayyam.</h2>
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
            <h2 className="font-medium text-4xl">
              Passionate about crafting seamless, modern interfaces with
              innovative tech.
            </h2>
            <p className="text-sm font-normal text-pretty">
              Hey, I'm <b>Umar Khayyam</b>, welcome to my world. I love building beautiful,
              timeless websites & digital experiences with Framer. I have experience with Next Js & React JS for buidling modern web apps
            </p>
          </div>
        </div>

        {/* Picture  */}
        <div className="bg-black p-5 rounded-[3rem]">
          <img
            src="/profile.svg"
            className="h-max w-96"
          />
        </div>
      </div>
    </>
  );
}
