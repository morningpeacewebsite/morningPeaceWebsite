import { BarChart3, Heart, Users, Shield, Home, Briefcase, Coins, ShieldCheck, FileBadge2, HandCoins } from "lucide-react";

export default function WhatWeOffer() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{ background: '#FCF5EF' }}>
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg text-center">
          What We Offer
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="w-full py-16 px-6 flex flex-col items-center flex-1">
        <div className="max-w-7xl w-full">
          {/* Insurance Solutions Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-extrabold uppercase mb-8 text-[#F7941D] tracking-wide">
              INSURANCE SOLUTIONS
            </h2>
            <p className="text-gray-800 mb-12 text-lg max-w-4xl leading-relaxed">
              Protect what matters most with our comprehensive insurance solutions. From Universal Index Life (IUL) to term life, we provide coverage that adapts to your changing needs and helps secure your family’s financial future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Index Universal Life (IUL)",
                  description:
                    "Flexible life insurance with cash value growth tied to a market index, offering protection and potential for accumulation.",
                  icon: <BarChart3 className="w-16 h-16" />,
                },
                {
                  title: "Living Benefits",
                  description:
                    "Access your policy’s cash value for critical illness, chronic illness, or disability, providing financial support when you need it most.",
                  icon: <Heart className="w-16 h-16" />,
                },
                {
                  title: "Juvenile FIUL",
                  description:
                    "Permanent life insurance designed for children, building cash value and providing lifelong protection.",
                  icon: <Users className="w-16 h-16" />,
                },
                {
                  title: "Term Life",
                  description:
                    "Affordable life insurance coverage for a specific term, providing peace of mind for your loved ones.",
                  icon: <Shield className="w-16 h-16" />,
                },
                {
                  title: "Mortgage Protection",
                  description:
                    "Coverage designed to pay off your mortgage in the event of your passing, securing your home for your family.",
                  icon: <Home className="w-16 h-16" />,
                },
                {
                  title: "Business Insurance",
                  description:
                    "Protect your business assets and employees with tailored insurance solutions to keep your operations secure.",
                  icon: <Briefcase className="w-16 h-16" />,
                },
              ].map((box, i) => {
                const isOrange = i % 2 === 0;
                const bgColor = isOrange ? 'bg-white' : 'bg-[#FEF8F1]';
                const shadowColor = isOrange ? 'shadow-orange-300' : 'shadow-blue-300';
                const textColor = isOrange ? 'text-[#F7941D]' : 'text-[#1D9BF0]';

                return (
                  <div
                    key={i}
                    className={`${bgColor} rounded-3xl p-8 shadow-lg ${shadowColor} flex flex-col items-start space-y-4 hover:shadow-2xl transition-shadow duration-300`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-opacity-20" style={{ backgroundColor: isOrange ? '#F7941D' : '#1D9BF0' }}>
                        {box.icon}
                      </div>
                      <h3 className={`text-2xl font-bold ${textColor}`}>{box.title}</h3>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed">{box.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center mt-8 mb-8 max-w-4xl mx-auto">
              <a
                href="/WhatWeOffer/Insurance"
                className="inline-block bg-[#00C3FF] text-white px-10 py-5 rounded-full font-semibold text-xl hover:bg-[#0077FF] transition cursor-pointer"
              >
                Explore Insurance →
              </a>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-extrabold uppercase mb-8 text-[#F7941D] tracking-wide">
              RETIREMENT PLANNING
            </h2>
            <p className="text-gray-800 mb-12 text-lg max-w-4xl leading-relaxed">
              Build the retirement you've always dreamed of with our tax-advantaged strategies. From annuities to retirement income planning, we help you create a secure financial future that lets you retire with confidence and peace of mind.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {[
                {
                  title: "Tax Free Retirement Strategies",
                  icon: <Coins className="w-16 h-16" />,
                },
                {
                  title: "Fixed and Fixed Index Annuities",
                  icon: <ShieldCheck className="w-16 h-16" />,
                },
                {
                  title: "Multi Year Guaranteed Annuities",
                  icon: <FileBadge2 className="w-16 h-16" />,
                },
                {
                  title: "Legacy and Estate Planning",
                  icon: <HandCoins className="w-16 h-16" />,
                },
              ].map((box, i) => {
                const isOrange = i % 2 === 0;
                const bgColor = isOrange ? 'bg-white' : 'bg-[#FEF8F1]';
                const shadowColor = isOrange ? 'shadow-orange-300' : 'shadow-blue-300';
                const textColor = isOrange ? 'text-[#F7941D]' : 'text-[#1D9BF0]';

                return (
                  <div
                    key={i}
                    className={`${bgColor} rounded-3xl p-8 shadow-lg ${shadowColor} flex flex-col items-start space-y-4 hover:shadow-2xl transition-shadow duration-300`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-opacity-20" style={{ backgroundColor: isOrange ? '#F7941D' : '#1D9BF0' }}>
                        {box.icon}
                      </div>
                      <h3 className={`text-2xl font-bold ${textColor}`}>{box.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center mt-8 mb-8 max-w-4xl mx-auto">
              <a
                href="/WhatWeOffer/Annuities"
                className="inline-block bg-[#00C3FF] text-white px-10 py-5 rounded-full font-semibold text-xl hover:bg-[#0077FF] transition cursor-pointer"
              >
                Explore Annuities →
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
