import Image from "next/image";
import Link from "next/link";
import { Handshake, Heart, Users, HandCoins } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* background img */}
        <Image
          src="/sunsetBG (1).png"
          alt="Sunset Background"
          fill
          quality={100}
          priority
          className="z-0 no-shadow"
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

      <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      {/* <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <div className="flex items-center gap-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg no-shadow text-center">
            What is Morning Peace?
          </h1>
        </div>
      </div> */}

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
                    <Heart className="w-12 h-12 text-black" />
                  </div>
                  <h3 className="font-bold uppercase mb-2">COMPASSION</h3>
                  <p className="text-lg text-gray-800">We listen first and lead with heart.</p>
                </div>
                <div className="bg-blue-200 rounded-md p-6 flex flex-col items-center text-center text-xl">
                <div className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                    <Users className="w-12 h-12 text-black" />
                  </div>
                  <h3 className="font-bold uppercase mb-2">CLARITY</h3>
                  <p className="text-lg text-gray-800">We make the complex simple and understandable.</p>
                </div>
                <div className="bg-blue-200 rounded-md p-6 flex flex-col items-center text-center text-xl">
                  <div className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                    <HandCoins className="w-12 h-12 text-black" />
                  </div>
                  <h3 className="font-bold uppercase mb-2">COMMITMENT</h3>
                  <p className="text-lg text-gray-800">We are dedicated to your peace of mind, now and into the future.</p>
                </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full py-12 px-4 md:px-8" style={{background: '#FCF5EF'}}>
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1 max-w-md relative">
              <img
                src="/FAQ_img.jpg"
                alt="FAQs"
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                priority="true"
              />
            </div>
            <div className="flex-1 w-full max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold text-sky-600 mb-6">Any questions?</h3>
              <div className="space-y-4">
                <details className="border border-sky-300 rounded-lg p-4">
                  <summary className="cursor-pointer text-xl font-semibold text-sky-600">WHAT TYPES OF INSURANCE DOES MORNING PEACE OFFER?</summary>
                  <p className="mt-2 text-base text-gray-800 leading-relaxed">
                    At Morning Peace Financial Services, we offer a comprehensive range of insurance and financial products, including Living Benefits, tax-free retirement strategies, annuities, and voluntary benefits for businesses. Each solution is carefully designed to provide protection, stability, and long-term peace of mind.
                  </p>
                </details>
                <details className="border border-sky-300 rounded-lg p-4">
                  <summary className="cursor-pointer text-xl font-semibold text-sky-600">WHEN SHOULD I START PLANNING FOR RETIREMENT?</summary>
                  <p className="mt-2 text-base text-gray-800 leading-relaxed">
                    The sooner the better. Whether you're early in your career or nearing retirement, we can help you build or refine a strategy that grows with you.
                  </p>
                </details>
                <details className="border border-sky-300 rounded-lg p-4">
                  <summary className="cursor-pointer text-xl font-semibold text-sky-600">HOW DO I GET STARTED WITH MORNING PEACE?</summary>
                  <p className="mt-2 text-base text-gray-800 leading-relaxed">
                    Simply contact us via phone, email, or our online consultation form. One of our licensed agents will schedule a no-obligation conversation to understand your goals and recommend solutions.
                  </p>
                </details>
                <details className="border border-sky-300 rounded-lg p-4">
                  <summary className="cursor-pointer text-xl font-semibold text-sky-600">ARE CONSULTATIONS FREE?</summary>
                  <p className="mt-2 text-base text-gray-800 leading-relaxed">
                    Yes. We offer complimentary consultations to help you explore your options and make informed decisions — with no pressure and no cost.
                  </p>
                </details>
                <details className="border border-sky-300 rounded-lg p-4">
                  <summary className="cursor-pointer text-xl font-semibold text-sky-600">CAN YOU WORK WITH CLIENTS IN MY STATE?</summary>
                  <p className="mt-2 text-base text-gray-800 leading-relaxed">
                    Absolutely. We’re licensed to serve clients in all 50 states, so no matter where you live, we’re here to help.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
