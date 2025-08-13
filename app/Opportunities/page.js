export default function Opportunities() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{background: '#FCF5EF'}}>
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            Ready to Take the Next Step in Your Career?
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-white/90">
            Become a Licensed Agent and Join Our Team of Professionals
          </h2>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="w-full py-12 px-4 flex flex-col items-center flex-1">
        <div className="w-full max-w-6xl">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Text Content */}
              <div className="flex-1">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                  Your Financial Career Starts Here
                </p>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-semibold">
                  Are you <span className="text-[#FEA735] font-bold">passionate</span> about helping people, 
                  <span className="text-[#FEA735] font-bold"> driven</span> to succeed, and <span className="text-[#FEA735] font-bold">ready</span> to build a 
                  rewarding career?
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  We're not just looking for agents—we're building a family of financial professionals 
                  who understand that true success comes from transforming lives.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Whether you're just starting your journey or looking to 
                  elevate your existing career, we provide the 
                  comprehensive tools, proven training, and unwavering support 
                  you need to not just survive—but <span className="text-[#FEA735] font-bold text-xl">THRIVE</span>.
                </p>
              </div>
              
              <div className="flex-1 max-w-md">
                <img
                  src="/src/img/office setting.jpeg"
                  alt="Office Setting"
                  className="w-full h-80 object-cover rounded-lg"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
            </div>
          </div>

          {/* Why Join Us Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#2faeed] mb-6 text-center">Why Join Us?</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Benefits List */}
              <div className="flex-1">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#FEA735] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Proven training and licensing support
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#FEA735] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Competitive commissions and growth opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#FEA735] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    A collaborative, team-first environment
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#FEA735] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Ongoing mentorship and career development
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#FEA735] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Access to industry-leading tools and resources
                  </li>
                </ul>
              </div>
              
              <div className="flex-1 max-w-md">
                <img
                  src="/src/img/team_image.jpeg"
                  alt="Team Image"
                  className="w-full h-64 object-cover rounded-lg"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
            </div>
          </div>

          {/* No License Section */}
          <div className="bg-gradient-to-r from-[#FEA735] to-[#FE7235] rounded-xl p-8 mb-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">No license yet? No problem.</h3>
            <p className="text-lg">We'll guide you through the licensing process step by step.</p>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#2faeed] mb-6">Let's Grow Together</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              If you're ready to explore what's possible and build a future you're proud of, we'd love to hear 
              from you.
            </p>
            <p className="text-xl font-semibold text-gray-900 mb-8">
              Start your journey today. Join our team.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0Bz_QRMhu_DsTWAWvptgFj1jzKCmiEibW5dF0U6Yb61WhMQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="bg-[#FEA735] hover:bg-[#FE7235] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg inline-block">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
