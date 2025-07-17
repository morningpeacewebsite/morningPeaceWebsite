import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fff6ed]">
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between min-h-[400px] md:min-h-[420px] px-4 md:px-16 pt-12 pb-0" style={{background: "linear-gradient(90deg, #ff9800 0%, #ffb347 100%)"}}>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-2 text-left leading-tight">
            <span className="text-[#ffeb3b]">What is</span>{' '}
            <span className="text-white">Morning Peace?</span>
          </h1>
        </div>
        <div className="flex-1 flex items-end justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src="/src/img/Screenshot 2025-07-17 125343.png"
            alt="Elderly couple with advisor"
            width={420}
            height={420}
            className="object-contain max-h-[340px] md:max-h-[420px] w-auto h-auto drop-shadow-xl"
            priority
          />
        </div>
      </div>
      {/* White Content Section */}
      <div className="w-full bg-white py-12 px-4 md:px-16 flex flex-col items-center md:items-start">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6 text-left w-full">OUR STORY</h2>
        <p className="text-lg md:text-xl text-gray-800 max-w-3xl text-left">
          At Morning Peace Financial Services, LLC, we began with a simple yet powerful belief: everyone deserves to start their day with peace of mind, knowing their financial future is protected. What started as a personal commitment to family and community has grown into a trusted firm helping clients across the region make informed, confident choices about life insurance and retirement planning.
        </p>
      </div>
      {/* Mission and Values Section */}
      <div className="w-full bg-white py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-500 mb-6 text-left w-full">OUR MISSION AND VALUES</h2>
          <p className="text-lg text-gray-800 mb-6 text-left w-full">
            <span className="font-bold">Our mission</span> is to deliver the highest quality financial products and guidance, empowering our clients to live with confidence today and every day.
          </p>
          <p className="text-lg text-gray-800 mb-4 text-left w-full font-bold">Our core values are:</p>
          <ul className="text-lg text-gray-800 mb-4 list-disc pl-6 w-full">
            <li><span className="font-bold">Trust</span> – We earn it through transparency and reliability.</li>
            <li><span className="font-bold">Compassion</span> – We listen first and lead with heart.</li>
            <li><span className="font-bold">Clarity</span> – We make the complex simple and understandable.</li>
            <li><span className="font-bold">Commitment</span> – We are dedicated to your peace of mind, now and into the future.</li>
          </ul>
          <button className="mt-4 px-8 py-3 bg-sky-400 text-white rounded-lg font-semibold shadow hover:bg-sky-500 transition">Contact Us</button>
        </div>
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0 md:ml-10">
          <Image
            src="/src/img/Screenshot 2025-07-17 125833.png"
            alt="Young couple with advisor"
            width={400}
            height={260}
            className="rounded-lg shadow-lg object-cover max-h-[260px] w-auto h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
} 