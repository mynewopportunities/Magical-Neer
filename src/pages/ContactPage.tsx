import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Mail,
    MapPin,
    Send,
    MessageCircle,
    Instagram,
    Youtube,
    Calendar,
    ChevronDown,
    CheckCircle,
} from 'lucide-react';

// FAQ Data
const faqs = [
    {
        question: 'What is the I Am Power Flow™ methodology?',
        answer:
            'The I Am Power Flow™ is a unique 3-pillar framework combining Energy Activation, Mind Programming, and Divine Alignment. It blends ancient spiritual wisdom with modern manifestation science to help you unlock your full potential and attract abundance in all areas of life.',
    },
    {
        question: 'Which program is right for me?',
        answer:
            "If you're new to manifestation, start with Abundance Seeker. If you're ready for deep transformation with 1-on-1 coaching, choose Manifestation Master. For lifetime access and the ultimate VIP experience, go for VIP Platinum. Not sure? Book a free discovery call!",
    },
    {
        question: 'Is there a refund policy?',
        answer:
            "Yes! We offer a 30-day money-back guarantee on all programs. If you've engaged with the material and don't see results, we'll refund your investment in full. We want you to feel completely confident in your decision.",
    },
    {
        question: 'How are the live sessions conducted?',
        answer:
            'Live sessions are conducted via Zoom. You\'ll receive calendar invites and reminders before each session. All sessions are recorded and available in your member dashboard within 24 hours if you can\'t attend live.',
    },
    {
        question: 'Can I upgrade my plan later?',
        answer:
            "Absolutely! You can upgrade anytime from your member dashboard. You'll only pay the difference between your current plan and the new one, prorated for the remaining billing period.",
    },
    {
        question: 'How do I book 1-on-1 coaching sessions?',
        answer:
            "Members with coaching access (Manifestation Master and VIP Platinum) can book sessions directly through their dashboard using our integrated calendar. You'll see Neer's available slots and can choose what works best for you.",
    },
];

// Hero Section
function ContactHero() {
    return (
        <section className="relative py-32 gradient-hero overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 right-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
                        <MessageCircle className="w-4 h-4 text-secondary-400" />
                        We'd Love to Hear From You
                    </span>

                    <h1 className="text-white mb-6">
                        Let's <span className="gradient-text-gold">Connect</span>
                    </h1>

                    <p className="text-white/80 text-xl max-w-2xl mx-auto">
                        Have questions about our programs? Ready to start your transformation? Reach out and we'll get back to you within 24 hours.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// Contact Form Section
function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send to an API
        setSubmitted(true);
    };

    return (
        <section className="section bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-neutral-900 mb-6">
                            Send Us a <span className="gradient-text">Message</span>
                        </h2>

                        {submitted ? (
                            <div className="bg-accent-50 rounded-2xl p-8 text-center">
                                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-accent-600" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                                <p className="text-neutral-600">
                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="input"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                                            Email Address *
                                        </label>
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

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="input"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="input"
                                        >
                                            <option value="">Select a topic</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="programs">Programs & Pricing</option>
                                            <option value="support">Technical Support</option>
                                            <option value="collaboration">Collaboration</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="input resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Send Message <Send className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-neutral-900 mb-6">
                            Other Ways to <span className="gradient-text">Reach Us</span>
                        </h2>

                        {/* Primary CTA: WhatsApp */}
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mb-8 rounded-2xl p-6 bg-[#25D366]/10 border-2 border-[#25D366]/30 hover:border-[#25D366] transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-neutral-900 mb-1">WhatsApp (Primary)</h4>
                                    <p className="text-neutral-600 text-sm mb-2">Fastest response. Chat with us directly.</p>
                                    <span className="text-[#25D366] font-medium">+91 98765 43210 →</span>
                                </div>
                            </div>
                        </a>

                        {/* Contact Cards */}
                        <div className="space-y-6 mb-8">
                            <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                                    <a href="mailto:support@magicalneer.com" className="text-primary-600 hover:underline">
                                        support@magicalneer.com
                                    </a>
                                    <p className="text-neutral-500 text-sm mt-1">We reply within 24 hours</p>
                                </div>
                            </div>

                            <div className="bg-neutral-50 rounded-2xl p-6 flex items-start gap-4">
                                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-secondary-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-neutral-900 mb-1">Location</h4>
                                    <p className="text-neutral-600">Mumbai, Maharashtra, India</p>
                                    <p className="text-neutral-500 text-sm mt-1">Online programs available worldwide</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mb-8">
                            <h4 className="font-semibold text-neutral-900 mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://instagram.com/magicalneer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                                >
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://youtube.com/@magicalneer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                                >
                                    <Youtube className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Book a Call CTA */}
                        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Book a Free Discovery Call</h4>
                                    <p className="text-white/80 text-sm mb-4">
                                        Not sure which program is right for you? Schedule a free 15–20 minute call. We respond within 24 hours.
                                    </p>
                                    <Link to="/book-call" className="btn bg-white text-primary-700 hover:bg-neutral-50 text-sm py-2 px-4 inline-flex">
                                        Schedule Call
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Calendly embed – discovery calls
function CalendlySection() {
    return (
        <section className="section bg-neutral-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-10"
                >
                    <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">Discovery Calls</span>
                    <h2 className="text-neutral-900 mb-4">Schedule a <span className="gradient-text">Free Call</span></h2>
                    <p className="text-neutral-600">Pick a time that works for you. We’ll send SMS/email reminders.</p>
                </motion.div>
                <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-white">
                    <iframe
                        title="Calendly – Magical Neer Discovery Call"
                        src="https://calendly.com/magicalneer/discovery-call?hide_gdpr_banner=1"
                        className="w-full h-[700px] min-h-[600px] border-0"
                    />
                </div>
            </div>
        </section>
    );
}

// FAQ Section
function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section bg-neutral-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                        FAQ
                    </span>
                    <h2 className="text-neutral-900 mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-neutral-600 text-lg">
                        Find answers to common questions about our programs and methodology.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`w-full text-left bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all ${openIndex === index ? 'ring-2 ring-primary-500' : ''
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-neutral-900 pr-4">{faq.question}</h3>
                                    <ChevronDown
                                        className={`w-5 h-5 text-neutral-500 transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </div>
                                {openIndex === index && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="text-neutral-600 mt-4 pt-4 border-t border-neutral-100"
                                    >
                                        {faq.answer}
                                    </motion.p>
                                )}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-neutral-600 mb-4">Still have questions?</p>
                    <Link to="/contact" className="btn btn-primary">
                        <MessageCircle className="w-5 h-5" /> Chat with Us
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactFormSection />
            <CalendlySection />
            <FAQSection />
        </>
    );
}
