import Image from "next/image";

export default function ConnectWithUs() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fff6ed]">
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[400px] md:min-h-[420px] px-4 md:px-8 pt-12 pb-0" style={{background: "linear-gradient(90deg, #ff9800 0%, #ffb347 100%)"}}>
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">

          <div className="flex-1 flex flex-col justify-center items-center md:items-start md:flex-row md:items-center md:gap-6">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-2 text-left leading-tight text-black">
              Leave us a message
            </h1>
            <div className="mt-4 md:mt-0">
              <Image
                src="/src/img/contact_us.jpeg"
                alt="Contact Us"
                width={900}
                height={900}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="flex-1 flex items-end justify-center md:justify-end mt-8 md:mt-0">
          </div>
        </div>
      </div>
      {/* Contact Content Section */}
      <div className="w-full py-12 px-4 md:px-8" style={{background: '#FCF5EF'}}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-black">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Form */}
              <form className="flex flex-col gap-6 flex-1">
                <div className="flex flex-col md:flex-row gap-4">
                  <input type="text" placeholder="Full Name" className="flex-1 border-b-2 border-gray-200 focus:border-[#FEA735] outline-none py-2 px-2 text-lg text-black" />
                  <input type="text" placeholder="Phone number" className="flex-1 border-b-2 border-gray-200 focus:border-[#FEA735] outline-none py-2 px-2 text-lg text-black" />
                </div>
                <input type="email" placeholder="Email" className="border-b-2 border-gray-200 focus:border-[#FEA735] outline-none py-2 px-2 text-lg text-black" />
                <textarea placeholder="Message" rows={4} className="border-b-2 border-gray-200 focus:border-[#FEA735] outline-none py-2 px-2 text-lg resize-none text-black" />
                <button type="submit" className="mt-4 w-40 bg-[#FEA735] hover:bg-[#FE7235] text-white font-bold py-3 rounded-full self-end transition">Submit</button>
              </form>
              {/* Contact Info */}
              <div className="flex flex-col justify-center gap-6 text-black text-lg flex-1">
                <p className="mb-2">Your gateway to personalized assistance and expert guidance.<br/>Whether you have inquiries about our services.</p>
                <div>
                  <span className="font-semibold">Address:</span><br/>
                  901 McCune Road, Middle River, MD 21220
                </div>
                <div>
                  <span className="font-semibold">Email:</span><br/>
                  info@morningpeacefinancial.com
                </div>
                <div>
                  <span className="font-semibold">Phone:</span><br/>
                  443-297-7557
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment Booking Section */}
      <div className="w-full bg-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-black">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                i
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black mb-2">Morning Peace</h2>
                <h3 className="text-2xl font-bold text-black mb-2">Free 30-60 min Consultation</h3>
                <div className="flex items-center gap-2 text-black mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>60 min appointments</span>
                </div>
                <p className="mb-4">
                  This is a free 30-60 minute consultation with a licensed financial 
                  professional from Morning Peace.
                </p>
                <button className="text-[#FEA735] hover:text-[#FE7235] font-medium underline">
                  Show more
                </button>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold text-black mb-4">Select an appointment time</h4>
              <p className="text-sm mb-6">(GMT-04:00) Eastern Time - New York</p>
              {/* Calendar iframe placeholder */}
              <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ23g0yG8Jw1BgQ0x3rgG3HkjogBHsoNTemdm97CCsOXC4z_SjTy9mTWsRuuGC6JwF1qRp4oODpa?gv=true" style={{border: '0', width: "100%", height: "600px", frameBorder: "0"}}></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
