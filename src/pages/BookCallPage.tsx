import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/919876543210';

export default function BookCallPage() {
    const [showCalendly, setShowCalendly] = useState(false);
    const [questionnaireDone, setQuestionnaireDone] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        goal: '',
        programInterest: '',
    });

    const handlePreCallSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setQuestionnaireDone(true);
        setShowCalendly(true);
    };

    return (
        <>
            <section className="relative pt-32 pb-16 gradient-hero overflow-hidden">
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-20 right-20 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
                            <Calendar className="w-4 h-4 text-secondary-400" />
                            Free Discovery Call
                        </span>
                        <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight font-display">
                            Book Your <span className="gradient-text-gold">Discovery Call</span>
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            A 15–20 minute call to understand your goals and find the right program for you. No pressure, just clarity.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    {/* Primary CTA: WhatsApp */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 text-center"
                    >
                        <p className="text-neutral-600 mb-6">Fastest way to schedule:</p>
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary text-lg px-8 py-4 inline-flex gap-3"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Schedule via WhatsApp
                        </a>
                        <p className="text-neutral-500 text-sm mt-4">We reply within 24 hours with available slots.</p>
                    </motion.div>

                    <div className="border-t border-neutral-200 pt-12">
                        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-2">Or use the form below</h2>
                        <p className="text-neutral-600 mb-8">Answer a few questions so we can personalize your call.</p>

                        {!questionnaireDone ? (
                            <form onSubmit={handlePreCallSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="input"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="input"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="input"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">What is your main goal right now? *</label>
                                    <select
                                        required
                                        value={formData.goal}
                                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                        className="input"
                                    >
                                        <option value="">Select</option>
                                        <option value="wealth">Wealth & Abundance</option>
                                        <option value="health">Health & Energy</option>
                                        <option value="relationships">Relationships</option>
                                        <option value="career">Career & Business</option>
                                        <option value="clarity">General Clarity</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">Which program interests you most?</label>
                                    <select
                                        value={formData.programInterest}
                                        onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                                        className="input"
                                    >
                                        <option value="">Not sure yet</option>
                                        <option value="foundation">Foundation (Free)</option>
                                        <option value="abundance-seeker">Abundance Seeker (₹1,999)</option>
                                        <option value="manifestation-master">Manifestation Master (₹9,999)</option>
                                        <option value="vip-platinum">VIP Platinum (₹49,999)</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Continue to Calendar <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-accent-50 rounded-2xl p-6 mb-8 flex items-center gap-4"
                            >
                                <CheckCircle className="w-10 h-10 text-accent-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-neutral-900">Thanks! Check your email for reminders.</h3>
                                    <p className="text-neutral-600 text-sm">Book your slot below. You’ll get SMS/email reminders before the call.</p>
                                </div>
                            </motion.div>
                        )}

                        {showCalendly && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-8"
                            >
                                <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
                                    <iframe
                                        title="Calendly Discovery Call"
                                        src="https://calendly.com/magicalneer/discovery-call?hide_gdpr_banner=1"
                                        className="w-full h-[700px] min-h-[600px] border-0"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
