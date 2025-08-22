"use client";
import Image from "next/image";

export default function Vesting() {
  return (
    <section
      id="vesting"
      className="relative py-16 px-4 flex flex-col items-center bg-gradient-to-b from-[#0a0b12]"
    >
      <div className="w-full space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-fuchsia-800 bg-clip-text text-transparent">
            Vesting & Unlock Schedule
          </h1>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Image
              src="/vesting.webp"
              alt="Vesting Illustration"
              width={500}
              height={500}
              className="w-[70%] h-[500px] object-contain"
              priority
            />
          </div>

          {/* Right Side - Unlock Schedule Card */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-full bg-[#141726] space-y-5 rounded-2xl p-8 shadow-xl backdrop-blur-md border border-[#252836]">
              <h4 className="w-full text-center text-lg font-bold text-cyan-500">
                Unlock Schedule
              </h4>

              <table className="w-full text-left">
                <thead>
                  <tr className="text-cyan-400 text-md">
                    <th className="pb-2">Category</th>
                    <th className="pb-2 px-5">TGE Unlock</th>
                    <th className="pb-2">Vesting Details</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      category: "Presale",
                      unlock: "100%",
                      detail: "Immediate unlock",
                    },
                    {
                      category: "Team & Advisors",
                      unlock: "0%",
                      detail: "12-month cliff, then 12-month linear unlock",
                    },
                    {
                      category: "Liquidity",
                      unlock: "100%",
                      detail: "Locked for 12 months",
                    },
                    {
                      category: "Airdrop & Giveaways",
                      unlock: "10%",
                      detail: "3-month linear unlock",
                    },
                    {
                      category: "Master Sale",
                      unlock: "0%",
                      detail: "Strategic releases",
                    },
                    {
                      category: "Marketing / Ecosystem",
                      unlock: "0%",
                      detail: "Governance-controlled unlocks",
                    },
                    {
                      category: "Governance / DAO Treasury",
                      unlock: "0%",
                      detail: "DAO-controlled, proposal-based release",
                    },
                    {
                      category: "Loans Pool",
                      unlock: "0%",
                      detail: "Locked for lending feature development",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-[#353a50] text-white text-md hover:bg-[#1f2335]/60 transition-colors"
                    >
                      <td className="py-2 w-1/3 font-semibold">{row.category}</td>
                      <td className="py-2 w-1/3 px-5 font-bold text-[#0dbae2]">
                        {row.unlock}
                      </td>
                      <td className="py-2 w-1/3 text-sm">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
