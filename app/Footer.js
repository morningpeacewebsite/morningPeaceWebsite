import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 text-white py-10 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* left column: main links */}
        <div className="flex-1 mb-6 md:mb-0">
          <ul className="space-y-4 text-lg font-bold">
            <li>
              <Link href="/WhoWeAre" className="hover:underline cursor-pointer">Who we are</Link>
            </li>
            <li>
              <Link href="/WhatWeOffer" className="hover:underline cursor-pointer">What we offer</Link>
            </li>
            <li>
              <Link href="/Resources" className="hover:underline cursor-pointer">Resources</Link>
            </li>
            <li>
              <Link href="/Opportunities" className="hover:underline cursor-pointer">Opportunities</Link>
            </li>
          </ul>
        </div>
        {/* center column: offerings and policies */}
        <div className="flex-1 flex flex-col md:flex-row gap-8">
          <ul className="space-y-2 text-sm">
            <li className="font-semibold">
              <Link href="/WhatWeOffer/Insurance" className="hover:underline cursor-pointer">Life Insurance</Link>
            </li>
            <li>
              <Link href="/WhatWeOffer/Insurance#living-benefits" className="hover:underline cursor-pointer">Living Benefits</Link>
            </li>
            <li>
              <Link href="/WhatWeOffer/Retirement" className="hover:underline cursor-pointer">Tax Free Retirement Planning</Link>
            </li>
            <li>
              <Link href="/WhatWeOffer/Annuities" className="hover:underline cursor-pointer">Annuities</Link>
            </li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li className="font-semibold">
              <Link href="/WhoWeAre#faq" className="hover:underline cursor-pointer">FAQ</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline cursor-pointer">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        {/* right column: contact and button */}
        <div className="flex-1 flex flex-col items-start gap-4">
          <div className="text-sm leading-relaxed">
            <div>901 McCune Road</div>
            <div>Middle River, MD 21220</div>
            <div>info@morningpeacefinancial.org</div>
            <div>443-297-7557</div>
          </div>
          <Link 
            href="/ConnectWithUs" 
            className="inline-block bg-[#2faeed] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#0077FF] hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out border-2 border-transparent hover:border-white/20"
          >
            📞 Book a Free Consultation
          </Link>
        </div>
        {/* social media column, on desktop */}
        <div className="hidden md:flex flex-col items-end gap-6 min-w-[60px]">
          <a href="https://www.facebook.com/profile.php?id=100094930730611" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="no-shadow w-12 h-12 flex items-center justify-center">
            <img src="/facebook.png" alt="Facebook" className=" no-shadow w-12 h-12 object-contain" />
          </a>
          <a href="https://www.instagram.com/morningpeacefs?igsh=cXF6MjlrMXM1dmY5&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="no-shadow w-12 h-12 flex items-center justify-center">
            <img src="/instagram.png" alt="Instagram" className="no-shadow w-12 h-12 object-contain" />
          </a>
          <a href="https://www.linkedin.com/in/myla-pacis-0550b8380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="no-shadow w-12 h-12 flex items-center justify-center">
            <img src="/linkedin.png" alt="LinkedIn" className="no-shadow w-12 h-12 object-contain" />
          </a>
        </div>
      </div>
      {/* social media row, on mobile */}
      <div className="md:hidden flex justify-center gap-8 mt-8">
        <a href="https://www.facebook.com/profile.php?id=100094930730611" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="no-shadow w-10 h-10 flex items-center justify-center">
          <img src="/facebook.png" alt="Facebook" className=" no-shadow w-10 h-10 object-contain" />
        </a>
        <a href="https://www.instagram.com/morningpeacefs?igsh=cXF6MjlrMXM1dmY5&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="no-shadow w-10 h-10 flex items-center justify-center">
          <img src="/instagram.png" alt="Instagram" className=" no-shadow w-10 h-10 object-contain" />
        </a>
        <a href="https://www.linkedin.com/in/myla-pacis-0550b8380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="no-shadow w-10 h-10 flex items-center justify-center">
          <img src="/linkedin.png" alt="LinkedIn" className="no-shadow w-10 h-10 object-contain" />
        </a>
      </div>
    </footer>
  );
}
