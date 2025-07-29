export default function Resources() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{background: '#FCF5EF'}}>
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center">Resources</h1>
      </div>
      {/* Main Content Section */}
      <div className="w-full py-12 px-4 flex flex-col items-center flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* IUL Advantage Article Card */}
          <a href="/Resources/IUL-advantage" className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start min-h-[220px] border border-[#FEA735] hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-[#FEA735] rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-[#FE7235] font-bold">IUL</span>
            </div>
            <h2 className="text-xl font-semibold text-[#FE7235] mb-2 group-hover:underline">The IUL Advantage: What Your Accountant Wants You to Know</h2>
            <div className="text-sm text-[#0077FF] mb-2">By Myla Pacis</div>
            <p className="text-gray-700 mb-4">Discover why Indexed Universal Life (IUL) is gaining traction as a secure, tax-advantaged solution for retirement and estate planning—plus 10 key reasons accountants recommend it.</p>
            <span className="mt-auto bg-[#00C3FF] text-white px-3 py-1 rounded font-semibold group-hover:bg-[#0077FF] transition">Read Article →</span>
          </a>
          {/* Add more cards here in the future */}
        </div>
      </div>
    </div>
  );
} 