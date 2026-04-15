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
  CheckCircle2,
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
            className="font-urdu text-6xl md:text-8xl mb-8 leading-[1.3] drop-shadow-2xl"
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

      {/* Problem/Solution Stats */}
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

      {/* Key Features */}
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

      {/* Who is it for? */}
      <section className="py-32 px-6 bg-cyan-500/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
          <div className="flex-1 text-right">
            <h2 className="font-urdu text-5xl mb-12">یہ پلیٹ فارم کس کے لئے ہے؟</h2>
            <div className="space-y-8">
              {[
                { title: "اسٹوڈنٹس", desc: "اسکول، کالج اور یونیورسٹی کے طلباء کے لئے بہترین موقع۔", icon: GraduationCap },
                { title: "فری لانسرز", desc: "اپنی سروسز کو AI کے ذریعے اپ گریڈ کریں اور زیادہ کمائیں۔", icon: Users },
                { title: "کانٹینٹ کریئیٹرز", desc: "اپنے چینل اور کام کے لئے خودکار ٹولز بنائیں۔", icon: Rocket },
                { title: "آن لائن ارنرز", desc: "وہ لوگ جو گھر بیٹھے AI سے پیسے کمانا چاہتے ہیں۔", icon: DollarSign }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 flex-row-reverse">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-urdu text-2xl mb-2">{item.title}</h4>
                    <p className="text-cyan-100/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-[40px] border border-white/10 p-8">
              <div className="w-full h-full rounded-[20px] bg-[#000d26] border border-white/10 flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <BrainCircuit className="w-40 h-40 text-cyan-400/50" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prompts Library Preview */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-16 gap-6">
            <div className="text-right">
              <h2 className="font-urdu text-5xl mb-4">پرامپٹس لائبریری</h2>
              <p className="text-cyan-100/60 font-urdu text-xl">صرف کاپی کریں اور اپنی ایپ تیار پائیں</p>
            </div>
            <button className="text-cyan-400 flex items-center gap-2 hover:gap-4 transition-all font-urdu text-lg flex-row-reverse">
              تمام پرامپٹس دیکھیں <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: "پرسنل پورٹ فولیو ویب سائٹ", 
                prompt: "Create a modern personal portfolio website with a dark theme, responsive layout, and a contact form using React and Tailwind CSS.",
                category: "ویب سائٹ"
              },
              { 
                title: "ٹو-ڈو لسٹ ایپ", 
                prompt: "Build a functional Todo List application with local storage persistence, task categories, and a clean minimalist UI.",
                category: "ایپلی کیشن"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl group">
                <div className="flex justify-between items-start mb-4 flex-row-reverse">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-urdu">{item.category}</span>
                  <button 
                    onClick={() => navigator.clipboard.writeText(item.prompt)}
                    className="p-2 hover:bg-white/10 rounded-xl transition-all text-cyan-100/40 hover:text-cyan-400"
                    title="Copy Prompt"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
                <h4 className="font-urdu text-2xl mb-4 text-right">{item.title}</h4>
                <div className="bg-black/40 p-4 rounded-xl font-mono text-sm text-cyan-100/40 line-clamp-2 text-left">
                  {item.prompt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Roadmap */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-urdu text-5xl mb-6">سیکھنے کا راستہ</h2>
            <p className="text-cyan-100/60 font-urdu text-xl">زیرو سے پروفیشنل بننے تک کے مراحل</p>
          </div>

          <div className="space-y-12 relative">
            <div className="absolute top-0 bottom-0 right-[23px] w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent hidden md:block" />
            
            {[
              { step: "01", title: "AI ٹولز کا تعارف", desc: "سب سے پہلے ہم آپ کو بہترین AI ٹولز (جیسے ChatGPT, Claude) کے بارے میں بتائیں گے۔" },
              { step: "02", title: "پرامپٹ انجینئرنگ", desc: "AI سے صحیح کام لینے کا فن سیکھیں تاکہ آپ کی سوچ حقیقت بن سکے۔" },
              { step: "03", title: "پہلا پروجیکٹ", desc: "ہم مل کر آپ کی پہلی ویب ایپ بنائیں گے، بغیر کسی کوڈنگ کے۔" },
              { step: "04", title: "ایڈوانس ٹولز", desc: "ڈیٹا بیس اور ہوسٹنگ جیسے ایڈوانس فیچرز کو AI سے کنٹرول کرنا سیکھیں۔" },
              { step: "05", title: "ارننگ اور فری لانسنگ", desc: "اپنے ہنر کو مارکیٹ میں لائیں اور پیسے کمانا شروع کریں۔" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-8 flex-row-reverse relative"
              >
                <div className="w-12 h-12 rounded-full bg-[#000d26] border-2 border-cyan-500 flex items-center justify-center shrink-0 z-10 font-bold text-cyan-400">
                  {item.step}
                </div>
                <div className="text-right pt-2">
                  <h4 className="font-urdu text-2xl mb-2 text-white">{item.title}</h4>
                  <p className="text-cyan-100/60 leading-relaxed font-urdu">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-cyan-600 to-purple-600 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="font-urdu text-5xl md:text-6xl mb-8">آج ہی اپنا سفر شروع کریں!</h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 font-urdu">
              AI کی دنیا میں قدم رکھیں اور مستقبل کے ہنر سیکھیں۔
            </p>
            <button className="bg-white text-[#000d26] px-12 py-6 rounded-2xl font-bold text-2xl hover:scale-105 transition-all shadow-2xl font-urdu">
              ابھی جوائن کریں
            </button>
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
          <div className="flex gap-8 font-urdu text-lg flex-row-reverse">
            <a href="#" className="text-cyan-100/60 hover:text-white">پرائیویسی</a>
            <a href="#" className="text-cyan-100/60 hover:text-white">شرائط</a>
            <a href="#" className="text-cyan-100/60 hover:text-white">رابطہ</a>
          </div>
          <p className="text-cyan-100/40 text-sm">© 2026 دی برائٹ فیوچر اے آئی سکلز سینٹر۔ تمام حقوق محفوظ ہیں۔</p>
        </div>
      </footer>
    </div>
  );
}
