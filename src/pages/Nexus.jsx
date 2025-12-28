import { useForm } from '@formcarry/react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import SectionHeading from '../components/SectionHeading'

export default function Nexus() {
    const { state, submit } = useForm({ id: 'ATbrs3Zki2t' }) // Reusing the same ID or a new one if provided

    return (
        <div className="pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative px-6 mb-20 lg:mb-32">
                <Parallax speed={-5}>
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-brand-blue-600/5 via-transparent to-transparent" />
                </Parallax>
                <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-brand-charcoal bg-white rounded-full border border-black/5 shadow-sm">
                            <span className="text-blue-500">♾️</span> Official Meta Business Partner
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-brand-charcoal mb-6 leading-[1.1]">
                            Transform Every <br />
                            Chat Into <br />
                            <span className=" bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
                                Revenue.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                            Watch authentic conversations flow automatically. The AI Sales Agent that seamlessly integrates into your existing WhatsApp Business account.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#demo" className="px-8 py-4 bg-brand-blue-600 text-center rounded-full font-medium hover:bg-brand-blue-700 hover:scale-105 transition-all shadow-lg shadow-brand-blue-500/20">
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
                        <div className="bg-gray-900 p-2 rounded-[3rem] shadow-2xl mx-auto w-full max-w-[320px]">
                            <div className="bg-white rounded-[2.5rem] overflow-hidden relative h-[600px] flex flex-col">
                                {/* Status Bar area */}
                                <div className="bg-[#075E54] px-6 pt-4 pb-2 flex items-center justify-between text-white/90 text-xs font-medium">
                                    <span>9:41</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 bg-current rounded-full opacity-0" /> {/* Spacer */}
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
                                    <div className="self-end bg-[#D9FDD3] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%]">
                                        <p>Salam! Do you have the SonicBass Headphones in black?</p>
                                        <div className="text-[10px] text-gray-500 text-right mt-1">10:42 AM</div>
                                    </div>
                                    <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%]">
                                        <p>Walaikum Assalam! Yes, SonicBass in Matte Black is in stock. 🎧</p>
                                        <ul className="mt-2 text-xs space-y-1 text-gray-600 border-l-2 border-green-500 pl-2">
                                            <li>• Price: Rs. 4,500</li>
                                            <li>• 1 Year Warranty</li>
                                            <li>• Free Shipping</li>
                                        </ul>
                                        <p className="mt-2">Should I book one for you?</p>
                                        <div className="text-[10px] text-gray-500 text-right mt-1">10:42 AM</div>
                                    </div>
                                    <div className="self-end bg-[#D9FDD3] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%]">
                                        <p>Yes please. COD to Lahore.</p>
                                        <div className="text-[10px] text-gray-500 text-right mt-1">10:43 AM</div>
                                    </div>
                                    <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%]">
                                        <p>Done! Order #NEX882 confirmed. It will arrive in 2 days. 🚀</p>
                                        <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-100">
                                            <div className="font-medium">Total: Rs. 4,500</div>
                                            <div>Payment: Cash on Delivery</div>
                                        </div>
                                        <p className="mt-2">Tracking link sent. Enjoy the music!</p>
                                        <div className="text-[10px] text-gray-500 text-right mt-1">10:43 AM</div>
                                    </div>
                                </div>

                                {/* Input Area Placeholder */}
                                <div className="bg-[#f0f2f5] p-2 flex items-center gap-2 shrink-0">
                                    <div className="w-8 h-8 rounded-full bg-white text-gray-400 flex items-center justify-center text-xl">+</div>
                                    <div className="flex-1 h-9 bg-white rounded-full px-4 text-sm text-gray-400 flex items-center">Type a message</div>
                                    <div className="w-8 h-8 rounded-full bg-brand-blue-600 text-white flex items-center justify-center text-sm">➤</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-y border-black/5 bg-gray-50/50 py-12 mb-20">
                <div className="mx-auto max-w-7xl px-6 flex flex-wrap justify-center gap-16 md:gap-32">
                    <div className="text-center">
                        <span className="block text-4xl md:text-5xl font-bold text-brand-charcoal mb-2">500+</span>
                        <span className="text-gray-500 font-medium">Businesses Trust Us</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-4xl md:text-5xl font-bold text-brand-charcoal mb-2">10M+</span>
                        <span className="text-gray-500 font-medium">Messages Automated</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-4xl md:text-5xl font-bold text-brand-charcoal mb-2">95%</span>
                        <span className="text-gray-500 font-medium">Customer Satisfaction</span>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="px-6 py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <SectionHeading title="Losing Customers to Slow Responses?" />
                        <p className="text-gray-600 mt-4 text-lg">Every minute of delay costs you potential customers. Here's what's hurting your business right now:</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center text-center">
                            <div className="text-4xl mb-4">📉</div>
                            <h3 className="font-display text-xl font-bold mb-3">Manual Replies Cost Sales</h3>
                            <p className="text-gray-600 text-sm">Customers expect instant responses. Manual handling leads to delayed replies and lost opportunities every hour.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center text-center">
                            <div className="text-4xl mb-4">🌙</div>
                            <h3 className="font-display text-xl font-bold mb-3">No After-Hours Support</h3>
                            <p className="text-gray-600 text-sm">Your business doesn't sleep, but your team does. Missing after-hours inquiries means missing revenue.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center text-center">
                            <div className="text-4xl mb-4">🤯</div>
                            <h3 className="font-display text-xl font-bold mb-3">Overwhelming Volume</h3>
                            <p className="text-gray-600 text-sm">As you grow, manual chat management becomes impossible. Social/WhatsApp leads slip through the cracks.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading title="Powerful Features, Real Results" />

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {[
                            { title: "AI-Powered Responses", icon: "🤖", desc: "ChatGPT-powered AI understands context and provides natural, human-like responses to engage customers instantly." },
                            { title: "Lead Capture & Qualification", icon: "📊", desc: "Automatically identify hot leads, collect contact details, and score prospects based on engagement." },
                            { title: "24/7 Automated Support", icon: "⏰", desc: "Your AI assistant works around the clock, handling inquiries and booking appointments 24/7." },
                            { title: "Direct WhatsApp API", icon: "✅", desc: "Official Business API integration to get the verified green tick and unlimited messaging capabilities." },
                            { title: "Recover Abandoned Carts", icon: "🛒", desc: "Automatically trigger follow-ups for pending orders. 'Salam! Apka order pending hai. 10% discount?'" },
                            { title: "No Coding Required", icon: "⚡", desc: "Simple setup that integrates directly into your existing workflow without technical headaches." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gray-50 p-8 rounded-2xl border border-black/5 hover:border-brand-blue-500/20 transition-colors flex flex-col items-center text-center"
                            >
                                <div className="text-4xl mb-6">{feature.icon}</div>
                                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Demo Form Section */}
            <section id="demo" className="px-6 py-32 relative">
                <div className="mx-auto max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-brand-charcoal mb-4">Join 500+ Businesses</h2>
                        <p className="text-gray-600">Book a free demo to see exactly how Nexus can automate your success. Setup in 24-48 hours.</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl border border-black/5 p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue-600 to-brand-blue-400" />

                        <form onSubmit={submit} className="grid gap-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-brand-charcoal mb-2">First Name</label>
                                    <input required name="first_name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-charcoal mb-2">Last Name</label>
                                    <input required name="last_name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 outline-none transition-all" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-charcoal mb-2">Work Email</label>
                                <input required type="email" name="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 outline-none transition-all" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-charcoal mb-2">Company Name</label>
                                <input required name="company" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 outline-none transition-all" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-charcoal mb-2">Any specific requirements?</label>
                                <textarea name="requirements" rows="3" placeholder="Tell us a bit about your business and what you're looking for..." className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 outline-none transition-all resize-none" />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full py-4 bg-brand-charcoal text-gray-400 rounded-xl font-bold text-lg hover:bg-black transition-colors shadow-lg disabled:opacity-70 mt-4"
                            >
                                {state.submitting ? 'Sending Request...' : 'Book Free Demo'}
                            </button>

                            {state.succeeded && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-medium border border-green-100"
                                >
                                    Thanks! We've received your request and will be in touch shortly.
                                </motion.div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
