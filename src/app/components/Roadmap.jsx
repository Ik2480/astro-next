import React from 'react';

const roadmapData = [
  { id: 1, title: 'Project Foundation', timeframe: 'Lift-off (Jul–Aug 2025)', description: 'Finalize brand identity, website, smart contract audit. Website & Landing Page Launch.', progress: 100 },
  { id: 2, title: 'Presale Launch', timeframe: 'Blast-Off Presale (Aug 10 – Nov 10, 2025)', description: 'Launch presale at $0.01. Meme contests, whitelist promo, community building.', progress: 55 },
  { id: 3, title: 'Exchange Listings', timeframe: 'Listings & Liquidity (Q1 2026)', description: 'DEX liquidity (Raydium, Jupiter). Apply to 1–2 CEX listings. Major marketing campaign.', progress: 15 },
  { id: 4, title: 'Lending Platform', timeframe: 'AstroLoan Activation (Q2 2026)', description: 'Deploy lending module. Enable borrowing USDC/SOL against ADUCK.', progress: 11 },
  { id: 5, title: 'Ecosystem Expansion', timeframe: 'Utility & Ecosystem Growth (Q4 2026)', description: 'Airdrops & staking rewards. AstroLoan upgrades and DAO treasury launch.', progress: 8 },
  { id: 6, title: 'Gaming & Governance', timeframe: 'AstroVerse & DAO Tools (Q1 2027)', description: 'AstroVerse Game release. DAO governance tools and voting.', progress: 6 },
  { id: 7, title: 'Long-term Vision', timeframe: 'Dominance & Sustainability (Q2 2027+)', description: 'Meme launchpad creation. Merch, brand expansion, quarterly treasury updates.', progress: 5 },
];

const Roadmap = () => {
  return (
    // Added a main container with a dark background color
    <div id="roadmap" className="bg-[#1a1a1a] min-h-screen py-16">
      <div className="space-y-5 w-full">
        {roadmapData.map((phase, index) => (
          <div key={phase.id} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Timeline Number Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0dbae2] to-[#873aea] border-4 border-[#23263a] shadow-xl flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{phase.id}</span>
                </div>
                <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#0dbae2] to-[#873aea] blur-md opacity-50 animate-pulse"></div>
              </div>
            </div>
            {/* Roadmap Card */}
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 lg:pr-12' : 'pl-8 lg:pl-12'}`}>
              <div className="bg-[#23263a]/95 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl border border-[#353a50]/30 hover:border-[#0dbae2]/50 transition-all duration-500 hover:shadow-[#0dbae2]/20 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0dbae2]/5 to-[#873aea]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#0dbae2] animate-pulse"></div>
                    <span className="text-[#0dbae2] font-bold text-sm tracking-wider uppercase">Phase {phase.id}</span>
                  </div>
                  <h1 className="text-3xl text-gray-300 font-extrabold">{phase.title}</h1>
                  <div className="text-[#873aea] font-semibold text-sm mb-4 bg-[#1c243e] px-3 py-1 rounded-full inline-block">{phase.timeframe}</div>
                  <p className="text-lg text-gray-300">{phase.description}</p>
                  <div className="mt-6">
                    <div className="w-full bg-[#1c243e] rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#0dbae2] to-[#873aea] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${phase.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 mt-2">Progress: {phase.progress}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Final message */}
        <div className="mt-16 lg:mt-20 text-center z-50">
          <div className="inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-[#0dbae2] to-[#873aea] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full shadow-xl">
            <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-xs lg:text-sm">🚀</span>
            </div>
            <span className="font-bold text-base lg:text-lg">Mission to the Moon Complete!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
