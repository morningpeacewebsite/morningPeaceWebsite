export default function WhatWeOffer() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{background: '#FCF5EF'}}>
      {/* Hero Section */}
        <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg text-center">What We Offer</h1>
        </div>
      {/* Main Content Section */}
      <div className="w-full py-12 px-4 flex flex-col items-center flex-1">
        <div className="grid grid-cols-1 gap-8 w-full max-w-6xl">
          {/* Insurance Card */}
          <a href="/WhatWeOffer/Insurance" className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start min-h-[280px] border border-[#FEA735] hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-[#2faeed] rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-white font-bold">🛡️</span>
            </div>
            <h2 className="text-3xl font-semibold text-[#FE7235] mb-4 group-hover:underline">Insurance Solutions</h2>
            <p className="text-gray-700 mb-6 text-xl leading-relaxed">
              Protect what matters most with our comprehensive life insurance options. From Term Life to Index Universal Life (IUL), 
              we provide coverage that adapts to your changing needs and helps secure your family's financial future.
            </p>
            <ul className="text-gray-600 mb-4 space-y-2 text-lg font-bold">
              <li>• Index Universal Life (IUL)</li>
              <li>• Living Benefits</li>
              <li>• Business Insurance</li>
              <li>• Term Life with Living Benefits</li>
              <li>• Mortgage Protection Plans</li>
              <li>• Juvenile Fixed Index</li>
            </ul>
            <span className="mt-auto bg-[#00C3FF] text-white px-4 py-2 rounded font-semibold group-hover:bg-[#0077FF] transition">Explore Insurance →</span>
          </a>

          {/* Retirement Card */}
          <a href="/WhatWeOffer/Retirement" className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start min-h-[280px] border border-[#FEA735] hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-[#FEA735] rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-white font-bold">🏖️</span>
            </div>
            <h2 className="text-3xl font-semibold text-[#FE7235] mb-4 group-hover:underline">Retirement Planning</h2>
            <p className="text-gray-700 mb-6 text-xl leading-relaxed">
              Build the retirement you've always dreamed of with our tax-advantaged strategies. From annuities to retirement income planning, 
              we help you create a secure financial future that lets you retire with confidence and peace of mind.
            </p>
            <ul className="text-gray-600 mb-4 space-y-2 text-lg font-bold">
              <li>• Tax Free Retirement Strategies</li>
              <li>• Fixed and Fixed Index Annuities</li>
              <li>• Multi Year Guaranteed Annuities</li>
              <li>• Income Planning Solutions</li>
              <li>• Legacy and Estate Planning</li>
            </ul>
            <span className="mt-auto bg-[#00C3FF] text-white px-4 py-2 rounded font-semibold group-hover:bg-[#0077FF] transition">Explore Retirement →</span>
          </a>
        </div>
      </div>
    </div>
  );
}
