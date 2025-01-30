import { Button } from "./ui/Button";

export default function WorkCard() {
  return (
    <div className="text-white my-10">
      <div className="p-6 bg-[#000] shadow-xl rounded-3xl grid lg:grid-cols-2 gap-6 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/react.svg"
            alt="React Logo"
            className="w-3/4 max-w-sm sm:w-full"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            What makes me <i>different</i>
          </h2>
          <p className="opacity-70 text-sm sm:text-base leading-relaxed">
            I create unique digital experiences tailored to your brand and
            goals. By merging creativity with functionality and staying ahead of
            design trends, I ensure every project not only looks stunning but
            also performs flawlessly.
          </p>
          <div className="flex justify-start sm:justify-start">
            <Button
              className="bg-black text-white hover:bg-gray-800"
              variant="outline"
            >
              Browse My Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
