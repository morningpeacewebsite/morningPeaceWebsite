import Image from 'next/image'

export default function Retirement() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{background: '#FCF5EF'}}>
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center">Retirement Planning</h1>
      </div>

      {/* Main Content Section */}
      <div className="w-full py-12 px-4 flex flex-col items-center flex-1">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Introduction Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#FE7235] mb-6">Your Path to Financial Freedom</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Retirement planning isn't just about saving money—it's about creating a comprehensive strategy that ensures 
                  you can maintain your lifestyle and achieve your dreams during your golden years. Our expert team specializes 
                  in tax-advantaged retirement solutions that maximize your savings while minimizing your tax burden.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether you're just starting your career or approaching retirement, we'll help you create a personalized 
                  roadmap that adapts to your changing needs and market conditions.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-md">
                  <Image
                    src="/src/img/financial-freedom.jpg"
                    alt="Financial Freedom"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Tax-Free Retirement */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#FEA735]">
              <div className="w-16 h-16 bg-[#2faeed] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#FE7235] mb-4">Tax-Free Retirement Strategies</h3>
              <p className="text-gray-700 mb-4">
                Discover how to create tax-free retirement income through strategic planning with life insurance and other tax-advantaged vehicles.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Tax Free Income Planning</li>
                <li>• Index Universal Life (IUL) Strategies</li>
                <li>• Roth IRA Rollovers</li>
              </ul>
            </div>

            {/* Annuities */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#FEA735]">
              <div className="w-16 h-16 bg-[#FEA735] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">📈</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#FE7235] mb-4">Annuities and Income Solutions</h3>
              <p className="text-gray-700 mb-4">
                Secure guaranteed income streams that you can't outlive, providing peace of mind and financial stability throughout retirement.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Fixed Index Annuities</li>
                <li>• Immediate Income Annuities</li>
                <li>• Deferred Income Planning</li>
                <li>• Multi Year Guarantee Annuities</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#FE7235] mb-6 text-center">Why Choose Our Retirement Planning?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2faeed] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Personalized Strategies</h4>
                <p className="text-gray-600">Every retirement plan is tailored to your unique goals, timeline, and risk tolerance.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FEA735] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏆</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance</h4>
                <p className="text-gray-600">Our certified professionals stay current with changing tax laws and market conditions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FE7235] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📞</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Ongoing Support</h4>
                <p className="text-gray-600">We provide continuous monitoring and adjustments to keep your plan on track.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold text-[#FE7235] mb-4">Ready to Start Your Retirement Journey?</h2>
            <p className="text-gray-700 text-lg mb-8">
              Schedule a consultation today and discover how we can help you build the retirement you deserve.
            </p>
            <a 
              href="/ConnectWithUs" 
              className="inline-block bg-[#00C3FF] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0077FF] transition shadow-lg"
            >
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
