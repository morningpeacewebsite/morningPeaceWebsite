export default function WhatWeOffer() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{background: '#FCF5EF'}}>
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center">What We Offer</h1>
      </div>
      {/* Main Content Section */}
      <div className="w-full py-12 px-4 flex flex-col items-center flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Insurance Card */}
          <a href="/WhatWeOffer/Insurance" className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start min-h-[280px] border border-[#FEA735] hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-[#2faeed] rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-white font-bold">🛡️</span>
            </div>
            <h2 className="text-2xl font-semibold text-[#FE7235] mb-4 group-hover:underline">Insurance Solutions</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Protect what matters most with our comprehensive life insurance options. From term life to indexed universal life (IUL), 
              we provide coverage that adapts to your changing needs and helps secure your family's financial future.
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Term Life Insurance</li>
              <li>• Indexed Universal Life (IUL)</li>
              <li>• Living Benefits Coverage</li>
              <li>• Family Protection Plans</li>
            </ul>
            <span className="mt-auto bg-[#00C3FF] text-white px-4 py-2 rounded font-semibold group-hover:bg-[#0077FF] transition">Explore Insurance →</span>
          </a>

          {/* Retirement Card */}
          <a href="/WhatWeOffer/Retirement" className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start min-h-[280px] border border-[#FEA735] hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-[#FEA735] rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-white font-bold">🏖️</span>
            </div>
            <h2 className="text-2xl font-semibold text-[#FE7235] mb-4 group-hover:underline">Retirement Planning</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Build the retirement you've always dreamed of with our tax-advantaged strategies. From annuities to retirement income planning, 
              we help you create a secure financial future that lets you retire with confidence and peace of mind.
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Tax-Free Retirement Strategies</li>
              <li>• Fixed & Variable Annuities</li>
              <li>• Income Planning Solutions</li>
              <li>• Legacy & Estate Planning</li>
            </ul>
            <span className="mt-auto bg-[#00C3FF] text-white px-4 py-2 rounded font-semibold group-hover:bg-[#0077FF] transition">Explore Retirement →</span>
          </a>
        </div>
      </div>
    </div>
  );
} 
