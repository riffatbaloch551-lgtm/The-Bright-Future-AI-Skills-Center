/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  BrainCircuit, 
  Rocket, 
  GraduationCap, 
  Code2, 
  Zap, 
  Users, 
  DollarSign, 
  PlayCircle,
  Copy,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md text-right"
  >
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 ml-auto`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="font-urdu text-2xl mb-3 text-white">{title}</h3>
    <p className="text-cyan-100/60 leading-relaxed">{desc}</p>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#000d26] text-white font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#000d26]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between flex-row-reverse">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-8 h-8 text-cyan-400" />
            <span className="font-urdu text-2xl font-bold tracking-tight">دی برائٹ فیوچر اے آئی سکلز سینٹر</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 flex-row-reverse font-urdu text-lg">
            <a href="#" className="hover:text-cyan-400 transition-colors">ہوم</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">کورسز</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">پرامپٹس</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">کمیونٹی</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-cyan-500 text-[#000d26] px-6 py-2 rounded-full font-bold hover:bg-cyan-400 transition-all">
              لاگ ان
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-20 left-0 w-full bg-[#000d26] border-b border-white/5 p-6 flex flex-col items-center gap-6 font-urdu text-xl"
            >
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400 transition-colors">ہوم</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400 transition-colors">کورسز</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400 transition-colors">پرامپٹس</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400 transition-colors">کمیونٹی</a>
              <button className="w-full bg-cyan-500 text-[#000d26] py-4 rounded-2xl font-bold">
                لاگ ان
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-cyan-200">پاکستان کا پہلا AI سکلز سینٹر</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-urdu text-5xl md:text-8xl mb-8 leading-[1.3] drop-shadow-2xl"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400">
              بغیر کوڈنگ کے ایپس بنانا سیکھیں
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-cyan-100/70 mb-12 max-w-3xl mx-auto leading-relaxed font-urdu"
          >
            اب انگلش یا مشکل کوڈنگ کی ضرورت نہیں۔ صرف AI کے ذریعے اپنی ویب ایپس، ٹولز اور پروجیکٹس بنائیں — وہ بھی اپنی زبان اردو میں۔
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="bg-cyan-500 text-[#000d26] px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 hover:scale-105 transition-all shadow-lg shadow-cyan-500/20 font-urdu">
              سیکھنا شروع کریں
              <Rocket className="w-6 h-6" />
            </button>
            <button className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 hover:bg-white/10 transition-all backdrop-blur-md font-urdu">
              ڈیمو دیکھیں
              <PlayCircle className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8">
            <div className="text-5xl font-bold text-cyan-400 mb-4">0%</div>
            <p className="font-urdu text-xl text-cyan-100/60">کوڈنگ کا تجربہ درکار ہے</p>
          </div>
          <div className="p-8 border-x border-white/5">
            <div className="text-5xl font-bold text-purple-400 mb-4">100%</div>
            <p className="font-urdu text-xl text-cyan-100/60">اردو میں رہنمائی</p>
          </div>
          <div className="p-8">
            <div className="text-5xl font-bold text-emerald-400 mb-4">10x</div>
            <p className="font-urdu text-xl text-cyan-100/60">تیز رفتار ڈیولپمنٹ</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-urdu text-5xl mb-6">ہم کیا سکھاتے ہیں؟</h2>
            <div className="h-1.5 w-24 bg-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap}
              title="AI سے ایپس بنانا"
              desc="بغیر کسی مشکل کوڈ کے، صرف AI ٹولز استعمال کر کے پروفیشنل ویب ایپس بنانا سیکھیں۔"
              color="bg-cyan-500"
            />
            <FeatureCard 
              icon={Copy}
              title="ریڈی میڈ پرامپٹس"
              desc="ہمارے تیار کردہ 'کاپی پیسٹ' پرامپٹس استعمال کریں اور منٹوں میں اپنا پروجیکٹ تیار کریں۔"
              color="bg-purple-500"
            />
            <FeatureCard 
              icon={Code2}
              title="اپنے پروجیکٹس"
              desc="صرف تھیوری نہیں، بلکہ ہم آپ کو عملی طور پر اپنے پروجیکٹس بنانے کا موقع دیتے ہیں۔"
              color="bg-pink-500"
            />
            <FeatureCard 
              icon={PlayCircle}
              title="ویڈیو کورسز"
              desc="اردو میں مرحلہ وار ویڈیو گائیڈز جو آپ کو زیرو سے ہیرو بنا دیں گی۔"
              color="bg-emerald-500"
            />
            <FeatureCard 
              icon={DollarSign}
              title="پیسے کمانے کے طریقے"
              desc="فری لانسنگ اور آن لائن ارننگ کے وہ طریقے جو AI کی مدد سے ممکن ہیں۔"
              color="bg-yellow-500"
            />
            <FeatureCard 
              icon={GraduationCap}
              title="سرٹیفیکیشن"
              desc="کورس مکمل کرنے پر پروفیشنل سرٹیفکیٹ حاصل کریں اور اپنی پہچان بنائیں۔"
              color="bg-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-12">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-8 h-8 text-cyan-400" />
            <span className="font-urdu text-2xl font-bold">دی برائٹ فیوچر اے آئی سکلز سینٹر</span>
          </div>
          <p className="text-cyan-100/40 text-sm">© 2026 دی برائٹ فیوچر اے آئی سکلز سینٹر۔ تمام حقوق محفوظ ہیں۔</p>
        </div>
      </footer>
    </div>
  );
}
