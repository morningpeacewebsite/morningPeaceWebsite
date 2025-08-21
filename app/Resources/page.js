export default function Resources() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{background: '#FCF5EF'}}>
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center">Resources</h1>
      </div>
      {/* Main Content Section */}

        <div className="w-full py-12 px-4 flex flex-col items-center flex-1">
          <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
            {/* IUL Advantage Article Card */}
            <a href="/Resources/IUL-advantage" className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start min-h-[220px] border border-[#FEA735] hover:shadow-xl transition group">
              <div className="w-20 h-20 bg-[#FEA735] rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-[#FE7235] font-bold">IUL</span>
              </div>
              <h2 className="text-2xl font-semibold text-[#FE7235] mb-3 group-hover:underline">The IUL Advantage: What Your Accountant Wants You to Know</h2>
              <div className="text-lg text-[#0077FF] mb-3">By Myla Pacis</div>
              <p className="text-gray-700 mb-6 text-lg">Discover why Indexed Universal Life (IUL) is gaining traction as a secure, tax-advantaged solution for retirement and estate planning—plus 10 key reasons accountants recommend it.</p>
              <span className="mt-auto bg-[#00C3FF] text-white px-4 py-2 rounded font-semibold group-hover:bg-[#0077FF] transition">Read Article →</span>
            </a>
            
            {/* How to Navigate Retirement Article Card */}
            <a href="/Resources/How-to-Navigate-Retirement" className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start min-h-[220px] border border-[#FEA735] hover:shadow-xl transition group">
              <div className="w-20 h-20 bg-[#2faeed] rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white font-bold">💡</span>
              </div>
              <h2 className="text-2xl font-semibold text-[#FE7235] mb-3 group-hover:underline">How to Navigate Retirement Talks with Optimism: 5 Key Topics to Shape Your Future</h2>
              <div className="text-lg text-[#0077FF] mb-3">By Myla Pacis</div>
              <p className="text-gray-700 mb-6 text-lg">Learn how to approach retirement planning with positivity and confidence through five essential discussion topics that can transform your retirement conversations.</p>
              <span className="mt-auto bg-[#00C3FF] text-white px-4 py-2 rounded font-semibold group-hover:bg-[#0077FF] transition">Read Article →</span>
            </a>
            
            {/* IUL Perfect Gift Article Card */}
            <a href="/Resources/IUL-Perfect-Gift" className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start min-h-[220px] border border-[#FEA735] hover:shadow-xl transition group">
              <div className="w-20 h-20 bg-[#FEA735] rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white font-bold">🎁</span>
              </div>
              <h2 className="text-2xl font-semibold text-[#FE7235] mb-3 group-hover:underline">The Gift of a Lifetime: Why IUL Is More Than Just Life Insurance</h2>
              <div className="text-lg text-[#0077FF] mb-3">By Myla Pacis</div>
              <p className="text-gray-700 mb-6 text-lg">Discover how starting an IUL early for a child or grandchild can be one of the most powerful financial decisions you make for their future security and wealth building.</p>
              <span className="mt-auto bg-[#00C3FF] text-white px-4 py-2 rounded font-semibold group-hover:bg-[#0077FF] transition">Read Article →</span>
            </a>

            {/* Turning Points Article Card */}
            <a href="/Resources/Turning-Points" className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start min-h-[220px] border border-[#FEA735] hover:shadow-xl transition group">
              <div className="w-20 h-20 bg-[#2faeed] rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white font-bold">📅</span>
              </div>
              <h2 className="text-2xl font-semibold text-[#FE7235] mb-3 group-hover:underline">Turning Points: Your Decade-by-Decade Guide to Retirement Milestones</h2>
              <div className="text-lg text-[#0077FF] mb-3">By Myla Pacis</div>
              <p className="text-gray-700 mb-6 text-lg">Navigate your retirement journey with confidence through key milestones from age 50 to 70, including catch-up contributions, Social Security benefits, and Medicare enrollment.</p>
              <span className="mt-auto bg-[#00C3FF] text-white px-4 py-2 rounded font-semibold group-hover:bg-[#0077FF] transition">Read Article →</span>
            </a>
            {/* Add more cards here in the future */}
          </div>
        </div>
    </div>
  );
}
