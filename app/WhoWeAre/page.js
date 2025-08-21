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
                <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6">OUR STORY</h2>
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
                src="/missions_and_values.jpg"
                alt="Young couple with advisor"
                width={600}
                height={390}
                className="rounded-lg shadow-lg object-cover max-h-[390px] w-auto h-auto"
                priority
              />
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
