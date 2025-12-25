
import React from 'react';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-[#020617] text-slate-100 selection:bg-indigo-500/30 font-sans">
      {/* 導航欄 - 品牌置於左上角 */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-[#020617]/50 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-black text-white shadow-xl shadow-indigo-500/20">
            C
          </div>
          <span className="text-sm font-black tracking-[0.3em] text-white/90">
            CATALYST
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
          <a href="#features" className="hover:text-white transition-colors">平台功能</a>
          <a href="#contact-form" className="hover:text-white transition-colors">聯絡我</a>
        </div>
      </nav>

      {/* 背景裝飾 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/5 blur-[150px] rounded-full"></div>
        <div className="hero-glow"></div>
      </div>

      <main className="relative z-10 w-full max-w-5xl pt-40 md:pt-56">
        {/* 英雄區塊 - 純文字理念傳達 */}
        <section className="mb-48 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-[10px] font-bold tracking-[0.2em] uppercase">
            Platform Provider • Identity Security
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tight leading-[1.1] max-w-4xl">
            提供最真實、最純粹的 <br />
            <span className="gradient-text">創業資源</span> 數位空間
          </h1>

          <div className="max-w-3xl">
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
              Catalyst 是一個純粹的平台提供者。我們不參與任何媒合流程，而是致力於透過 <span className="text-white border-b border-indigo-500">嚴格的實名認證</span>，為創業者打造一個零詐騙、高品質的資源對接環境。
            </p>
          </div>
        </section>

        {/* 平台功能區塊 */}
        <section id="features" className="mb-48">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">為什麼選擇我們的平台？</h2>
            <p className="text-slate-400 text-lg">
              我們不玩演算法媒合，我們提供您所需的「信任」與「透明度」。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-10 rounded-[3rem] bg-gradient-to-br from-indigo-500/5 to-transparent border border-white/5 hover:bg-white/[0.04] transition-all">
              <div className="w-16 h-16 mb-6 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">100% KYC 實名認證庫</h4>
              <p className="text-slate-400 leading-relaxed">
                這是平台的核心，也是唯一的入場券。所有用戶必須通過法律級的身分核實。我們為您把關，杜絕所有虛假資訊，讓對接發生在真實的人之間。
              </p>
            </div>

            <div className="group p-10 rounded-[3rem] bg-gradient-to-br from-purple-500/5 to-transparent border border-white/5 hover:bg-white/[0.04] transition-all">
              <div className="w-16 h-16 mb-6 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">自主對接、不設門檻</h4>
              <p className="text-slate-400 leading-relaxed">
                我們不干涉您的合作。只要通過認證，您可以自由發布需求、搜尋夥伴。不論專案規模大小，這裡提供最直覺、去中心化的交流空間。
              </p>
            </div>
          </div>
        </section>

        {/* 申請表單區塊 */}
        <section id="contact-form" className="mb-48 max-w-3xl mx-auto scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">聯絡我了解更多</h2>
            <p className="text-slate-400 text-lg">
              提交下方表單，我們將把相關資訊發送至您的信箱。
            </p>
          </div>
          <ContactForm />
        </section>

        {/* 簡約頁尾 */}
        <footer className="text-center pb-20 pt-20 border-t border-white/5">
          <div className="flex flex-col items-center gap-6">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-black text-white shadow-xl">C</div>
            <div className="space-y-1">
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black">
                Catalyst Infrastructure
              </p>
              <p className="text-[9px] text-slate-600 font-medium">
                © 2024 Catalyst Entrepreneur Platform. Trust is our Infrastructure.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
