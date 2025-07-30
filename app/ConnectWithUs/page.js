export default function ConnectWithUs() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#FCF5EF] py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Leave us a message</h1>
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
            info@morningpeacefinancial.com
          </div>
          <div>
            <span className="font-semibold">Phone:</span><br/>
            443-297-7557
          </div>
        </div>
      </div>
      
      {/* Appointment Booking Section */}
      <div className="w-full max-w-5xl mt-12 bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            i
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Morning Peace</h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free 30-60 min Consultation</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>60 min appointments</span>
            </div>
            <p className="text-gray-700 mb-4">
              This is a free 30-60 minute consultation with a licensed financial 
              professional from Morning Peace.
            </p>
            <button className="text-[#FEA735] hover:text-[#FE7235] font-medium underline">
              Show more
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Select an appointment time</h4>
          <p className="text-sm text-gray-600 mb-6">(GMT-04:00) Eastern Time - New York</p>
          
          {/* Calendar iframe placeholder */}
          <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ23g0yG8Jw1BgQ0x3rgG3HkjogBHsoNTemdm97CCsOXC4z_SjTy9mTWsRuuGC6JwF1qRp4oODpa?gv=true" style={{border: '0', width: "100%", height: "600px", frameBorder: "0"}}></iframe>

        </div>
      </div>
    </div>
  );
} 