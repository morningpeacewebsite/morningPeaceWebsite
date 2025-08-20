import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{background: '#FCF5EF'}}>
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <div className="flex items-center space-x-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">What is Morning Peace?</h1>
          <div className="bg-white p-2 rounded-lg shadow-md">
            <Image
              src="/morning_peace_no_BG.png"
              alt="Morning Peace Financial Services Logo"
              width={160}
              height={64}
              priority
            />
          </div>
        </div>
      </div>
      {/* Our Story Section */}
      <div className="w-full py-12 px-4 md:px-8" style={{background: '#FCF5EF'}}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6">OUR STORY</h2>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  At Morning Peace Financial Services, LLC, we began with a simple yet powerful belief: everyone deserves to start their day with peace of mind, knowing their financial future is protected. What started as a personal commitment to family and community has grown into a trusted firm helping clients across the region make informed, confident choices about life insurance and retirement planning.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-md h-80 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                  src="/couple_signing.jpeg"
                  alt="Our Story Image"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mission and Values Section */}
      <div className="w-full bg-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
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
            <Link href="/ConnectWithUs">
              <button className="mt-4 px-8 py-3 bg-sky-400 text-white rounded-lg font-semibold shadow hover:bg-sky-500 transition">Contact Us</button>
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center mt-10 md:mt-0 md:ml-10">
              <Image
                src="/mission_n_vision.jpg"
                alt="Young couple with advisor"
                width={400}
                height={260}
                className="rounded-lg shadow-lg object-cover max-h-[260px] w-auto h-auto"
                priority
              />
          </div>
        </div>
      </div>
    </div>
  );
}
