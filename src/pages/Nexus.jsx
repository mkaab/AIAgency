import { useForm } from '@formcarry/react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function Nexus() {
    const { state, submit } = useForm({ id: 'ATbrs3Zki2t' })

    return (
        <div className="pt-6 pointer-events-none">
            <div className="pointer-events-auto">
                {/* Hero Section */}
                <section className="relative px-6 mb-20 lg:mb-32">
                    <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center pt-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-bold text-brand-charcoal bg-white rounded-full border border-black/10 shadow-sm">
                                <span className="text-[#19325a]">♾️</span> Official Meta & Shopify Partner
                            </div>
                            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-brand-charcoal mb-6 leading-[1.05] tracking-tight">
                                Unlock <br />
                                <span className="text-[#19325a]">
                                    Revenue
                                </span>
                                <br />
                                From Every Message
                            </h1>
                            <p className="text-lg text-brand-charcoal/70 mb-8 max-w-lg leading-relaxed">
                                Nexus AI plugs directly into Shopify and WhatsApp. Powered by a multi-agent orchestration architecture, it resolves tickets, checks inventory, and closes sales completely autonomously.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#demo" className="px-8 py-4 bg-[#19325a] text-white text-center rounded-full font-bold hover:bg-[#0c1a2f] transition-all shadow-[0_8px_30px_rgba(25,50,90,0.3)] hover:shadow-[0_12px_40px_rgba(25,50,90,0.4)]">
                                    Get Started
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative flex justify-center"
                        >
                            {/* Live Chat Simulation - Phone Frame */}
                            <div className="bg-gray-100 p-2 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] mx-auto w-full max-w-[320px]">
                                <div className="bg-white rounded-[2.5rem] overflow-hidden relative h-[600px] flex flex-col">
                                    {/* Status Bar area */}
                                    <div className="bg-[#075E54] px-6 pt-4 pb-2 flex items-center justify-between text-white/90 text-xs font-medium">
                                        <span>9:41</span>
                                        <div className="flex gap-1.5">
                                            <span>5G</span>
                                            <span>100%</span>
                                        </div>
                                    </div>

                                    {/* Header */}
                                    <div className="bg-[#075E54] px-4 pb-4 flex items-center gap-3 text-white shadow-sm shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">TC</div>
                                        <div>
                                            <div className="font-medium text-sm">Nexus AI</div>
                                            <div className="text-[10px] opacity-80 uppercase tracking-wide">Official Business Account</div>
                                        </div>
                                    </div>

                                    {/* Chat Area */}
                                    <div className="bg-[#E5DDD5] p-4 flex-1 overflow-y-auto flex flex-col gap-4 text-sm bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
                                        <div className="self-end bg-[#D9FDD3] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-gray-800">
                                            <p>Salam! Do you have the SonicBass Headphones in black?</p>
                                            <div className="text-[10px] text-gray-500 text-right mt-1">10:42 AM</div>
                                        </div>
                                        <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-gray-800">
                                            <p>Walaikum Assalam! Yes, SonicBass in Matte Black is in stock. 🎧</p>
                                            <ul className="mt-2 text-xs space-y-1 text-gray-600 border-l-2 border-green-500 pl-2">
                                                <li>• Price: Rs. 4,500</li>
                                                <li>• 1 Year Warranty</li>
                                            </ul>
                                            <p className="mt-2">Should I book one for you?</p>
                                            <div className="text-[10px] text-gray-500 text-right mt-1">10:42 AM</div>
                                        </div>
                                        <div className="self-end bg-[#D9FDD3] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-gray-800">
                                            <p>Yes please. COD to Lahore.</p>
                                            <div className="text-[10px] text-gray-500 text-right mt-1">10:43 AM</div>
                                        </div>
                                        <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-gray-800">
                                            <p>Done! Order #NEX882 confirmed. It will arrive in 2 days. 🚀</p>
                                            <div className="text-[10px] text-gray-500 text-right mt-1">10:43 AM</div>
                                        </div>
                                    </div>

                                    {/* Input Area Placeholder */}
                                    <div className="bg-[#f0f2f5] p-2 flex items-center gap-2 shrink-0">
                                        <div className="w-8 h-8 rounded-full bg-white text-gray-400 flex items-center justify-center text-xl">+</div>
                                        <div className="flex-1 h-9 bg-white rounded-full px-4 text-sm text-gray-400 flex items-center">Type a message</div>
                                        <div className="w-8 h-8 rounded-full bg-[#19325a] text-white flex items-center justify-center text-sm">➤</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* The Problem Section */}
                <section className="px-6 py-20 mb-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.02] to-transparent" />
                    <div className="mx-auto max-w-4xl text-center relative z-10">
                        <h2 className="font-display text-4xl font-extrabold text-brand-charcoal mb-6">Losing customers to slow replies?</h2>
                        <div className="w-24 h-1 bg-red-500 mx-auto mb-8 rounded-full" />
                        <p className="text-xl text-brand-charcoal/70 leading-relaxed">
                            In e-commerce, every minute a customer waits for a response is a lost sale. Human agents can't be online 24/7, and traditional decision-tree chatbots frustrate users with dead-ends.
                            Nexus bridges the gap by providing instant, autonomous intelligence that actually solves problems and closes sales in real-time.
                        </p>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="px-6 py-20 relative">
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading title="Enterprise-Grade AI Architecture" />

                        <div className="grid md:grid-cols-3 gap-8 mt-16">
                            {[
                                { title: "Multi-Agent Orchestration", icon: "🧠", desc: "Powered by Google ADK. A dynamic Coordinator agent seamlessly routes traffic between specialised Sales and Support sub-agents." },
                                { title: "Semantic RAG Inventory", icon: "🔍", desc: "Instantly retrieves stock, prices, and product variants using ChromaDB semantic search over your entire catalog." },
                                { title: "Native Shopify App Blocks", icon: "🛍️", desc: "Zero-code installation. Deploys directly into your merchant theme via Shopify Theme Extension blocks with full Billing API support." },
                                { title: "Direct WhatsApp API", icon: "✅", desc: "Secure HMAC webhook verification and deduplication ensures flawless message delivery on the official Meta business API." },
                                { title: "Automated Ticket Creation", icon: "🎫", desc: "The Support agent intelligently gathers required data before escalating to humans, saving your reps thousands of hours." },
                                { title: "Granular Rate Limiting", icon: "🛡️", desc: "Built-in token enforcement and monthly message limits configurable via a multi-tenant SuperAdmin dashboard." }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-black/5 hover:border-black/10 hover:shadow-2xl transition-all flex flex-col items-center text-center shadow-xl shadow-black/[0.04]"
                                >
                                    <div className="text-4xl mb-6">{feature.icon}</div>
                                    <h3 className="font-display text-xl font-bold mb-3 text-brand-charcoal">{feature.title}</h3>
                                    <p className="text-brand-charcoal/70 leading-relaxed text-sm">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Demo Form Section */}
                <section id="demo" className="px-6 py-32 relative">
                    <div className="mx-auto max-w-3xl">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-extrabold text-brand-charcoal mb-4">Integrate Nexus Today</h2>
                            <p className="text-brand-charcoal/70">Book a free demo to discover how our multi-agent architecture can automate your customer support and drive revenue.</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/[0.04] border border-black/5 p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#19325a]" />

                            <form onSubmit={submit} className="grid gap-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-brand-charcoal/90 mb-2 uppercase tracking-wide">First Name</label>
                                        <input required name="first_name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#19325a]/20 text-brand-charcoal focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/50 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-brand-charcoal/90 mb-2 uppercase tracking-wide">Last Name</label>
                                        <input required name="last_name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#19325a]/20 text-brand-charcoal focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/50 outline-none transition-all" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-brand-charcoal/90 mb-2 uppercase tracking-wide">Work Email</label>
                                    <input required type="email" name="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#19325a]/20 text-brand-charcoal focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/50 outline-none transition-all" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-brand-charcoal/90 mb-2 uppercase tracking-wide">Company Name</label>
                                    <input required name="company" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#19325a]/20 text-brand-charcoal focus:ring-2 focus:ring-[#19325a]/20 focus:border-[#19325a]/50 outline-none transition-all" />
                                </div>

                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full py-4 bg-[#19325a] text-white rounded-xl font-bold text-lg hover:bg-black transition-colors shadow-md disabled:opacity-70 mt-4"
                                >
                                    {state.submitting ? 'Sending Request...' : 'Book Free Demo'}
                                </button>

                                {state.succeeded && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-bold border border-green-200"
                                    >
                                        Thanks! We've received your request and will be in touch shortly.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
