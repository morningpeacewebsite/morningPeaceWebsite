import Image from "next/image";
import Link from "next/link";

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
            <div className="flex flex-col md:flex-row items-center gap-8 h-full p-8">
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-5xl md:text-4xl font-bold text-orange-700 mb-6">OUR STORY</h2>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  At Morning Peace Financial Services, LLC, we began with a simple yet powerful belief: everyone deserves to start their day with peace of mind, knowing their financial future is protected. What started as a personal commitment to family and community has grown into a trusted firm helping clients across the region make informed, confident choices about life insurance and retirement planning.
                </p>
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
                  {/* Handshake Icon */} 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 13l-1 1m0 0l-4 4m1-1h-3v-3" />
                  </svg>
                </div>
                <h3 className="font-bold uppercase mb-2">TRUST</h3>
                <p className="text-lg text-gray-800">We earn it through transparency and reliability.</p>
              </div>
              <div className="bg-blue-200 rounded-md p-6 flex flex-col items-center text-center text-xl">
                <div className="bg-orange-500 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  {/* Heart with people Icon */} 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-3.582-8-8 0-1.657.672-3.157 1.757-4.243A5.978 5.978 0 0112 7a5.978 5.978 0 016.243 1.757A5.978 5.978 0 0118 13c0 4.418-3.582 8-8 8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v2m0 4h.01" />
                  </svg>
                </div>
                <h3 className="font-bold uppercase mb-2">COMPASSION</h3>
                <p className="text-lg text-gray-800">We listen first and lead with heart.</p>
              </div>
              <div className="bg-blue-200 rounded-md p-6 flex flex-col items-center text-center text-xl">
                <div className="bg-orange-500 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  {/* Hands holding heart Icon */} 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-1.657 0-3-1.343-3-3 0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l3 3 3-3" />
                  </svg>
                </div>
                <h3 className="font-bold uppercase mb-2">CLARITY</h3>
                <p className="text-lg text-gray-800">We make the complex simple and understandable.</p>
              </div>
              <div className="bg-blue-200 rounded-md p-6 flex flex-col items-center text-center text-xl">
                <div className="bg-orange-500 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  {/* Group with heart Icon */} 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v6" />
                  </svg>
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
  );
}
