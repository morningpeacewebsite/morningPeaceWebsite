import Image from "next/image";
import Link from "next/link";
import { Handshake, Heart, Users, HeartHandshake } from "lucide-react";

export default function WhoWeAre() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{background: '#FCF5EF'}}>
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center">What is Morning Peace?</h1>
      </div>
      {/* Our Story Section */}
      <div className="w-full min-h-screen h-screen" style={{background: '#F3D9B1'}}>
        <div className="w-full h-full">
          <div className="bg-white w-full h-full shadow-lg" style={{background: '#FCF5EF'}}>
            <div className="flex flex-col md:flex-row items-center gap-8 h-full p-12">
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-bold text-orange-700 mb-8">OUR STORY</h2>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                  At Morning Peace Financial Services, LLC, we began with a simple yet powerful belief: everyone deserves to start their day with peace of mind, knowing their financial future is protected. What started as a personal commitment to family and community has grown into a trusted firm helping clients across the region make informed, confident choices about life insurance and retirement planning.
                </p>
                <Link href="/ConnectWithUs">
                  <button className="mt-6 px-10 py-4 bg-sky-400 text-white rounded-lg font-semibold shadow hover:bg-sky-500 transition">Contact Us</button>
                </Link>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <div className="w-full max-w-xl h-96 rounded-lg flex items-center justify-center">
                <Image
                  src="/couple_signing.jpeg"
                  alt="Our Story Image"
                  width={460}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                  priority
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mission and Values Section */}
      <div className="w-full bg-white py-12 px-4 md:px-8 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-sky-600 mb-4 uppercase">OUR MISSION AND VALUES</h2>
          <p className="text-center text-gray-700 max-w-3xl mb-12 text-2xl">
            Our mission is to deliver the highest quality financial products and guidance, empowering our clients to live with confidence today and every day.
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
              <div className="bg-blue-200 rounded-md p-6 flex flex-col items-center text-center text-2xl">
                <div className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <Handshake className="w-12 h-12 text-black" />
                </div>
                <h3 className="font-bold uppercase mb-2">TRUST</h3>
                <p className="text-lg text-gray-800">We earn it through transparency and reliability.</p>
              </div>
              <div className="bg-blue-200 rounded-md p-6 flex flex-col items-center text-center text-xl">
                <div className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <HeartHandshake className="w-12 h-12 text-black" />
                </div>
                <h3 className="font-bold uppercase mb-2">COMPASSION</h3>
                <p className="text-lg text-gray-800">We listen first and lead with heart.</p>
              </div>
              <div className="bg-blue-200 rounded-md p-6 flex flex-col items-center text-center text-xl">
                <div className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <Heart className="w-12 h-12 text-black" />
                </div>
                <h3 className="font-bold uppercase mb-2">CLARITY</h3>
                <p className="text-lg text-gray-800">We make the complex simple and understandable.</p>
              </div>
              <div className="bg-blue-200 rounded-md p-6 flex flex-col items-center text-center text-xl">
                <div className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-black" />
                </div>
                <h3 className="font-bold uppercase mb-2">COMMITMENT</h3>
                <p className="text-lg text-gray-800">We are dedicated to your peace of mind, now and into the future.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
