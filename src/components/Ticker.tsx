import Link from 'next/link';

export default function Ticker() {
  const topics = [
    "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
    "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
    "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
    "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025",
  ];

  return (
    <section className="w-full bg-white relative border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1928px] mx-auto w-full flex flex-col xl:flex-row relative px-6 md:px-[60px] xl:pl-[93px] xl:pr-[40px] pb-10 pt-8 xl:pt-[50px] xl:pb-[15px] h-auto min-h-[150px]">
        
        <div className="shrink-0 mb-10 xl:mb-0 xl:mr-10 2xl:mr-[50px]">
          <div 
            className="w-[206px] h-[49px] bg-[#FF7300] flex items-center shadow-sm shrink-0"
            style={{ 
              clipPath: 'polygon(0 0, 88% 0, 100% 100%, 0 100%)',
              borderTopLeftRadius: '6px',
              borderBottomLeftRadius: '6px'
            }}
          >
            
            <span className="text-black font-extrabold text-[12px] pl-6 tracking-widest uppercase">
              HOT TOPICS
            </span>
          </div>
        </div>

        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 2xl:gap-10 h-auto xl:h-[85px] z-10 pr-0 xl:pr-10">
          {topics.map((text, idx) => (
            <div key={idx} className="flex flex-col justify-between relative group cursor-pointer h-full min-h-[100px] xl:min-h-0">
              
              <div className="flex flex-col">
                <div className="w-[98%] lg:w-[94%] h-[2px] bg-[#00338D] transition-transform origin-left group-hover:scale-x-[1.02]"></div>
                
                {/* Text paragraph */}

                <p className="text-[13px] xl:text-[13.5px] 2xl:text-[14.5px] text-[#2c2c2c] font-medium leading-[1.5] mt-[14px] pr-2 xl:pr-4">
                  {text}
                </p>
              </div>
              
              {/* Arrow -> */}

              <div className="w-full flex justify-end mt-4 xl:absolute xl:bottom-[-2px] xl:right-4 pointer-events-none pr-4 xl:pr-0">
                <svg 
                  className="w-[22px] h-[22px] text-black group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
