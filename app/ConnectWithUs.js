export default function ConnectWithUs() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{background: '#FCF5EF'}}>
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center">Connect With Us</h1>
      </div>
      {/* Main Content Section */}
      <div className="w-full py-12 px-4 flex flex-col items-center flex-1">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg p-8">
        {/* Contact Form */}
        <form className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Full Name" className="flex-1 border-b-2 border-gray-200 focus:border-[#FEA735] outline-none py-2 px-2 text-lg" />
            <input type="text" placeholder="Phone number" className="flex-1 border-b-2 border-gray-200 focus:border-[#FEA735] outline-none py-2 px-2 text-lg" />
          </div>
          <input type="email" placeholder="Email" className="border-b-2 border-gray-200 focus:border-[#FEA735] outline-none py-2 px-2 text-lg" />
          <textarea placeholder="Message" rows={4} className="border-b-2 border-gray-200 focus:border-[#FEA735] outline-none py-2 px-2 text-lg resize-none" />
          <button type="submit" className="mt-4 w-40 bg-[#FEA735] hover:bg-[#FE7235] text-white font-bold py-3 rounded-full self-end transition">Submit</button>
        </form>
        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6 text-gray-700 text-lg">
          <p className="mb-2">Your gateway to personalized assistance and expert guidance.<br/>Whether you have inquiries about our services.</p>
          <div>
            <span className="font-semibold">Address:</span><br/>
            901 McCune Road, Middle River, MD 21220
          </div>
          <div>
            <span className="font-semibold">Email:</span><br/>
            info@morningpeace.org
          </div>
          <div>
            <span className="font-semibold">Phone:</span><br/>
            443-297-7557
          </div>
        </div>
        </div>
      </div>
    </div>
  );
} 