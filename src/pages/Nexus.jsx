import { useForm } from '@formcarry/react'
import { motion } from 'framer-motion'

export default function Nexus() {
    const { state, submit } = useForm({ id: 'ATbrs3Zki2t' })
    const shopifyAppUrl = 'https://apps.shopify.com/nexusai'

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
                                <span className="text-[#19325a]">⚡</span> Plug-and-Play Integration
                            </div>
                            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-brand-charcoal mb-6 leading-[1.05] tracking-tight">
                                Turn every customer chat into a <span className="text-[#19325a]">sale.</span>
                            </h1>
                            <p className="text-lg text-brand-charcoal/70 mb-8 max-w-lg leading-relaxed">
                                Nexus is the premier autonomous AI team for modern e-commerce. Deploy an AI Shopping Assistant, a Support Concierge, and a native Voice AI rep that work 24/7. No extra headcount required.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href={shopifyAppUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#19325a] text-white text-center rounded-full font-bold hover:bg-[#0c1a2f] transition-all shadow-[0_8px_30px_rgba(25,50,90,0.3)] hover:shadow-[0_12px_40px_rgba(25,50,90,0.4)] flex items-center justify-center gap-2">
                                    Install on Shopify <span className="text-white/70 text-sm font-normal">(1-Day Free Trial)</span>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative flex justify-center"
                        >
                            {/* Floating Sync Badge */}
                            <div className="absolute -left-6 top-12 z-20 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-black/5 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-bold text-sm text-brand-charcoal">Live Inventory Synced</span>
                            </div>

                            {/* Live Chat Simulation - Phone Frame */}
                            <div className="bg-gray-100 p-2 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] mx-auto w-full max-w-[320px] relative z-10">
                                <div className="bg-white rounded-[2.5rem] overflow-hidden relative h-[600px] flex flex-col">
                                    {/* Status Bar */}
                                    <div className="bg-[#19325a] px-6 pt-4 pb-2 flex items-center justify-between text-white/90 text-xs font-medium">
                                        <span>9:41</span>
                                        <div className="flex gap-1.5">
                                            <span>5G</span>
                                            <span>100%</span>
                                        </div>
                                    </div>

                                    {/* Header */}
                                    <div className="bg-[#19325a] px-4 pb-4 flex items-center gap-3 text-white shadow-sm shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-lg">🤖</div>
                                        <div>
                                            <div className="font-medium text-sm">AI Shopping Assistant</div>
                                            <div className="text-[10px] opacity-80 uppercase tracking-wide">Usually replies instantly</div>
                                        </div>
                                    </div>

                                    {/* Chat Area (Shopping Context) */}
                                    <div className="bg-gray-50 p-4 flex-1 overflow-y-auto flex flex-col gap-4 text-sm">
                                        <div className="self-end bg-[#19325a] text-white p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%]">
                                            <p>Do you have the minimalist ceramic vase in stock? Need it for a gift.</p>
                                        </div>
                                        
                                        <div className="self-start w-full">
                                            <div className="bg-white border border-black/10 rounded-2xl rounded-tl-sm shadow-sm overflow-hidden text-brand-charcoal">
                                                <div className="p-3 border-b border-black/5 bg-gray-50/50">
                                                    <p>Yes, we have 4 left in stock! Here's the one you're looking for:</p>
                                                </div>
                                                <div className="p-3">
                                                    <div className="h-32 bg-gray-200 rounded-xl mb-3 flex items-center justify-center text-4xl">🏺</div>
                                                    <h4 className="font-bold">Minimalist Ceramic Vase</h4>
                                                    <p className="text-brand-charcoal/60 text-xs mb-2">Matte White • Premium Clay</p>
                                                    <div className="flex justify-between items-center mt-3">
                                                        <span className="font-bold">$45.00</span>
                                                        <button className="bg-black text-white px-3 py-1.5 rounded-lg text-xs font-bold">Add to Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Input Placeholder */}
                                    <div className="bg-white border-t border-black/5 p-3 flex items-center gap-2 shrink-0">
                                        <div className="flex-1 h-10 bg-gray-100 rounded-full px-4 text-sm text-gray-400 flex items-center">Type your message...</div>
                                        <div className="w-10 h-10 rounded-full bg-[#19325a] text-white flex items-center justify-center text-sm">➤</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Meet Your AI Team */}
                <section className="px-6 py-24 bg-white relative">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-charcoal mb-4">Meet Your AI Team</h2>
                            <p className="text-brand-charcoal/70 max-w-2xl mx-auto text-lg">Specialised, autonomous agents working together to elevate your customer experience.</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Shopping Assistant */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-[2rem] border border-black/5 overflow-hidden flex flex-col">
                                <div className="p-8 pb-0 flex-1 text-center flex flex-col items-center">
                                    <div className="text-4xl mb-4">🛍️</div>
                                    <h3 className="font-display text-2xl font-bold mb-3">Shopping Assistant</h3>
                                    <p className="text-brand-charcoal/70 mb-6">Instantly recommends products, answers sizing questions, and drives conversions directly in the chat.</p>
                                </div>
                                <div className="bg-white m-4 mt-0 rounded-2xl border border-black/5 shadow-sm p-4">
                                    <div className="flex gap-2 mb-3 items-end">
                                        <div className="bg-gray-100 p-2 rounded-xl rounded-bl-sm text-xs w-3/4">Do you have this in medium?</div>
                                    </div>
                                    <div className="flex gap-2 justify-end items-end">
                                        <div className="bg-[#19325a] text-white p-2 rounded-xl rounded-br-sm text-xs w-3/4">Yes, we have 2 Mediums left in Navy! I've added a 10% discount code to your cart.</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Voice AI Rep */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#19325a] text-white rounded-[2rem] overflow-hidden flex flex-col relative shadow-xl">
                                <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">The First on Shopify</div>
                                <div className="p-8 pb-0 flex-1 relative z-10 text-center flex flex-col items-center">
                                    <div className="text-4xl mb-4">📞</div>
                                    <h3 className="font-display text-2xl font-bold mb-3">Voice AI Rep</h3>
                                    <p className="text-white/70 mb-6">Let your customers call you. Our native Voice AI answers instantly, checking order status and resolving queries over the phone.</p>
                                </div>
                                <div className="bg-black/20 m-4 mt-0 rounded-2xl p-6 flex flex-col items-center justify-center relative z-10 border border-white/10">
                                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20 animate-pulse">
                                        <span className="text-2xl">🎙️</span>
                                    </div>
                                    <div className="flex items-center gap-1 h-6">
                                        {[40, 70, 30, 90, 50, 80, 40, 100, 60, 30].map((h, i) => (
                                            <div key={i} className="w-1.5 bg-white rounded-full opacity-80" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                    <div className="text-xs font-mono text-white/50 mt-4">"Checking your order..."</div>
                                </div>
                            </motion.div>

                            {/* Support Concierge */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gray-50 rounded-[2rem] border border-black/5 overflow-hidden flex flex-col">
                                <div className="p-8 pb-0 flex-1 text-center flex flex-col items-center">
                                    <div className="text-4xl mb-4">🎫</div>
                                    <h3 className="font-display text-2xl font-bold mb-3">Support Concierge</h3>
                                    <p className="text-brand-charcoal/70 mb-6">Automatically resolves FAQs and seamlessly hands off complex tickets (like refunds) to your human team.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-2 m-4 mt-0">
                                    <div className="bg-white rounded-xl border border-black/5 p-3 flex flex-col justify-between shadow-sm">
                                        <div className="text-[10px] uppercase font-bold text-green-600 mb-2">Resolved By AI</div>
                                        <div className="text-xs bg-gray-100 p-2 rounded-lg mb-2 truncate">Where is my order?</div>
                                        <div className="text-xs text-brand-charcoal/60">Sent tracking link</div>
                                    </div>
                                    <div className="bg-white rounded-xl border border-black/5 p-3 flex flex-col justify-between shadow-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-8 h-8 bg-orange-100 rounded-bl-full" />
                                        <div className="text-[10px] uppercase font-bold text-orange-600 mb-2">Human Handoff</div>
                                        <div className="text-xs bg-gray-100 p-2 rounded-lg mb-2 truncate">My item arrived broken.</div>
                                        <div className="text-[10px] bg-black text-white px-2 py-1 rounded text-center">Open Inbox</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Nexus? Trust Section */}
                <section className="px-6 py-24 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6f8] to-white" />
                    <div className="mx-auto max-w-5xl relative z-10">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="font-display text-3xl font-bold mb-4">Live Inventory Sync</h2>
                                <p className="text-lg text-brand-charcoal/70 mb-6">We read your Shopify catalog in real-time. We never hallucinate prices or sell out-of-stock items. Total peace of mind.</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Real-time variant availability</li>
                                    <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Automatic price syncing</li>
                                    <li className="flex items-center gap-3"><span className="text-green-500">✓</span> No manual data entry required</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-display text-3xl font-bold mb-4">Omnichannel Inbox</h2>
                                <p className="text-lg text-brand-charcoal/70 mb-6">WhatsApp, Instagram, Web, and Voice. Never miss a customer wherever they prefer to chat.</p>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-black/5 flex items-center justify-center text-2xl">📱</div>
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-black/5 flex items-center justify-center text-2xl">📸</div>
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-black/5 flex items-center justify-center text-2xl">💻</div>
                                    <div className="w-12 h-12 bg-[#19325a] text-white rounded-2xl shadow-sm border border-[#19325a] flex items-center justify-center text-2xl">📞</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modular Pricing */}
                <section className="px-6 py-24 bg-[#0c1a2f] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                    <div className="mx-auto max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">Transparent, Results-Based Pricing</h2>
                            <p className="text-white/70 max-w-2xl mx-auto text-lg">You only pay for actual value—sales generated and tickets resolved. Explore our modular plans.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-[2rem] p-8 flex flex-col text-center items-center">
                                <h3 className="font-bold text-xl mb-2">Essential</h3>
                                <p className="text-sm text-white/60 mb-6 flex-1">Basic text AI and automated support resolution for growing stores.</p>
                                <a href={shopifyAppUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl font-bold">View Pricing</a>
                            </div>
                            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-[2rem] p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-black/50 text-center items-center">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#19325a] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Most Popular</div>
                                <h3 className="font-bold text-xl mb-2">Growth</h3>
                                <p className="text-sm text-white/60 mb-6 flex-1">Proactive sales, intelligent product recommendations, and omnichannel routing.</p>
                                <a href={shopifyAppUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 bg-white text-[#19325a] hover:bg-gray-100 transition-colors rounded-xl font-bold">View Pricing</a>
                            </div>
                            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-[2rem] p-8 flex flex-col text-center items-center">
                                <h3 className="font-bold text-xl mb-2">Voice Pro</h3>
                                <p className="text-sm text-white/60 mb-6 flex-1">The ultimate tier featuring our native, instant Voice AI representative.</p>
                                <a href={shopifyAppUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl font-bold">View Pricing</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enterprise Customization Form */}
                <section id="demo" className="px-6 py-32 relative">
                    <div className="mx-auto max-w-3xl">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-extrabold text-brand-charcoal mb-4">Enterprise Customization</h2>
                            <p className="text-brand-charcoal/70">Need bespoke workflows, ERP integrations, or a custom LLM fine-tuned on your brand voice? Book a consultation.</p>
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
                                    {state.submitting ? 'Sending Request...' : 'Book Enterprise Demo'}
                                </button>

                                {state.succeeded && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-bold border border-green-200"
                                    >
                                        Thanks! Our enterprise team will be in touch shortly.
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
