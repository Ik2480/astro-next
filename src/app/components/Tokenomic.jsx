"use client";

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="bg-gradient-to-b from-black via-zinc-950 to-neutral-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
          Tokenomics
        </h2>
        <p className="text-zinc-400 mt-2 text-lg">
          A breakdown of our token distribution and supply.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mb-12">
        {[
          { label: "Total Supply", value: "1,234,567,890" },
          { label: "Decimals", value: "9" },
          { label: "Symbol", value: "ADUCK" },
          { label: "Token Name", value: "AstroDuck" },
          { label: "Chain", value: "Solana" },
          { label: "Presale Price", value: "$0.01" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-zinc-800/70 border border-zinc-700 p-4 rounded-xl text-center"
          >
            <p className="text-sm font-semibold text-zinc-400">{stat.label}</p>
            <p className="mt-1 text-lg font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Allocation & Image Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Allocation List */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl font-semibold mb-6">Token Allocation</h3>
          <ul className="space-y-4">
            {[
              {
                title: "Presale",
                desc: "Public sale at $0.01 per ADUCK",
                color: "bg-orange-500",
                percent: "30%",
              },
              {
                title: "Team & Advisors",
                desc: "12-month cliff + 12-month linear vesting",
                color: "bg-purple-500",
                percent: "15%",
              },
              {
                title: "Liquidity",
                desc: "Locked for DEX & CEX listings",
                color: "bg-cyan-500",
                percent: "15%",
              },
              {
                title: "Loans Pool",
                desc: "For AstroLoan lending feature",
                color: "bg-yellow-400 text-zinc-900",
                percent: "14%",
              },
              {
                title: "Master Sale",
                desc: null,
                color: "bg-green-400 text-zinc-900",
                percent: "15%",
              },
              {
                title: "Ecosystem Growth",
                desc: null,
                color: "bg-sky-400 text-zinc-900",
                percent: "5%",
              },
              {
                title: "Marketing",
                desc: null,
                color: "bg-rose-400 text-zinc-900",
                percent: "3%",
              },
              {
                title: "Community",
                desc: null,
                color: "bg-fuchsia-400 text-zinc-900",
                percent: "3%",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-zinc-800/70 border border-zinc-700 p-4 rounded-lg"
              >
                <div>
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  {item.desc && (
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  )}
                </div>
                <span
                  className={`${item.color} text-sm font-bold px-3 py-1 rounded-full`}
                >
                  {item.percent}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tokenomics Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="/tokenomic.png"
            alt="Tokenomics Pie Chart"
            width={500}
            height={500}
            className="rounded-3xl shadow-2xl border border-zinc-700"
          />
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
