import Image from 'next/image';

export default function Insights() {
  const listItems = [
    {
      title: "Pre-market Entry",
      desc: "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
      active: true
    },
    {
      title: "Market Entry",
      desc: "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
      active: false
    },
    {
      title: "Operations",
      desc: "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.",
      active: false
    },
    {
      title: "Growth & Expansion",
      desc: "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
      active: false
    }
  ];

  return (
    <section id="insights" className="py-20 lg:py-24 bg-white relative overflow-hidden">

      <div className="max-w-[1928px] mx-auto w-full px-6 md:px-[60px] xl:pl-[384px] xl:pr-[100px] relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
        
        {/* INSPIRATION & INSIGHTS Floating Badge mapped perfectly to exactly below the ABOUT FIRM column! */}
        <div className="hidden xl:flex absolute left-[93px] top-0 bg-[#EFEFEF] w-[206px] h-[206px] rounded-[24px] z-20 flex-col justify-center pl-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <span className="text-black font-black text-[18px] tracking-[0.05em] mb-1 leading-[1.3] uppercase pr-4">INSPIRATION &</span>
          <span className="text-black font-black text-[18px] tracking-[0.05em] leading-[1.3] uppercase">INSIGHTS</span>
        </div>

        {/* Center Column (List) */}
        <div className="flex-1 w-full flex flex-col justify-start xl:max-w-[567px] pt-4">
          {listItems.map((item, idx) => (
            <div key={idx} className="flex flex-col w-full group cursor-pointer">
              {/* Text Block */}
              <div className="flex flex-col mb-4">
                <h3 className={`text-[16px] font-bold mb-2 transition-colors ${item.active ? 'text-[#00338D]' : 'text-black group-hover:text-[#00338D]'}`}>
                  {item.title}
                </h3>
                <p className={`text-[14px] leading-[1.5] transition-colors ${item.active ? 'text-[#00338D]' : 'text-[#333333]'}`}>
                  {item.desc}
                </p>
              </div>

              {/* Divider Line */}
              {/* The first divider is Blue, matching the Figma prototype. The rest are gray. */}
              {idx < listItems.length - 1 && (
                <div className={`w-full h-[1px] mb-6 ${item.active ? 'bg-[#00338D]' : 'bg-[#D1D1D1]'}`}></div>
              )}
              {idx === listItems.length - 1 && (
                <div className="w-full h-[1px] bg-[#D1D1D1]"></div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column (Images) - Beautifully responsive grid/stack */}
        <div className="flex-[1.4] w-full flex flex-col gap-6 mt-12 lg:mt-0">
          
          {/* Main Wide Image Card */}
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[380px] rounded-[24px] overflow-hidden shadow-xl group cursor-pointer">
            <Image
              src="/professional_lifestyle_1776347094754.png"
              alt="Pre-Market"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 pt-24 pb-8 px-8 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/80 to-transparent flex flex-col justify-end">
              <span className="text-white font-bold text-[20px] mb-2 tracking-wide">Pre-Market</span>
              <span className="text-gray-300 text-[13px] leading-[1.5]">
                Evaluating Supply Chain Readiness<br/>Before Committing Capital in<br/>Emerging Markets
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 h-auto lg:h-[220px]">
            {/* Operations Pill */}
            <div className="flex-1 relative h-[300px] sm:h-auto rounded-[24px] overflow-hidden shadow-xl group cursor-pointer bg-gray-900">
               <Image
                src="/office_staff_1776347058908.png"
                alt="Operations"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent lg:inset-0 lg:flex lg:justify-center lg:items-end lg:pb-12 lg:bg-gradient-to-t lg:from-black/80 lg:via-black/20 lg:to-transparent">
                 <span className="text-white font-bold text-[18px] tracking-[0.1em] lg:transform lg:-rotate-90 origin-center whitespace-nowrap leading-none lg:absolute lg:bottom-1/4">
                   Operations
                 </span>
              </div>
            </div>

            {/* Growth & Expansion Pill */}
             <div className="flex-1 relative h-[300px] sm:h-auto rounded-[24px] overflow-hidden shadow-xl group cursor-pointer bg-gray-900">
               <Image
                src="/glass_building_1776347079016.png"
                alt="Growth & Expansion"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent lg:inset-0 lg:flex lg:justify-center lg:items-end lg:pb-12 lg:bg-gradient-to-t lg:from-black/80 lg:via-black/20 lg:to-transparent">
                 <span className="text-white font-bold text-[18px] tracking-[0.1em] lg:transform lg:-rotate-90 origin-center whitespace-nowrap leading-none lg:absolute lg:bottom-[30%]">
                   Growth & Expansion
                 </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
