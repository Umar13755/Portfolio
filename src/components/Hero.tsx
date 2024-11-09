export default function Hero() {
  return (
    <>
      <div className="absolute bottom-auto left-auto right-50 top-0 h-[400px] w-[400px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-30 blur-[80px]"></div>
      <div className="absolute bottom-auto left-auto right-10 top-0 h-[400px] w-[400px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(160,160,160,0.5)] opacity-30 blur-[80px]"></div>

      <div className="flex items-center justify-center min-h-screen gap-3">
        <div className="bg-[#0D0D0D] p-6 w-full h-72 rounded-3xl flex flex-row gap-4">
          <img
            src="/profile.svg"
            className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
          />
          <div>
            <h2 className="font-semibold">Hey, I'm Umar.</h2>
            <p className="font-medium text-sm text-[#9b9b9b]">Software Engineer</p>
          </div>
        </div>

        <div className="bg-black p-5 w-2/4">
          <h2>Hey, I'm Umar</h2>
          <p>Software Engineer</p>
        </div>
      </div>
    </>
  );
}
