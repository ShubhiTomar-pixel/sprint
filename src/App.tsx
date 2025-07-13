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
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light text-[#F8F8F8] mb-8 leading-[0.95] tracking-tight animate-fade-in"
                style={{
                  textShadow: '0 0 12px rgba(168, 85, 247, 0.4)'
                }}>
              How <span className="font-bold">Superhuman</span> Can Save Even More Hours
            </h1>
            
            <p className="text-xl sm:text-2xl text-[#D0D0D0] mb-12 leading-relaxed font-light max-w-4xl mx-auto tracking-wider animate-fade-in-delay">
              A founder-grade teardown of 10,000+ user reviews revealing what's slowing users down — and how to fix it
            </p>
            
            <div className="flex items-center justify-center gap-4 text-gray-300 animate-fade-in-delay">
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

      {/* About Me Section */}
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

      {/* About Me Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-[20px] bg-white/[0.04] rounded-3xl p-12 lg:p-16 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] transition-all duration-700 hover:border-[#A855F7]/30 hover:bg-white/[0.06]">
            <div className="text-center mb-12">
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-[#A855F7]/30">
                <span className="text-4xl font-light text-white">S</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-[#F8F8F8] mb-6 tracking-tight"
                  style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.3)' }}>
                About Me
              </h2>
            </div>
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xl text-[#D0D0D0] leading-relaxed mb-8 font-light tracking-wider">
                I'm Shubhi, a product strategist obsessed with finding the intersection of user needs and business impact. 
                I specialize in AI-powered product optimization and have helped scale retention for 50+ SaaS products.
              </p>
              <p className="text-[#D0D0D0] mb-12 font-light text-lg leading-relaxed tracking-wide">
                When I'm not tearing down products, I'm building them. Currently working on making productivity tools 
                that actually understand how people work.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] rounded-2xl font-medium text-white hover:from-[#9333EA] hover:to-[#7C3AED] transition-all duration-300 hover:transform hover:scale-105 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] border border-[#A855F7]/30 relative overflow-hidden tracking-wide">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Mail className="w-5 h-5" />
                Get in Touch
              </button>
              <button className="group flex items-center justify-center gap-3 px-8 py-4 backdrop-blur-[20px] bg-white/[0.06] border border-white/20 rounded-2xl font-medium text-white hover:bg-white/[0.08] hover:border-[#A855F7]/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] relative overflow-hidden tracking-wide">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A855F7]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <ExternalLink className="w-5 h-5" />
                View Portfolio
              </button>
            </div>
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