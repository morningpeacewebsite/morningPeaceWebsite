"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-tr from-orange-200 to-orange-400 text-white py-10 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left column: Main links */}
        <div className="flex-1 mb-6 md:mb-0">
          <ul className="space-y-4 text-lg font-bold">
            <li className="hover:underline cursor-pointer">Who we are</li>
            <li className="hover:underline cursor-pointer">What we offer</li>
            <li className="hover:underline cursor-pointer">Resources</li>
            <li className="hover:underline cursor-pointer">Opportunities</li>
          </ul>
        </div>
        {/* Center column: Offerings and policies */}
        <div className="flex-1 flex flex-col md:flex-row gap-8">
          <ul className="space-y-2 text-sm">
            <li className="font-semibold">Life Insurance</li>
            <li>Living Benefits</li>
            <li>Tax Free Retirement Planning</li>
            <li>Annuities</li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li className="font-semibold">FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Right column: Contact and button */}
        <div className="flex-1 flex flex-col items-start gap-2">
          <div className="text-sm">
            <div>901 McCune Road</div>
            <div>Middle River, MD 21220</div>
            <div>Email</div>
            <div>443-297-7557</div>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded">Book a free consultation</button>
        </div>
      </div>
      {/* Social media row */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-xs text-white/80">Insert Social media icons with links: FB, IG, LinkedIn</div>
        {/* Placeholder for icons */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">FB</div>
          <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">IG</div>
          <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">IN</div>
        </div>
      </div>
    </footer>
  );
} 