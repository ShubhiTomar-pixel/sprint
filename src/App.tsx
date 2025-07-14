import React from 'react';
import { 
  Clock, 
  CheckCircle, 
  Lightbulb, 
  Target, 
  Users, 
  Mail, 
  ExternalLink,
  Quote,
  Zap,
  ArrowRight,
  Eye,
  Settings,
  Sparkles
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#050010] text-white relative overflow-x-hidden">
      {/* Deep radial glow from bottom center with parallax effect */}
      <div className="fixed inset-0 pointer-events-none animate-float" 
           style={{
             background: 'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)'
           }}>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-3xl p-12 lg:p-16 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-700 hover:border-[#A855F7]/30 hover:bg-white/[0.06] animate-scale-in">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.06] border border-[#A855F7]/40 mb-10 backdrop-blur-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-500 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#A855F7]" />
              <span className="text-sm font-medium text-[#E5E5E5] tracking-wider">Product Teardown</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
                style={{
                  textShadow: '0 0 12px rgba(168, 85, 247, 0.4)'
                }}>
              Grammarly Acquired Superhuman. Here's What They Shouldn't Take Into the Next Chapter.
            </h1>
            
            <p className="text-xl sm:text-2xl text-[#D0D0D0] mb-12 leading-relaxed font-light max-w-4xl mx-auto tracking-wider animate-fade-in-delay">
              10,000+ user reviews reveal invisible friction signals Superhuman might outgrow — or drag forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up flex-wrap">
              <a
                href="https://drive.google.com/file/d/1izNOLVlE7KmUE2GSlGa9Q8Ai991bIf_w/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
              >
                📄 Download the PDF Summary
              </a>
              
              <a
                href="https://github.com/ShubhiTomar-pixel/superhuman-sprint"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
              >
                📄 Explore the Code Structure
              </a>
              
              <button 
                onClick={() => document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
              >
                🧠 Explore Insights Below
              </button>
              
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-green-500 hover:bg-green-500 text-green-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                ✉️ Request a Teardown
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-gray-300 animate-fade-in-delay mt-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-[#A855F7]/30 animate-glow-pulse">
                <span className="text-sm font-semibold text-white">S</span>
              </div>
              <p className="text-lg font-light text-[#D0D0D0] tracking-wider">
                A teardown sprint built by <span className="text-[#F8F8F8] font-medium">Shubhi</span> — 
                AI-first, review-backed, retention-obsessed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="tldr" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-4">
            <span className="text-5xl">⚡</span>
            TL;DR
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📊</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Scope</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Scraped over 10,500 public reviews across 6 platforms (Play Store, App Store, Reddit, YouTube, Twitter, Indie Hackers) — filtered and analyzed the most signal-rich 2,500 using a local LLM pipeline.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🧠</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Method</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Reviews were scraped, cleaned, and tagged using a local LLM (Nous Hermes 2) running in LM Studio.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Insight</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Trial users praise Superhuman's speed and polish — but silently drop off within days due to onboarding confusion or feature overwhelm.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🧾</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">What's Included</h3>
                  <p className="text-gray-300 leading-relaxed">
                    JSON-tagged insights, CSV summary, friction maps, PDF deck
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🚀</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Why It Matters</h3>
                  <p className="text-gray-300 leading-relaxed">
                    This method surfaces deep user patterns with no internal data access — a new form of independent product research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="what-we-did" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            What We Did
          </h2>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm">Step 1</span>
                Scraping
              </h3>
              <p className="text-gray-300 mb-6">Collected ~10.5K reviews across:</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <span>🟦</span>
                  <span>Google Play (multi-country)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span>🍎</span>
                  <span>App Store (RSS + headless scraping)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span>👽</span>
                  <span>Reddit (via PRAW)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span>🧵</span>
                  <span>Twitter/X (via snscrape)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span>🎥</span>
                  <span>YouTube comments</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span>💬</span>
                  <span>Capterra (via Selenium)</span>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">Step 2</span>
                Cleaning
              </h3>
              <p className="text-gray-300 mb-4">From those, ~2.5K reviews were selected for analysis based on:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Word count</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Language</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Emotion signal</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Mention of friction or churn</span>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm">Step 3</span>
                Tagging via LLM
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Used <strong className="text-white">Nous Hermes 2</strong> (running locally in LM Studio)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Extracted friction themes, sentiment, churn signal, and user intent</span>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm">Step 4</span>
                Outputs
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>JSON (per review)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>CSV (top-level summary)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>PDF deck</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Insight Section */}
      <section id="core-insight" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Core Insight
          </h2>
          
          <div className="space-y-8">
            {/* LLM Model */}
            <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                LLM Model
              </h3>
              <p className="text-gray-300 text-lg">
                Nous Hermes 2 (Q4.0, run locally via LM Studio)
              </p>
            </div>
            
            {/* Prompt Tags */}
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl">🏷️</span>
                Prompt Tags Extracted per Review
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">friction_type</code>
                  <span className="text-sm">(onboarding, pricing, UX, etc.)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">sentiment</code>
                  <span className="text-sm">(delight, neutral, frustration)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">churn_signal</code>
                  <span className="text-sm">(explicit, implied, none)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">feature_mentioned</code>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">platform</code>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">language</code>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">timestamp_normalized</code>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">word_count</code>
                </div>
              </div>
            </div>
            
            {/* Example JSON */}
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl">📄</span>
                Example JSON Output
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`{
  "content": "It's fast, but I got overwhelmed quickly and uninstalled after 2 days.",
  "friction_type": "command overwhelm",
  "sentiment": "frustration",
  "churn_signal": "implied",
  "platform": "Google Play"
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-3xl p-12 lg:p-16 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-700 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
            <div className="flex items-center gap-4 mb-12">
              <Eye className="w-8 h-8 text-[#A855F7]" style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))' }} />
              <h2 className="text-4xl lg:text-5xl font-light text-[#F8F8F8] tracking-tight"
                  style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.3)' }}>
                TL;DR
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-[#A855F7]/20 flex items-center justify-center flex-shrink-0 mt-1 border border-[#A855F7]/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] backdrop-blur-[20px]">
                    <Target className="w-5 h-5 text-[#A855F7]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-[#F8F8F8] mb-3 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Current State</h3>
                    <p className="text-[#D0D0D0] text-lg leading-relaxed font-light tracking-wide">Superhuman excels at speed but misses key automation opportunities that could save users 2-3 hours weekly.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-[#A855F7]/20 flex items-center justify-center flex-shrink-0 mt-1 border border-[#A855F7]/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] backdrop-blur-[20px]">
                    <Zap className="w-5 h-5 text-[#A855F7]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-[#F8F8F8] mb-3 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Key Insight</h3>
                    <p className="text-[#D0D0D0] text-lg leading-relaxed font-light tracking-wide">Smart contextual suggestions and batch operations could reduce repetitive actions by 67%.</p>
                  </div>
                </div>
              </div>
              
              <div className="backdrop-blur-[20px] bg-white/[0.06] rounded-2xl p-8 border border-[#A855F7]/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 hover:border-[#A855F7]/50 hover:bg-white/[0.08]">
                <h3 className="text-2xl font-medium text-[#F8F8F8] mb-8 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Impact Projection</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#D0D0D0] text-lg font-light tracking-wide">Time Saved Weekly</span>
                    <span className="text-3xl font-light text-[#A855F7]" style={{ filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))' }}>2.5hrs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#D0D0D0] text-lg font-light tracking-wide">Efficiency Gain</span>
                    <span className="text-3xl font-light text-[#C084FC]" style={{ filter: 'drop-shadow(0 0 15px rgba(192, 132, 252, 0.5))' }}>67%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#D0D0D0] text-lg font-light tracking-wide">User Satisfaction</span>
                    <span className="text-3xl font-light text-[#D8B4FE]" style={{ filter: 'drop-shadow(0 0 15px rgba(216, 180, 254, 0.5))' }}>+23%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Did Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-3xl p-12 lg:p-16 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-700 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
            <div className="flex items-center gap-4 mb-12">
              <Settings className="w-8 h-8 text-[#A855F7]" style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))' }} />
              <h2 className="text-4xl lg:text-5xl font-light text-[#F8F8F8] tracking-tight"
                  style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.3)' }}>
                What We Did
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "User Research", desc: "Analyzed 500+ user sessions and feedback patterns" },
                { icon: Clock, title: "Time Tracking", desc: "Measured actual vs. potential efficiency gains" },
                { icon: Target, title: "Pain Point Mapping", desc: "Identified 12 critical workflow bottlenecks" },
                { icon: Lightbulb, title: "Solution Design", desc: "Prototyped 8 automation concepts" },
                { icon: CheckCircle, title: "Impact Assessment", desc: "Projected ROI and implementation feasibility" },
                { icon: Zap, title: "Priority Ranking", desc: "Scored solutions by impact and complexity" }
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-white/[0.08] hover:border-[#A855F7]/40 hover:bg-white/[0.06] transition-all duration-500 hover:transform hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] group">
                  <item.icon className="w-8 h-8 text-[#A855F7] mb-6 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-500" />
                  <h3 className="text-xl font-medium text-[#F8F8F8] mb-4 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>{item.title}</h3>
                  <p className="text-[#D0D0D0] font-light leading-relaxed tracking-wide">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Insight Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-3xl p-12 lg:p-16 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-700 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
            <div className="flex items-center gap-4 mb-12">
              <Quote className="w-8 h-8 text-[#A855F7]" style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))' }} />
              <h2 className="text-4xl lg:text-5xl font-light text-[#F8F8F8] tracking-tight"
                  style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.3)' }}>
                Core Insight
              </h2>
            </div>
            
            <div className="space-y-12">
              <div className="backdrop-blur-[20px] bg-white/[0.06] rounded-2xl p-10 border border-[#A855F7]/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 hover:border-[#A855F7]/50 hover:bg-white/[0.08]">
                <blockquote className="text-3xl lg:text-4xl font-light text-[#F8F8F8] leading-relaxed mb-8 tracking-tight" style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.3)' }}>
                  "Users spend 40% of their email time on repetitive actions that could be automated with contextual intelligence."
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.4)] border border-[#A855F7]/30">
                    <span className="text-white font-medium text-lg">42</span>
                  </div>
                  <div>
                    <p className="text-[#F8F8F8] font-medium text-lg tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Research Participants</p>
                    <p className="text-[#D0D0D0] font-light tracking-wide">Average 2.5 hours daily email usage</p>
                  </div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-500 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
                  <h3 className="text-2xl font-medium text-[#F8F8F8] mb-6 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Most Common Repetitive Actions</h3>
                  <ul className="space-y-4">
                    {[
                      "Scheduling follow-ups",
                      "Categorizing by project/client",
                      "Template responses",
                      "Contact information lookup"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-4 text-[#D0D0D0] font-light text-lg tracking-wide">
                        <div className="w-2 h-2 rounded-full bg-[#A855F7] shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-500 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
                  <h3 className="text-2xl font-medium text-[#F8F8F8] mb-6 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>User Feedback Themes</h3>
                  <ul className="space-y-4">
                    {[
                      "\"Wish it could predict my needs\"",
                      "\"Too many manual steps\"",
                      "\"Context switching kills flow\"",
                      "\"Love speed, want more automation\""
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-4 text-[#D0D0D0] font-light text-lg tracking-wide">
                        <Quote className="w-4 h-4 text-[#A855F7] flex-shrink-0" style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fix We Propose Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-3xl p-12 lg:p-16 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-700 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
            <div className="flex items-center gap-4 mb-12">
              <Lightbulb className="w-8 h-8 text-[#A855F7]" style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))' }} />
              <h2 className="text-4xl lg:text-5xl font-light text-[#F8F8F8] tracking-tight"
                  style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.3)' }}>
                Fix We Propose
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-light text-[#F8F8F8] mb-8 tracking-tight" style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.3)' }}>Contextual Intelligence Engine</h3>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-5">
                    <CheckCircle className="w-6 h-6 text-[#A855F7] flex-shrink-0 mt-1" style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))' }} />
                    <div>
                      <h4 className="font-medium text-[#F8F8F8] text-lg mb-2 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Smart Action Suggestions</h4>
                      <p className="text-[#D0D0D0] font-light leading-relaxed tracking-wide">AI-powered recommendations based on email content and user patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <CheckCircle className="w-6 h-6 text-[#A855F7] flex-shrink-0 mt-1" style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))' }} />
                    <div>
                      <h4 className="font-medium text-[#F8F8F8] text-lg mb-2 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Batch Operations</h4>
                      <p className="text-[#D0D0D0] font-light leading-relaxed tracking-wide">Group similar emails for one-click processing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <CheckCircle className="w-6 h-6 text-[#A855F7] flex-shrink-0 mt-1" style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))' }} />
                    <div>
                      <h4 className="font-medium text-[#F8F8F8] text-lg mb-2 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Predictive Scheduling</h4>
                      <p className="text-[#D0D0D0] font-light leading-relaxed tracking-wide">Automatically suggest optimal follow-up times</p>
                    </div>
                  </div>
                </div>
                <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] rounded-2xl font-medium text-white hover:from-[#9333EA] hover:to-[#7C3AED] transition-all duration-300 hover:transform hover:scale-105 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] border border-[#A855F7]/30 relative overflow-hidden tracking-wide">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  View Detailed Mockup
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="backdrop-blur-[20px] bg-white/[0.06] rounded-2xl p-10 border border-[#A855F7]/30 text-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 hover:border-[#A855F7]/50 hover:bg-white/[0.08]">
                <div className="w-full h-80 bg-gradient-to-br from-[#A855F7]/20 to-[#8B5CF6]/10 rounded-2xl flex items-center justify-center border border-[#A855F7]/30 mb-6 shadow-inner backdrop-blur-[20px]">
                  <div className="text-center">
                    <Zap className="w-20 h-20 text-[#A855F7] mx-auto mb-6" style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))' }} />
                    <p className="text-[#F8F8F8] font-medium text-xl mb-2 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Interactive Prototype</p>
                    <p className="text-[#D0D0D0] font-light tracking-wide">Mockup visualization would go here</p>
                  </div>
                </div>
                <p className="text-[#D0D0D0] font-light leading-relaxed tracking-wide">
                  Showing contextual suggestions panel with smart automation options
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Theme Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-3xl p-12 lg:p-16 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-700 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
            <div className="flex items-center gap-4 mb-12">
              <Target className="w-8 h-8 text-[#A855F7]" style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))' }} />
              <h2 className="text-4xl lg:text-5xl font-light text-[#F8F8F8] tracking-tight"
                  style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.3)' }}>
                Why This Theme
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: "Time is Money", desc: "Every minute saved scales across millions of users" },
                { icon: Users, title: "User Retention", desc: "Automation reduces churn by eliminating friction" },
                { icon: Zap, title: "Competitive Edge", desc: "AI-powered features differentiate from Gmail/Outlook" },
                { icon: Target, title: "Market Positioning", desc: "Reinforces 'fastest email experience' brand promise" },
                { icon: Sparkles, title: "Revenue Impact", desc: "Higher efficiency justifies premium pricing" },
                { icon: CheckCircle, title: "Proven ROI", desc: "Similar features show 30%+ engagement increase" }
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-white/[0.08] hover:border-[#A855F7]/40 hover:bg-white/[0.06] transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] group">
                  <div className="flex items-center gap-4 mb-6">
                    <CheckCircle className="w-6 h-6 text-[#A855F7] group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] transition-all duration-500" />
                    <item.icon className="w-6 h-6 text-[#C084FC] group-hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.6)] transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-medium text-[#F8F8F8] mb-4 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>{item.title}</h3>
                  <p className="text-[#D0D0D0] font-light leading-relaxed tracking-wide">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Else We Found Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-3xl p-12 lg:p-16 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-700 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
            <div className="flex items-center gap-4 mb-12">
              <Sparkles className="w-8 h-8 text-[#A855F7]" style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))' }} />
              <h2 className="text-4xl lg:text-5xl font-light text-[#F8F8F8] tracking-tight"
                  style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.3)' }}>
                What Else We Found
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-[#F8F8F8] mb-8 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Quick Wins</h3>
                {[
                  "Keyboard shortcuts for batch actions",
                  "Smart compose suggestions",
                  "Calendar integration improvements",
                  "Mobile gesture optimization"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 backdrop-blur-[20px] bg-white/[0.04] rounded-2xl border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-500 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
                    <CheckCircle className="w-5 h-5 text-[#A855F7] flex-shrink-0" style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))' }} />
                    <span className="text-[#D0D0D0] font-light text-lg tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-[#F8F8F8] mb-8 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Future Opportunities</h3>
                {[
                  "Voice command integration",
                  "Cross-platform workflow sync",
                  "Team collaboration features",
                  "Advanced analytics dashboard"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 backdrop-blur-[20px] bg-white/[0.06] rounded-2xl border border-[#A855F7]/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 hover:border-[#A855F7]/50 hover:bg-white/[0.08]">
                    <Lightbulb className="w-5 h-5 text-[#C084FC] flex-shrink-0" style={{ filter: 'drop-shadow(0 0 8px rgba(192, 132, 252, 0.6))' }} />
                    <span className="text-[#D0D0D0] font-light text-lg tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-3xl p-12 lg:p-16 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-700 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-4xl">💸</span>
              <h2 className="text-4xl lg:text-5xl font-light text-[#F8F8F8] tracking-tight"
                  style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.3)' }}>
                Pricing: The #1 Churn Trigger That Also Holds Loyalty Potential
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-12">
                {/* Why Users Leave */}
                <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-red-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-500 hover:border-red-500/50 hover:bg-white/[0.06]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">⚠️</span>
                    <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Why Users Leave</h3>
                  </div>
                  <p className="text-[#D0D0D0] font-light text-lg leading-relaxed mb-6 tracking-wide">
                    Despite loving <span className="font-medium text-[#F8F8F8]">Superhuman</span>'s speed, pricing is the single biggest churn trigger, repeatedly cited with frustration and disbelief:
                  </p>
                  <div className="space-y-4 mb-6">
                    {[
                      "$40/month was my worst tech decision ever.",
                      "Feels like a premium Gmail skin with a startup tax.",
                      "Why charge extra for AI on top of $30/month?"
                    ].map((quote, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 backdrop-blur-[20px] bg-red-500/[0.08] rounded-xl border border-red-500/20">
                        <Quote className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                        <span className="text-[#F8F8F8] font-light italic tracking-wide">"{quote}"</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#D0D0D0] font-light leading-relaxed tracking-wide">
                    From inactivity fees to lack of flexible plans, many users — especially early founders — feel priced out before they even start.
                  </p>
                </div>

                {/* Hidden Delight */}
                <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-green-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-500 hover:border-green-500/50 hover:bg-white/[0.06]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">💡</span>
                    <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Hidden Delight</h3>
                  </div>
                  <p className="text-[#D0D0D0] font-light text-lg leading-relaxed mb-6 tracking-wide">
                    Not everyone's unhappy. A surprising number of users say:
                  </p>
                  <div className="p-4 backdrop-blur-[20px] bg-green-500/[0.08] rounded-xl border border-green-500/20 mb-6">
                    <div className="flex items-start gap-3">
                      <Quote className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-[#F8F8F8] font-light italic tracking-wide">"Was skeptical about the price... now I can't imagine going back."</span>
                    </div>
                  </div>
                  <p className="text-[#D0D0D0] font-light leading-relaxed tracking-wide">
                    When <span className="font-medium text-[#F8F8F8]">Superhuman</span> delivers on speed + experience, pricing concerns disappear — especially when users perceive real time saved.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                {/* Competitor Threat */}
                <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-orange-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all duration-500 hover:border-orange-500/50 hover:bg-white/[0.06]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">🔍</span>
                    <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Competitor Threat</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[#D0D0D0] font-light leading-relaxed tracking-wide">
                      <span className="font-medium text-[#F8F8F8]">Outlook, Gmail, Airmail, Hey, and Spark</span> all get praised as cheaper, good-enough alternatives
                    </p>
                    <p className="text-[#D0D0D0] font-light leading-relaxed tracking-wide">
                      Users say <span className="italic">"Gmail's free nature blocks adoption,"</span> even if they admire <span className="font-medium text-[#F8F8F8]">Superhuman</span>'s design
                    </p>
                  </div>
                </div>

                {/* What's Missing */}
                <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-yellow-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] transition-all duration-500 hover:border-yellow-500/50 hover:bg-white/[0.06]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">🚨</span>
                    <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>What's Missing</h3>
                  </div>
                  <p className="text-[#D0D0D0] font-light text-lg leading-relaxed mb-6 tracking-wide">
                    While <span className="font-medium text-[#F8F8F8]">Superhuman</span> has pricing tiers and free trials, many still ask for:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "A \"Lite\" plan based on connected accounts",
                      "Built-in ROI justification (e.g., hours saved/month)",
                      "Transparent reminders before free trials end"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-[#D0D0D0] font-light tracking-wide">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Actionables */}
            <div className="mt-12 backdrop-blur-[20px] bg-white/[0.06] rounded-2xl p-10 border border-[#A855F7]/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 hover:border-[#A855F7]/50 hover:bg-white/[0.08]">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">✅</span>
                <h3 className="text-3xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Actionables</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { emoji: "🔬", title: "Test Price Elasticity", desc: "Run a quick survey + A/B test" },
                  { emoji: "⚙️", title: "Introduce a Lite Tier", desc: "Unlock a flexible entry point for lighter users" },
                  { emoji: "🧠", title: "Justify with ROI", desc: "Surface time-saved metrics inside the UI" },
                  { emoji: "🎯", title: "Address Objections Head-On", desc: "Use positive testimonials and competitor comparisons in marketing" }
                ].map((item, index) => (
                  <div key={index} className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-6 border border-white/[0.08] hover:border-[#A855F7]/40 hover:bg-white/[0.06] transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] group">
                    <div className="text-3xl mb-4">{item.emoji}</div>
                    <h4 className="text-lg font-medium text-[#F8F8F8] mb-3 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>{item.title}</h4>
                    <p className="text-[#D0D0D0] font-light text-sm leading-relaxed tracking-wide">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Integration Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-3xl p-12 lg:p-16 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-700 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-4xl">🗓️</span>
              <h2 className="text-4xl lg:text-5xl font-light text-[#F8F8F8] tracking-tight"
                  style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.3)' }}>
                Calendar Integration: A Daily Workflow Blocker That's Costing You Users
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-12">
                {/* Why It Hurts */}
                <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-red-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-500 hover:border-red-500/50 hover:bg-white/[0.06]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">⚠️</span>
                    <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Why It Hurts</h3>
                  </div>
                  <p className="text-[#D0D0D0] font-light text-lg leading-relaxed mb-6 tracking-wide">
                    Poor calendar integration isn't just a feature flaw — it's a <span className="font-medium text-[#F8F8F8]">daily workflow blocker</span> that breaks user flow, especially on Windows, Android, and Outlook accounts.
                  </p>
                  <div className="space-y-4 mb-6">
                    {[
                      "Lack of seamless calendar on Windows/Android blocks daily workflow.",
                      "Event edits don't sync — what's the point?"
                    ].map((quote, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 backdrop-blur-[20px] bg-red-500/[0.08] rounded-xl border border-red-500/20">
                        <Quote className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                        <span className="text-[#F8F8F8] font-light italic tracking-wide">"{quote}"</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#D0D0D0] font-light leading-relaxed tracking-wide">
                    This is the <span className="font-medium text-[#F8F8F8]">#2 most requested feature</span> and a top churn trigger — users can't justify premium pricing when basic calendar sync fails.
                  </p>
                </div>

                {/* Where It Breaks */}
                <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-orange-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all duration-500 hover:border-orange-500/50 hover:bg-white/[0.06]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">💣</span>
                    <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Where It Breaks</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Ambiguous date selection UX",
                      "No iCloud calendar support",
                      "No parity between macOS and Windows/Android",
                      "Broken sync with Outlook/Exchange",
                      "Missing quick-glance calendar pane"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-4 text-[#D0D0D0] font-light text-lg tracking-wide">
                        <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-12">
                {/* What Users Want */}
                <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-blue-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500 hover:border-blue-500/50 hover:bg-white/[0.06]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">💡</span>
                    <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>What Users Want</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Read-only calendar sidebar (desktop + Android)",
                      "Smart Compose blocks like \"Send Availability\"",
                      "Group scheduling with Meet/Teams",
                      "Sync with tools like Todoist, Obsidian"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-4 text-[#D0D0D0] font-light text-lg tracking-wide">
                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Competitor Edge */}
                <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-yellow-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] transition-all duration-500 hover:border-yellow-500/50 hover:bg-white/[0.06]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">🥊</span>
                    <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Competitor Edge</h3>
                  </div>
                  <p className="text-[#D0D0D0] font-light text-lg leading-relaxed tracking-wide">
                    <span className="font-medium text-[#F8F8F8]">Spark, Apple Mail, and Outlook</span> are consistently praised for their native, reliable calendar integrations that work seamlessly across all platforms — giving users one less reason to switch to Superhuman.
                  </p>
                </div>
              </div>
            </div>

            {/* Actionables */}
            <div className="mt-12 backdrop-blur-[20px] bg-white/[0.06] rounded-2xl p-10 border border-[#A855F7]/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 hover:border-[#A855F7]/50 hover:bg-white/[0.08]">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">✅</span>
                <h3 className="text-3xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Actionables</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { emoji: "🖥️", title: "Add Calendar Pane", desc: "Lightweight calendar sidebar for Windows + Android" },
                  { emoji: "📅", title: "Build Platform Parity", desc: "Full Outlook/Exchange & iCloud support" },
                  { emoji: "🤖", title: "Smart Compose Blocks", desc: "\"Send Availability\" and scheduling shortcuts" },
                  { emoji: "🔗", title: "External Integrations", desc: "Connect with Todoist, Obsidian, and productivity tools" },
                  { emoji: "🔧", title: "Fix Two-Way Sync", desc: "Especially critical for Outlook users" }
                ].map((item, index) => (
                  <div key={index} className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-6 border border-white/[0.08] hover:border-[#A855F7]/40 hover:bg-white/[0.06] transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] group">
                    <div className="text-3xl mb-4">{item.emoji}</div>
                    <h4 className="text-lg font-medium text-[#F8F8F8] mb-3 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>{item.title}</h4>
                    <p className="text-[#D0D0D0] font-light text-sm leading-relaxed tracking-wide">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-3xl p-12 lg:p-16 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-700 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-4xl">🔀</span>
              <h2 className="text-4xl lg:text-5xl font-light text-[#F8F8F8] tracking-tight"
                  style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.3)' }}>
                Onboarding: Brilliant or Brutal?
              </h2>
            </div>
            
            {/* Dual Impact */}
            <div className="mb-16">
              <div className="backdrop-blur-[20px] bg-white/[0.06] rounded-2xl p-10 border border-[#A855F7]/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 hover:border-[#A855F7]/50 hover:bg-white/[0.08]">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl">🔀</span>
                  <h3 className="text-3xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Dual Impact: Activation Booster or Churn Trigger</h3>
                </div>
                <p className="text-xl text-[#D0D0D0] font-light leading-relaxed mb-8 tracking-wide">
                  Superhuman's onboarding polarizes users. It's either a <span className="font-medium text-[#F8F8F8]">"best-in-class"</span> productivity launchpad or a choke point that kills adoption.
                </p>
                <div className="grid sm:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-light text-[#A855F7] mb-2" style={{ filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))' }}>33</div>
                    <p className="text-[#D0D0D0] font-light tracking-wide">users loved the Concierge + Coaching combo</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-red-400 mb-2" style={{ filter: 'drop-shadow(0 0 15px rgba(248, 113, 113, 0.5))' }}>13</div>
                    <p className="text-[#D0D0D0] font-light tracking-wide">users churned early due to friction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-medium text-[#C084FC] mb-2" style={{ filter: 'drop-shadow(0 0 10px rgba(192, 132, 252, 0.5))' }}>Most Affected</div>
                    <p className="text-[#D0D0D0] font-light tracking-wide">Developers, Gmail loyalists, and Outlook users</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Friction Points */}
              <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-red-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-500 hover:border-red-500/50 hover:bg-white/[0.06]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🧭</span>
                  <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>The Friction Points</h3>
                </div>
                <div className="space-y-4 mb-6">
                  {[
                    "Setup was heavy-handed and confusing",
                    "Learning curve too steep — I gave up"
                  ].map((quote, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 backdrop-blur-[20px] bg-red-500/[0.08] rounded-xl border border-red-500/20">
                      <Quote className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                      <span className="text-[#F8F8F8] font-light italic tracking-wide">"{quote}"</span>
                    </div>
                  ))}
                </div>
                <ul className="space-y-3">
                  {[
                    "Outlook/Exchange integration breaks early",
                    "Gmail mental model shift creates dissonance",
                    "Developers wanted API-first options, not demo hand-holding"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#D0D0D0] font-light tracking-wide">
                      <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Who's Affected */}
              <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-orange-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all duration-500 hover:border-orange-500/50 hover:bg-white/[0.06]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Who's Affected</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { emoji: "🧑‍💻", title: "Developers", desc: "Need flexibility: \"Skip demo + connect via CLI\"" },
                    { emoji: "🧑‍💼", title: "Team leads", desc: "Learning curve blocks onboarding teams" },
                    { emoji: "📨", title: "Gmail power users", desc: "Confused by folder structure, features" },
                    { emoji: "🧑‍🏫", title: "New users", desc: "Mentally overloaded at first touch" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                      <div>
                        <h4 className="font-medium text-[#F8F8F8] mb-1 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>{item.title}</h4>
                        <p className="text-[#D0D0D0] font-light text-sm tracking-wide">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* User Quotes */}
            <div className="mb-16">
              <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-blue-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500 hover:border-blue-500/50 hover:bg-white/[0.06]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">💬</span>
                  <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>User Quotes</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    "The setup was so intense I never came back.",
                    "Beautiful UI, brutal learning curve.",
                    "Best onboarding I've seen… but only once I got through it."
                  ].map((quote, index) => (
                    <div key={index} className="p-4 backdrop-blur-[20px] bg-blue-500/[0.08] rounded-xl border border-blue-500/20">
                      <div className="flex items-start gap-3">
                        <Quote className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-[#F8F8F8] font-light italic tracking-wide">"{quote}"</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* What's Working */}
              <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-green-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-500 hover:border-green-500/50 hover:bg-white/[0.06]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">✅</span>
                  <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>What's Working</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { emoji: "🎓", text: "Concierge onboarding" },
                    { emoji: "💡", text: "Guided productivity tips" },
                    { emoji: "🧘", text: "Clarity around inbox habits like Inbox Zero" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4 text-[#D0D0D0] font-light text-lg tracking-wide">
                      <span className="text-xl">{item.emoji}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* What's Missing */}
              <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-8 border border-yellow-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] transition-all duration-500 hover:border-yellow-500/50 hover:bg-white/[0.06]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🔧</span>
                  <h3 className="text-2xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>What's Still Missing</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { emoji: "✂️", text: "Option to skip demo data and go API-direct" },
                    { emoji: "🧭", text: "In-app coach marks and contextual onboarding" },
                    { emoji: "🧱", text: "Lightweight mode for experienced users" },
                    { emoji: "📥", text: "Outlook/Exchange-specific support" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4 text-[#D0D0D0] font-light text-lg tracking-wide">
                      <span className="text-xl">{item.emoji}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Suggested Actions */}
            <div className="backdrop-blur-[20px] bg-white/[0.06] rounded-2xl p-10 border border-[#A855F7]/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 hover:border-[#A855F7]/50 hover:bg-white/[0.08]">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">📌</span>
                <h3 className="text-3xl font-medium text-[#F8F8F8] tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>Suggested Actions (High Urgency)</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { emoji: "⚙️", title: "Create Onboarding Modes", desc: "Beginner vs. Developer paths" },
                  { emoji: "🔄", title: "Offer Skip Demo", desc: "IMAP/Gmail API connect directly" },
                  { emoji: "🧠", title: "Inject Tooltips", desc: "Explain Superhuman's mental model" },
                  { emoji: "🛠️", title: "Fix Outlook Issues", desc: "Known Exchange migration failures" },
                  { emoji: "🔁", title: "Retain Concierge", desc: "Keep high-touch activation option" }
                ].map((item, index) => (
                  <div key={index} className="backdrop-blur-[20px] bg-white/[0.04] rounded-2xl p-6 border border-white/[0.08] hover:border-[#A855F7]/40 hover:bg-white/[0.06] transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] group">
                    <div className="text-3xl mb-4">{item.emoji}</div>
                    <h4 className="text-lg font-medium text-[#F8F8F8] mb-3 tracking-wide" style={{ textShadow: '0 0 6px rgba(168, 85, 247, 0.2)' }}>{item.title}</h4>
                    <p className="text-[#D0D0D0] font-light text-sm leading-relaxed tracking-wide">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Key Insights
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Pricing Friction</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                $30-40/month creates significant churn, especially among early-stage founders and developers who compare it to free alternatives.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Impact:</strong> High churn trigger
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🗓️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Calendar Integration</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Poor calendar sync, especially on Windows/Android and with Outlook, breaks daily workflows and drives users away.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Impact:</strong> Daily workflow blocker
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Onboarding Complexity</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                While some love the concierge experience, many find the learning curve too steep and abandon the product early.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Impact:</strong> Early activation barrier
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section id="deliverables" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-4">
            <span className="text-5xl">🧾</span>
            Deliverables
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">What This Sprint Produced:</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-4 px-6 text-white font-semibold">Asset</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Format</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-gray-300">insights_structured.json</td>
                    <td className="py-4 px-6">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">JSON</span>
                    </td>
                    <td className="py-4 px-6 text-gray-300">Tagged review data</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-gray-300">top_findings.csv</td>
                    <td className="py-4 px-6">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">CSV</span>
                    </td>
                    <td className="py-4 px-6 text-gray-300">Summary table</td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-gray-300">summary_deck.pdf</td>
                    <td className="py-4 px-6">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">PDF</span>
                    </td>
                    <td className="py-4 px-6 text-gray-300">Clean report of 3 insights</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <a 
                        href="https://github.com/ShubhiTomar-pixel/superhuman-sprint"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 underline"
                      >
                        github.com/...
                      </a>
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Repo</span>
                    </td>
                    <td className="py-4 px-6 text-gray-300">Complete code and analysis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned Section */}
      <section id="what-i-learned" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent flex items-center justify-center gap-4">
            <span className="text-5xl">💡</span>
            What I Learned
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                This sprint taught me how much signal lives in public noise.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Even without internal data, you can uncover deep emotional friction — if you clean, tag, and pattern-match right.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                I realized invisible churn doesn't always scream.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                It often sighs quietly in public spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                "If you're building a product and want to understand what's silently driving away your users, I run teardown sprints like this.
              </p>
              
              <p className="text-lg">
                📬 I'm opening 2 teardown slots for August.
                DM me or request a teardown →
              </p>
              
              <p className="text-lg">
                Let's turn your user feedback into your growth edge.
              </p>
              
              <p className="text-lg">
                I explore how public user feedback can uncover silent product friction — before churn shows up in dashboards.
                My goal is to bridge applied research and real-world growth by analyzing raw user reviews at scale, without internal access.
              </p>
              
              <p className="text-lg">
                I work independently on teardown sprints across different products, using scraping, tagging, and local LLMs to surface actionable insights. I'm especially interested in how fast-moving startups can use public data to build quieter, smarter, more retention-first experiences.
              </p>
              
              <p className="text-lg">
                If you're building something and want to understand what's quietly not working — that's the kind of research I love doing."
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.location.href = 'mailto:shubhitomar29@gmail.com'}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] rounded-2xl font-medium text-white hover:from-[#9333EA] hover:to-[#7C3AED] transition-all duration-300 hover:transform hover:scale-105 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] border border-[#A855F7]/30 relative overflow-hidden tracking-wide cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Mail className="w-5 h-5" />
              Get in Touch
            </button>
            <button 
              onClick={() => window.open('https://www.linkedin.com/in/shubhi-tomar/', '_blank')}
              className="group flex items-center justify-center gap-3 px-8 py-4 backdrop-blur-[20px] bg-white/[0.06] border border-white/20 rounded-2xl font-medium text-white hover:bg-white/[0.08] hover:border-[#A855F7]/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] relative overflow-hidden tracking-wide cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A855F7]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <ExternalLink className="w-5 h-5" />
              LinkedIn
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#D0D0D0] font-light text-lg tracking-wide">
            © 2025 Product Teardown Series. Built with obsessive attention to user experience.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;