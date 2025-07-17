import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/src/img/sunsetBG.png"
        alt="Sunset Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />
      {/* Overlay Box */}
      <div
        className="absolute z-10 right-[10%] top-1/2 -translate-y-1/2 max-w-2xl p-10 rounded-lg"
        style={{
          background: "rgba(255, 183, 94, 0.65)", // light orange with transparency
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        }}
      >
        <h1 className="text-5xl font-bold leading-tight mb-4 text-white">
          <span className="block">Your Future.</span>
          <span className="block text-blue-300">Your Peace of<br/>Mind. Every</span>
          <span className="block">Morning</span>
        </h1>
        <p className="text-lg text-white font-normal">
          At Morning Peace Financial Services, we believe that financial confidence begins with the right guidance and ends with restful nights — and peaceful mornings. Our mission is simple: to provide trusted life insurance and retirement solutions tailored to your unique goals, so you can wake up each day with clarity, security, and peace.
        </p>
      </div>
    </div>
  );
}
