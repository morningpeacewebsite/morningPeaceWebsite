export default function TurningPoints() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{background: '#FCF5EF'}}>
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-4">
            Turning Points: Your Decade-by-Decade Guide to Retirement Milestones
          </h1>
        </div>
      </div>

      {/* Article Image */}
      <div className="w-full flex justify-center my-8">
        <img
          src="/team_image.jpeg"
          alt="Turning Points"
          className="max-w-full h-auto rounded-lg shadow-lg"
          style={{ maxHeight: '400px' }}
        />
      </div>
      
      {/* Main Content Section */}
      <div className="w-full py-12 px-4 md:px-8 flex flex-col items-center flex-1">
        <div className="max-w-7xl mx-auto w-full">
          {/* Author */}
          <div className="text-center mb-8">
            <p className="text-lg text-[#2faeed] font-semibold">By Myla Pacis</p>
            <p className="text-md text-gray-600">Regional Vice President, FEG</p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              You've hit 50 – big congrats! This milestone isn't just symbolic; it opens new doors for 
              retirement planning. You're now eligible for catch-up contributions, as defined by the IRS. 
              This allows you to contribute more to your traditional 401(k) and IRA accounts, helping you 
              make up for earlier years where saving might have fallen short.¹
            </p>
          </div>

          {/* Planning to Retire Early */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#2faeed] mb-4">Planning to Retire Early?</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              If early retirement is on your radar, the Rule of 55 is worth understanding. It allows penalty-free 
              withdrawals from an employer-sponsored 401(k) if you leave your job the year you turn 55 or 
              later – assuming your plan permits it.² This rule can be a helpful strategy if you're planning to 
              step away from work ahead of the typical retirement timeline.
            </p>
          </div>

          {/* Approaching 60 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#2faeed] mb-4">Approaching 60? More Options Open Up</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              As you near your 60s, access to your retirement savings changes. At age 59½, you can begin 
              withdrawing from traditional IRAs and most retirement plans without facing the 10% 
              early withdrawal penalty.³ While income taxes may still apply, you now have more flexibility 
              in how and when you use your savings.
            </p>
          </div>

          {/* Time to Take Stock */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#2faeed] mb-4">Time to Take Stock</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              With early withdrawal penalties mostly behind you, it's a great time to pause and evaluate your 
              retirement picture. Have your financial needs changed? Are you still planning to retire early, or 
              do you need to pivot? Even without penalties, there are still tax implications tied to 
              withdrawals. A financial advisor can help ensure you're staying on track and optimizing your 
              strategy.
            </p>
          </div>

          {/* Social Security: It Begins */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#2faeed] mb-4">Social Security: It Begins</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At 60, Social Security Survivor benefits become available. If your spouse – or even a former 
              spouse of at least 10 years – has passed away, you may be eligible to claim benefits.⁴
            </p>
          </div>

          {/* Social Security: It's Officially on the Table */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#2faeed] mb-4">Social Security: It's Officially on the Table</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At 62, you can begin drawing Social Security benefits, but keep in mind: starting early usually 
              means a reduced monthly benefit. If you're still working, your benefits might be further reduced 
              until you reach full retirement age. For full details, visit ssa.gov.
            </p>
          </div>

          {/* Welcome to Medicare */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#2faeed] mb-4">Welcome to Medicare</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Healthcare plays a crucial role in retirement. If you're no longer on an employer-sponsored 
              health plan, Medicare eligibility begins at age 65. You can enroll as early as three months 
              before your 65th birthday. Already receiving Social Security? You'll be enrolled automatically. 
              Visit medicare.gov for all the enrollment details.
            </p>
          </div>

          {/* Full Retirement Age */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#2faeed] mb-4">Full Retirement Age – You're Here!</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your full retirement age depends on your birth year. Reaching it allows you to collect your full 
              Social Security benefit amount. Not sure when that is? Use this chart from the SSA: Retirement 
              Age Calculator
            </p>
          </div>

          {/* Age 70: Maximum Benefits */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#2faeed] mb-4">Age 70: Maximum Social Security Benefits</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you've delayed collecting Social Security, age 70 is the final stop. Waiting has paid off — 
              your monthly benefit has grown about 8% for each year you waited past full retirement age.⁵ 
              There's no benefit to delaying beyond 70, so now's the time to start receiving it.
            </p>
          </div>

          {/* Required Minimum Distributions */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#2faeed] mb-4">Required Minimum Distributions (RMDs)</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Now it's time to begin Required Minimum Distributions (RMDs) from tax-deferred accounts. 
              The IRS mandates these annual withdrawals to ensure funds are eventually taxed. RMDs count 
              as taxable income, and laws governing them recently changed under the SECURE 2.0 Act. Learn 
              more about these changes and how they affect you at IRS.gov.
            </p>
          </div>

          {/* You've Reached the Summit */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#2faeed] mb-4">You've Reached the Summit</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every retirement journey is unique, and this timeline is just a framework. As you navigate each 
              stage, make sure your retirement income strategy supports your goals and lifestyle. For more 
              tools, insights, and resources to help guide your next steps, click here to learn how American 
              Equity can be a part of your plan.
            </p>
          </div>

          {/* Roadmap to Retirement Image */}
          <div className="flex justify-center my-12">
            <img
              src="/Roadmap to Retirement.PNG"
              alt="Roadmap to Retirement"
              className="max-w-full h-auto rounded-lg shadow-lg border border-gray-300"
              style={{ maxHeight: '500px' }}
            />
          </div>

          {/* Footnotes */}
          <div className="bg-gray-100 border-l-4 border-[#FEA735] p-6 rounded-lg mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Footnotes:</h4>
            <ul className="text-gray-700 space-y-2 list-decimal pl-6">
              <li>Internal Revenue Service: Retirement Topics - Catch-Up Contributions, August 2023</li>
              <li>IRS: Topic No. 558, Additional Tax on Early Distributions, November 2023</li>
              <li>IRS: Exceptions to Tax on Early Distributions, August 2023</li>
              <li>Social Security Administration: Benefits for Spouses, December 2023</li>
              <li>Social Security Administration: Delayed Retirement, December 2023</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
