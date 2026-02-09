import { motion } from 'framer-motion';
import { Play, CheckCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function FreeMasterclassPage() {
    const [email, setEmail] = useState('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thanks! We'll send the link to ${email}`);
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background image placeholder - using the energy flow image */}
                <div className="absolute inset-0 opacity-20">
                    <img src="/images/energy-flow.png" alt="Background" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/90 to-neutral-900"></div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-2 px-4 rounded-full bg-secondary-500/20 text-secondary-400 font-semibold text-sm mb-8 border border-secondary-500/30">
                                FREE EXCLUSIVE MASTERCLASS
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                                Unlock the <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500">Divine Code</span> to Manifesting Abundance
                            </h1>
                            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                                Stop chasing and start attracting. Learn the 3-step ancient energy secret that overrides limiting beliefs instantly.
                            </p>

                            {/* Video Placeholder - Centered */}
                            <div className="flex justify-center">
                                <div className="relative aspect-video w-full max-w-3xl bg-neutral-800 rounded-2xl border border-neutral-700 shadow-2xl overflow-hidden group cursor-pointer mb-12">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                                            <Play className="w-8 h-8 text-white fill-current" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-4 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-bold text-white">Masterclass Preview</div>
                                                <div className="text-xs text-neutral-400">Duration: 2 min</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <section className="py-16 bg-gradient-to-b from-neutral-900 to-primary-950">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                        {/* Left Side: Benefits */}
                        <div className="md:w-1/2 p-8 md:p-12 bg-neutral-50 text-neutral-900">
                            <h3 className="font-display text-2xl font-bold mb-6">What You'll Discover:</h3>
                            <ul className="space-y-4">
                                {[
                                    "The #1 reason why your affirmations haven't worked yet (and how to fix it).",
                                    "A guided 5-minute energy clearing technique you can use daily.",
                                    "How to align your 'Money Chakra' to receive wealth effortlessly.",
                                    "Real life examples of manifesting success in 30 days."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 bg-green-100 p-1 rounded-full">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                        </div>
                                        <span className="text-neutral-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-neutral-200">
                                <div className="flex items-center gap-4">
                                    <img src="/images/neer-portrait.png" alt="Neer" className="w-14 h-14 rounded-full object-cover border-2 border-primary-500" />
                                    <div>
                                        <div className="font-bold">Hosted by Neer</div>
                                        <div className="text-sm text-neutral-500">Founder, I Am Power Flow™</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="md:w-1/2 p-8 md:p-12 bg-primary-900 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-6 text-secondary-400">
                                    <Calendar className="w-5 h-5" />
                                    <span className="font-semibold uppercase tracking-wider text-sm">Next Session Starting Soon</span>
                                </div>

                                <h3 className="font-display text-2xl font-bold mb-2">Reserve Your Spot</h3>
                                <p className="text-primary-200 mb-8">Join 15,000+ others who have taken this class.</p>

                                <form onSubmit={handleRegister} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-primary-200 mb-1">Your First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 focus:outline-none focus:border-secondary-400 text-white" placeholder="Jane" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-primary-200 mb-1">Your Email Address</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 focus:outline-none focus:border-secondary-400 text-white"
                                            placeholder="jane@example.com"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="w-full py-4 bg-secondary-500 hover:bg-secondary-400 text-white font-bold rounded-lg shadow-lg shadow-secondary-500/20 transition-all transform hover:-translate-y-1">
                                        Watch Now For Free
                                    </button>
                                    <div className="text-center text-xs text-primary-300 mt-4">
                                        We respect your privacy. No spam.
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
