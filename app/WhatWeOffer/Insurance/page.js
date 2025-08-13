export default function Insurance() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{background: '#FCF5EF'}}>
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center">Insurance Solutions</h1>
      </div>

      {/* Main Content Section */}
      <div className="w-full py-12 px-4 flex flex-col items-center flex-1">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Term Life Insurance Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-md h-80 bg-gray-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-6xl mb-4">⏰</span>
                  <p className="text-gray-500 text-center font-medium">Term Life Protection</p>
                  <p className="text-gray-400 text-sm text-center mt-2">Placeholder for term life visual</p>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#FE7235] mb-6">TERM LIFE</h2>
                <p className="text-gray-800 text-lg leading-relaxed mb-5">
                  We can't always see what's coming — but you can plan ahead. Term life insurance offers affordable, straightforward protection for your loved ones during life's most important years.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed mb-5">
                  It covers you for a set period — typically 10, 15, or 20 years — and provides a financial safety net if the unexpected happens. Compared to long-term or permanent policies, term life is often more budget-friendly, making it a smart choice for families, new homeowners, or anyone wanting strong coverage without the higher cost.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">MORTGAGE PROTECTION</h4>
                  <p className="text-gray-800 text-base leading-relaxed mb-3">
                    <strong>Keep your home — even if life takes an unexpected turn.</strong>
                  </p>
                  <p className="text-gray-800 text-base leading-relaxed">
                    Mortgage Protection Insurance is a type of life insurance designed to help your family pay off your mortgage if you pass away or become seriously ill. It ensures that your loved ones can stay in their home without the added financial stress during a difficult time.
                  </p>
                </div>
                <a 
                  href="/ConnectWithUs" 
                  className="inline-block bg-[#2faeed] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#0077FF] transition shadow-md"
                >
                  Connect with an Agent
                </a>
              </div>
            </div>
          </div>

          {/* Living Benefits Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-md h-80 bg-gray-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-6xl mb-4">❤️</span>
                  <p className="text-gray-500 text-center font-medium">Living Benefits</p>
                  <p className="text-gray-400 text-sm text-center mt-2">Placeholder for living benefits visual</p>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#FE7235] mb-6">LIVING BENEFITS</h2>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">Coverage You Can Use While You're Still Living</h3>
                <p className="text-gray-800 text-lg leading-relaxed mb-5">
                  Life can be unpredictable — but your financial security doesn't have to be. Living Benefits Insurance gives you access to part of your life insurance while you're still alive, if you're faced with a serious illness or health condition.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  That means you don't have to wait until after you're gone for your policy to help your family. With living benefits, you can use your coverage when you need it most — for medical bills, home care, lost income, or anything else life throws your way.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Why It Matters</h4>
                  <p className="text-gray-800 text-base leading-relaxed">
                    Unlike traditional life insurance that only pays out after death, Living Benefits provide a financial safety net during your lifetime. If you're diagnosed with a major illness or unable to care for yourself, you can tap into your policy to ease the burden and focus on healing.
                  </p>
                </div>
                <a 
                  href="/ConnectWithUs" 
                  className="inline-block bg-[#2faeed] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#0077FF] transition shadow-md"
                >
                  Take the Next Step
                </a>
              </div>
            </div>
          </div>

          {/* IUL Information Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-md h-80 bg-gray-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-6xl mb-4">🛡️</span>
                  <p className="text-gray-500 text-center font-medium">Insurance Protection</p>
                  <p className="text-gray-400 text-sm text-center mt-2">Placeholder for IUL visual</p>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#FE7235] mb-6">WHAT IS INDEXED UNIVERSAL LIFE INSURANCE?</h2>
                <p className="text-gray-800 text-xl leading-loose mb-6">
                  Indexed universal life insurance (IUL) is permanent life insurance that offers death benefit protection when death occurs. Like other forms of permanent life insurance, the premium payments may earn interest and grow the cash value of the policy.
                </p>
                <p className="text-gray-800 text-xl leading-loose mb-6">
                  What differentiates FIUL from other permanent life insurance is the way interest is credited to the policy. In addition to offering a traditional declared interest rate, FIUL also offers the ability to earn interest that is linked to the movement of a selected underlying stock market index over a specific period of time.
                </p>
                <a 
                  href="/ConnectWithUs" 
                  className="inline-block bg-[#2faeed] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#0077FF] transition shadow-md"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Why Choose Our Insurance Section */}
          <div className="bg-white rounded-xl shadow-lg p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FE7235] mb-10 text-center">Why Choose Our Insurance Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#2faeed] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Tailored Coverage</h4>
                <p className="text-gray-800 text-lg leading-loose">Every policy is customized to your specific needs, budget, and family situation.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#FEA735] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">🏆</span>
                </div>
                <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Top-Rated Carriers</h4>
                <p className="text-gray-800 text-lg leading-loose">We work with highly-rated insurance companies known for their financial strength and reliability.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#FE7235] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">📞</span>
                </div>
                <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Ongoing Support</h4>
                <p className="text-gray-800 text-lg leading-loose">From application to claims, we're here to guide you through every step of the process.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FE7235] mb-6">Protect What Matters Most</h2>
            <p className="text-gray-800 text-xl leading-loose mb-10 max-w-4xl mx-auto">
              Get a personalized insurance quote and discover how we can help secure your family's financial future.
            </p>
            <a 
              href="/ConnectWithUs" 
              className="inline-block bg-[#2faeed] text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-[#0077FF] transition shadow-lg"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
