import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* background img */}
      <Image
        src="/src/img/sunsetBG (1).png"
        alt="Sunset Background"
        fill
        quality={100}
        priority
        className="z-0"
        style={{ objectFit: 'cover' }}
      />
      {/* overlay box */}
      <div
        className="absolute z-10 top-1/2 -translate-y-1/2 w-[90vw] max-w-[400px] md:max-w-2xl p-6 md:p-10 rounded-lg left-1/2 right-auto -translate-x-1/2 md:w-auto md:left-auto md:right-[10%] md:translate-x-0"
        style={{
          background: "rgba(255, 183, 94, 0.65)", // light orange with transparency
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        }}
      >
        <h1 className="w-full text-3xl md:text-5xl font-bold leading-tight mb-4 text-white text-center" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
          <span className="block">Your Future.</span>
          <span className="block text-blue-400">Your Peace of Mind.</span>
          <span className="block">Every Morning.</span>
        </h1>
        <p className="text-lg text-white font-normal">
          At Morning Peace Financial Services, we believe that financial confidence begins with the right guidance and ends with restful nights - and peaceful mornings. Our mission is simple: to provide trusted life insurance and retirement solutions tailored to your unique goals, so you can wake up each day with clarity, security, and peace.
        </p>
      </div>
    </div>
  );
}
