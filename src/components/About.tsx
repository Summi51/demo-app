import Image from 'next/image';

export default function About() {
  return (
    <section id="about-us" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Background Map Placeholder (Will load map if available, silently handles if missing) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex justify-center items-center">
        <div className="w-full h-full bg-[url('/world-map.png')] bg-no-repeat bg-center bg-contain opacity-50"></div>
      </div>

      <div className="max-w-[1928px] mx-auto w-full px-6 md:px-[60px] xl:pl-[384px] xl:pr-[100px] relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
        
        {/* ABOUT FIRM Floating Badge mapped to left column padding logic tracing the `HOT TOPICS` edge */}
        <div className="hidden xl:flex absolute left-[93px] top-0 bg-[#EFEFEF] w-[206px] h-[206px] rounded-[24px] z-20 flex-col justify-center pl-[42px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <span className="text-black font-black text-[22px] tracking-[0.1em] mb-2 leading-none uppercase">ABOUT</span>
          <span className="text-black font-black text-[22px] tracking-[0.1em] leading-none uppercase">FIRM</span>
        </div>
        
        {/* Left Column (Text & Stats) */}
        <div className="flex-1 w-full flex flex-col justify-start xl:max-w-[567px]">
          
          {/* Strictly unbolded Title, 24px per Figma spec */}
          <h2 className="text-[#333333] text-[24px] font-normal mb-8 leading-none">
            HLS Global Group
          </h2>
          
          {/* Paragraph accurately width matched to 567px, 16px font per spec */}
          <p className="text-[#333333] text-[16px] leading-[1.6] w-full font-normal mb-16 text-justify lg:text-left">
            is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves in delivering the highest levels of quality and customer service while remaining cost-effective. We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese multinational companies operating in Japan.
          </p>

          <div className="flex flex-col w-full px-1">
            {/* Top Row Stats */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex flex-col w-[45%]">
                <span className="text-black font-black text-[32px] mb-2 tracking-tight">250+</span>
                <span className="text-[#444] text-[13px] leading-[1.5] font-medium font-sans">
                  Professional Staff<br/>Members Globally
                </span>
              </div>
              <div className="flex flex-col w-[45%]">
                <span className="text-black font-black text-[32px] mb-2 tracking-tight">1000+</span>
                <span className="text-[#444] text-[13px] leading-[1.5] font-medium font-sans">
                  Clients in the HLS<br/>Global Network
                </span>
              </div>
            </div>

            {/* Exact Horizontal Blue Line splitting the Stats block width natively */}
            <div className="w-full h-[2px] bg-[#00338D] mb-8"></div>

            {/* Bottom Row Stats */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col w-[45%]">
                <span className="text-black font-black text-[32px] mb-2 tracking-tight">35+</span>
                <span className="text-[#444] text-[13px] leading-[1.5] font-medium font-sans">
                  Years of Experience<br/>Connecting Japan<br/>and the World
                </span>
              </div>
              <div className="flex flex-col w-[45%]">
                <span className="text-black font-black text-[32px] mb-2 tracking-tight">15+</span>
                <span className="text-[#444] text-[13px] leading-[1.5] font-medium font-sans">
                  Countries Covered<br/>With Our Alliance<br/>Network
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Button & Image) */}
        <div className="flex-[1.2] w-full relative flex flex-col items-end">
          
          {/* Orange Dropdown Location Badge above the Image */}
          <div className="bg-[#FF6600] flex items-center justify-between px-4 sm:px-6 h-[35px] rounded-r-full rounded-l-none w-[280px] sm:w-[332px] mb-5 cursor-pointer shadow-sm hover:bg-[#e65c00] transition-colors relative z-20 overflow-hidden">
            <span className="text-black font-extrabold text-[10px] sm:text-[12px] tracking-[0.05em] pt-[2px]">WE ARE LOCATED</span>
            <div className="flex items-center space-x-2 pt-[2px]">
              <span className="text-black font-extrabold text-[11px] sm:text-[12px] tracking-wide">INDIA</span>
              <svg className="w-[16px] h-[16px] text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Large Right-Side Building Image natively rounded per style docs */}
          <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[680px] rounded-[28px] overflow-hidden shadow-2xl z-20 bg-gray-100">
            <Image
              src="/glass_building_1776347079016.png"
              alt="HLS Global Office"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}
