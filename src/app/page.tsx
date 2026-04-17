import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import About from '@/components/About';
import Insights from '@/components/Insights';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Ticker />
      <About />
      <Insights />
      
      {/* Footer */}
      <footer className="w-full bg-brand-blue py-8 border-t border-brand-blue/90">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-white space-y-4 md:space-y-0">
          <div className="font-bold text-xl tracking-widest">HLS GLOBAL</div>
          <div className="text-sm opacity-70">
            © {new Date().getFullYear()} HLS Global Group. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
